<?php
// 本类由系统自动生成，仅供测试用途
class ColumnAction extends Action {
    public function index(){

    	$parent = $this->param('cid',10);

    	$map['parent'] = $parent/10;

    	$columns = M('columns') -> where($map) -> order('sequence') -> select();

    	$this -> assign('showId',$this->_param('cid'));

    	$this -> assign('columns',$columns);
		
		$this -> display();
	}

		function param($name, $default){

		return is_null($this->_param($name)) ? $default : $this->_param($name);

	}
//静态化 用不到了。。
		public function html(){
			

			$columns = M('columns') -> where($map) -> order('sequence') -> select();

			foreach ($columns as $key => $value) {
				
				$this -> buildHtml($value['parent'].$value['sequence'],HTML_PATH.'/','index','utf-8');

				print($value['title']);

			}

			echo "OK!";

		}
}