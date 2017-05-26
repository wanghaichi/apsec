<?php
/**
 * Created by PhpStorm.
 * User: hardy
 * Date: 2017/5/23
 * Time: 10:16
 */
class UserAction extends Action {
    public function index(){
        $result = D('Admin')->select();
        $this->assign('result', $result);
        $this->display();
    }
    public function addPage(){
        $this->display();
    }
    public function updatePage(){
        $map['mid'] = $this->_param('id');
        $result = D('Admin')->where($map)->find();
        $this->assign('result', $result);
        $this->display();
    }
    public function update(){
        $data = $this->_param();
        if($data['password'] == $data['re_password'] && D('Admin')->save($data) > 0)
            echo "<script>alert(\"更新成功\");top.location='".__APP__."/?g=Admin&m=User&a=index';</script>";
        else
            echo "<script>alert(\"更新失败\");top.location='".__APP__."/?g=Admin&m=User&a=index';</script>";
    }
    public function add(){
        $data = $this->_param();
        if(($data['password'] == $data['re_password'])&&D('Admin')->add($data)){
            echo "<script>alert(\"添加成功\");top.location='".__APP__."/?g=Admin&m=User&a=index';</script>";
        }else{
            echo "<script>alert(\"添加失败\");history.go(-1);</script>";
        }
    }

    public function delete(){
        $map['mid'] = $this->_param('id');
        D('Admin')->where($map)->delete();
        echo "<script>alert(\"删除成功\");top.location='".__APP__."/?g=Admin&m=User&a=index';</script>";
    }
}