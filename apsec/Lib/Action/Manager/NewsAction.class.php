<?php

// 本类由系统自动生成，仅供测试用途

class NewsAction extends Action {

    public function index(){

		$this->display();

    }

    function newsList(){

		$page = $this->_param('page');

		$rows = $this->_param('rows');

		$offset = ($page - 1) * $rows;

		$data["cid"] = $this->_param('cid');;

		$Msg = D("news");

		$result["total"] = $Msg->where($data)->count();

		$result["rows"] = $Msg->where($data)->limit($rows)->page($page)->order('addtime desc')->order('sequence')->select();

		if (is_null($result["rows"]))

			$result["rows"] = array();


		echo json_encode($result);

	}
    function columnsList(){

        $page = $this->_param('page');

        $rows = $this->_param('rows');

        $offset = ($page - 1) * $rows;

        $data["parent"] = $this->_param('parent');

        $Msg = D("columns");

        $result["total"] = $Msg->field('apec_columns.id,apec_colname.name as cid,apec_columns.name,content,sequence')
                               ->join('apec_colname on apec_colname.id=apec_columns.cid')
                               ->where($data)->count();

        $result["rows"] = $Msg->field('apec_columns.id,apec_colname.name as cid,apec_columns.name,content,sequence')
                              ->join('apec_colname on apec_colname.id=apec_columns.cid')
                              ->where($data)->limit($rows)->page($page)->order('cid')->select();

        if (is_null($result["rows"]))

            $result["rows"] = array();


        echo json_encode($result);

    }
    //
	function save(){

		$data = $this->_param();

		$r = M('Message') -> add($data);

			if($r > 0)
				echo "<script>alert(\"success\");top.location='?mo=News&ac=showNews';</script>";
			else
				echo "<script>alert(\"failed\");top.location='?mo=News&ac=showNews';</script>";

	}
    //更新新闻信息
    function update(){

        $map['id'] = $this->_param('id');

        $data = $this->_param();

        $r = M('news') -> where($map) -> save($data);

        if($r > 0)
                echo "<script>alert(\"success\");top.location='__APP__/?g=Manager&mo=News&ac=showNews';</script>";
            else
                echo "<script>alert(\"failed\");top.location='__APP__/?g=Manager&mo=News&ac=showNews';</script>";


    }
    //更新栏目信息
    function updateC(){

        $map['id'] = $this->_param('id');

        $data = $this->_param();

        $r = M('columns') -> where($map) -> save($data);

        if($r > 0)
                echo "<script>alert(\"success\");top.location='__APP__/?g=Manager&mo=News&ac=showColumns';</script>";
            else
                echo "<script>alert(\"failed\");top.location='__APP__/?g=Manager&mo=News&ac=showColumns';</script>";


    }
    //添加新闻
	public function addNews(){

		$this->display();
	}

    public function upload() {
        if (!empty($_FILES)) {
            //如果有文件上传 上传附件
            $this->_upload();
        }
    }

    // 文件上传
    protected function _upload() {
        import('@.ORG.UploadFile');
        //导入上传类
        $upload = new UploadFile();
        //设置上传文件大小
        $upload->maxSize            = 3292200;
        //设置上传文件类型
        $upload->allowExts          = explode(',', 'jpg,gif,png,jpeg');
        //设置附件上传目录
        $upload->savePath           = '../Public/Images/tuanwei/uploads/';
        //设置上传文件规则
        $upload->saveRule           = 'uniqid';

        //$upload->thumbRemoveOrigin  = true;
        if (!$upload->upload()) {
            //捕获上传异常
            $this->error($upload->getErrorMsg());
            
        } else {
            //取得成功上传的文件信息
            $uploadList = $upload->getUploadFileInfo();
            import('@.ORG.Image');
            //给m_缩略图添加水印, Image::water('原文件名','水印图片地址')
            echo "<script>window.parent.uploadSuccess(\"{$uploadList[0]['savename']}\");</script>";

        }
        /*$model  = M('Photo');
        //保存当前数据对象
        $data['image']          = $_POST['image'];
        $data['create_time']    = NOW_TIME;
        $list   = $model->add($data);
        if ($list !== false) {
            echo $data['image'] ;
        } else {
            $this->error('上传图片失败!');
        }*/
    }

    function edit(){

        $map['id'] = $this->_param('id');

        $news = M('news') -> where($map) -> find();

        $this->assign('news',$news);

        $this->display();


    } 
    //编辑栏目信息
    function editC(){

        $map['id'] = $this->_param('id');

        $columns = M('columns') -> where($map) -> find();

        $this->assign('columns',$columns);

        $this->display();


    } 

   function delete(){

        $Msg = M("news");

        $data['id'] = $this->_param('id');

        $r = $Msg->where($data)->delete();

        echo $r;

    }

    function deleteC(){

        $Msg = M("columns");

        $data['id'] = $this->_param('id');

        $r = $Msg->where($data)->delete();

        echo $r;

    }


}

