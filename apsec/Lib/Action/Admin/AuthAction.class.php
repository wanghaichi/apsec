<?php
/**
 * Created by PhpStorm.
 * User: hardy
 * Date: 2017/5/23
 * Time: 10:16
 */
class AuthAction extends Action {
    public function loginPage(){

        if(session(C('USER_AUTH_KEY'))){
            redirect(__APP__."/?g=Admin&m=Module&a=modulePage");
        }
        $this->display();
    }
    public function checkLogin(){


        if(session(C('USER_AUTH_KEY'))){
            redirect(__APP__."/?g=Admin&m=Module&a=modulePage");
        }
        else if($_POST){
            $username = $_POST['name'];
            $pwd = $_POST['pwd'];
            $users = M('admin');
            $user = $users->where(['username' => $username])->find();
            if($user){
                if($user['password'] === $pwd){
                    session(C('USER_AUTH_KEY'), $username);
                    redirect(__APP__."/?g=Admin&m=Module&a=modulePage");
                }
                exit;
            }
        }
        redirect(__APP__."/?g=Admin&m=Auth&a=loginPage");
        exit;
    }
}