<?php

// 本类由系统自动生成，仅供测试用途

class ImgwallAction extends Action {

    public function index(){

		$this->display();

    }

    function imgList(){

		$page = $this->param('page');

		$rows = $this->param('rows');

		$offset = ($page - 1) * $rows;

		$Msg = D("images");

		$result["total"] = $Msg->count();

		$result["rows"] = $Msg->limit($rows)->page($page)//->field("concat('<img src=../Public/Images/tuanwei/wechat/',msgid,'.jpg>') as msgid,author,enable,content,sequence")

		->order('addtime desc')->order('sequence desc')->order('enable desc')->select();

		if (is_null($result["rows"]))

			$result["rows"] = array();


		echo json_encode($result);

	}

	function save(){

		$content = $this->_param('content');

		$author = $this->_param('author');

		$enable = $this->_param('enable');	

		$sequence = $this->_param('sequence');		

		$M = M('images');

		$data['content'] = $content;

		$data['author'] = $author;

		$data['enable'] = $enable;

		$data['sequence'] = $sequence;

		$id = $M->add($data);

		if ($id > 0)

			echo json_encode($C->find($id));

		else

			echo dump($C->getlastsql());

	}



	function update(){

		$M = M('images');

		$M->create();

		$M->save();

		echo json_encode($this->_param('id'));

	}



	function del(){

		$data['id'] = $this->_param('id');

		$M = M('images');

		$M->where($data)->delete();

		echo json_encode(array('success'=>true));

	}

	function param($name, $default){

		return is_null($this->_param($name)) ? $default : $this->_param($name);

	}



}