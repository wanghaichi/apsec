<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
		
		$news1 = M("news") -> where("cid=90") -> order('addtime desc') -> limit('5') -> select();

		$news2 = M("news") -> where("cid=91") -> order('addtime desc') -> limit('10') -> select();

		$news3 = M("news") -> where("cid=92") -> order('addtime desc') ->limit('7') -> select();

		$this -> assign('news1',$news1);

		$this -> assign('news2',$news2);

		$this -> assign('news3',$news3);

		$this -> display();
	}
	  public function indexen(){
		
		$news1 = M("news") -> where("cid=90") -> order('addtime desc') -> limit('5') -> select();

		$news2 = M("news") -> where("cid=91") -> order('addtime desc') -> limit('10') -> select();

		$news3 = M("news") -> where("cid=92") -> order('addtime desc') ->limit('7') -> select();

		$this -> assign('news1',$news1);

		$this -> assign('news2',$news2);

		$this -> assign('news3',$news3);

		$this -> display();
	}
}