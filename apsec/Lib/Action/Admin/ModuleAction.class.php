<?php
/**
 * Created by PhpStorm.
 * User: hardy
 * Date: 2017/5/23
 * Time: 10:16
 */

class ModuleAction extends Action {
    public function index(){
        $this->display('modulePage');
    }
    public function modulePage($page){

        $pageRange = array('2','3','4','5','6','7');
        if(!in_array($page, $pageRange)){
            $page = '2';
        }
        $modules = M('');
        $this->display();
    }
}