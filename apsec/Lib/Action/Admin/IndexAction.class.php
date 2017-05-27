<?php
/**
 * Created by PhpStorm.
 * User: hardy
 * Date: 2017/5/23
 * Time: 10:16
 */
class IndexAction extends Action {
    public function __construct()
    {
        parent::__construct();
        if(!session(C('USER_AUTH_KEY')))
            redirect(__APP__."/?g=Admin&m=Auth&a=loginPage");
    }

    public function index(){
        if(session('USER_AUTH_KEY')){
            redirect(__APP__."/?g=Admin&m=Module&a=modulePage");
        }
        else{
            redirect(__APP__."/?g=Admin&m=Auth&a=loginPage");
        }
    }
    public function indexPage(){
        $this->display();
    }
}