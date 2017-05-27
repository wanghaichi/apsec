<?php
/**
 * Created by PhpStorm.
 * User: hardy
 * Date: 2017/5/23
 * Time: 10:16
 */
class NewsAction extends Action {
    public function __construct()
    {
        parent::__construct();
        if(!session(C('USER_AUTH_KEY')))
            redirect(__APP__."/?g=Admin&m=Auth&a=loginPage");
    }
    public function index(){
        $cid =$this->_param('cid');

        if(!$cid)
            $cid = 90;
        switch($cid)
        {
            case 90:
                $active = "活动通知";
                break;
            case 91;
                $active = "中心动态";
                break;
            case 92;
                $active = "全球资源";
                break;
            case 93;
                $active = "重点项目";
                break;
            case 94;
                $active = "案例介绍";
                break;
            default:
                $active = "error";
                break;
        }
        $result = $this->getNews($cid);

        $this->assign('show', $result['page']);
        $this->assign('active',$active);
        $this->assign('cid',$cid);
        $this->assign('result', $result);
        $this->display('indexPage');
    }
    public function addPage(){
        $this->display('addPage');
    }
    public function updatePage(){
        $cid = $this->_param('cid');
        $map['id'] = $this->_param('id');
        $result = D('News')->where($map)->find();
        if($result){
            $this->assign('result',$result);
            $this->assign('cid', $cid);
            $this->assign('id', $map['id']);
            $this->display('updatePage');
        }else{
            echo "<script>alert(\"未找到页面\");history.go(-1);</script>";
        }
    }
    public function update(){
        $map['id'] = $this->_param('id');
        $cid = $this->_param('cid');
        $data = $this->_param();

        $judge = D('News')->save($data);
        if($judge > 0)
            echo "<script>alert(\"更新成功\");top.location='".__APP__."/?g=Admin&m=News&a=index&cid=$cid';</script>";
        else
            echo "<script>alert(\"更新失败\");top.location='".__APP__."/?g=Admin&m=News&a=index&cid=$cid';</script>";
    }

    private function getNews($cid = null){
        $map['cid'] = $cid;

        $numPerPage = 10;
        $count = D('News')->where($map)->count();
        import('ORG.Paging');
        $paging = new Paging($count, $numPerPage, __APP__."/?g=Admin&m=News&a=index&cid=".$cid);
        $show = $paging->show();

        $result['rows'] = D('News')
            ->where($map)
            ->order('sequence desc, addtime desc')
            ->limit($paging->firstRow, $paging->numPerPage)
            ->select();

        if (is_null($result["rows"]))
            $result["rows"] = array();
        $result['count'] = $count;
        $result['page'] = $show;

        return $result;
    }
    public function add(){
        $data = $this->_param();
        if(D('News')->add($data)){
            echo "<script>alert(\"添加成功\");top.location='".__APP__."/?g=Admin&m=News&a=index&cid=".$data['cid']."';</script>";
        }else{
            echo "<script>alert(\"添加失败\");top.location='".__APP__."/?g=Admin&m=News&a=index&cid=".$data['cid']."';</script>";
        }
    }

    public function delete(){
        $Msg = M("news");
        $cid = $this->_param('cid');
        $data['id'] = $this->_param('id');
        $Msg->where($data)->delete();
        echo "<script>alert(\"删除成功\");top.location='".__APP__."/?g=Admin&m=News&a=index&cid=".$cid."';</script>";
    }
}