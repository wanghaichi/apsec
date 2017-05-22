<?php
// 本类由系统自动生成，仅供测试用途
class NewsAction extends Action {
   
    public function index(){


    	$map['cid'] = $this->param('cid',90);

    	if($map['cid']==93){

    		$news = M('news');

			import('ORG.Util.Page');// 导入分页类
			
			$count      = $news->where($map)->count();// 查询满足要求的总记录数
			
			$Page       = new Page($count,10);// 实例化分页类 传入总记录数和每页显示的记录数
			
			$show       = $Page->show();// 分页显示输出

			$News = $news->field('apec_colname.name as sid ,apec_news.id,title,addtime')
			->join('apec_colname on apec_colname.id='.$map['cid'])->

			where($map)->order('addtime desc')->limit($Page->firstRow.','.$Page->listRows)->select();

			$this->assign('news',$News);

			$this->assign('page',$show);// 赋值分页输出
			
			$this -> display('indexP');
		
    	}

    		else{

    	$news = M('news');

		import('ORG.Util.Page');// 导入分页类
		
		$count      = $news->where($map)->count();// 查询满足要求的总记录数
		
		$Page       = new Page($count,10);// 实例化分页类 传入总记录数和每页显示的记录数
		
		$show       = $Page->show();// 分页显示输出

		$News = $news->field('apec_colname.name as sid ,apec_news.id,title,addtime')
		->join('apec_colname on apec_colname.id='.$map['cid'])->

		where($map)->order('addtime desc')->limit($Page->firstRow.','.$Page->listRows)->select();

		$this->assign('news',$News);

		$this->assign('page',$show);// 赋值分页输出

		$columns = M('colname') -> where('id>=90') -> select();

    	$this -> assign('colname',$columns);
		
		$this->display(); // 输出模板
	}

   }
 

    public function read(){

    	$map['apec_news.id'] = $this->param('id',1);

    	$news = M('news') 
    	->field('apec_colname.name as cid,title,content,addtime')
    	->join('apec_colname on apec_colname.id=apec_news.cid')
    	-> where($map) -> order('sequence') -> find();

    	$columns = M('colname') -> where('id>=90') -> select();

    	$this -> assign('colname',$columns);

    	$this -> assign('news',$news);
		
		$this -> display();
	}

	public function readP(){

    	$map['apec_news.id'] = $this->param('id',1);

    	$news = M('news') 
    	->field('apec_colname.name as cid,title,content,addtime')
    	->join('apec_colname on apec_colname.id=apec_news.cid')
    	-> where($map) -> order('sequence') -> find();

    	$this -> assign('news',$news);
		
		$this -> display();
	}

		function param($name, $default){

		return is_null($this->_param($name)) ? $default : $this->_param($name);

	}

		public function html(){
			

			$columns = M('columns') -> where($map) -> order('sequence') -> select();

			foreach ($columns as $key => $value) {
				
				$this -> buildHtml($value['parent'].$value['sequence'],HTML_PATH.'/','index','utf-8');

				print($value['title']);

			}

			echo "OK!";

		}

}