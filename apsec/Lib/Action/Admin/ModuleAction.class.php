<?php
/**
 * Created by PhpStorm.
 * User: hardy
 * Date: 2017/5/23
 * Time: 10:16
 */


class ModuleAction extends Action {
    public function __construct()
    {
        parent::__construct();
        if(!session(C('USER_AUTH_KEY')))
            redirect(__APP__."/?g=Admin&m=Auth&a=loginPage");
    }
    public function index(){
        redirect(__APP__."/?g=Admin&m=Module&a=modulePage");
    }
    public function modulePage(){
        $page = $this->_param('page');
        $pageRange = array('2','3','4','5','6','7');
        if(!in_array($page, $pageRange)){
            $page = '2';
        }
        $pageNameMap = [
            '2' => '信息共享',
            '3' => '联系我们',
            '4' => '关于我们',
            '5' => 'APEC低碳',
            '6' => 'APEC中国行',
            '7' => 'SPESS项目'
        ];
        $pageName = $pageNameMap[$page];
        $modules = M('columns');
        $numPerPage = 10 ;
        $count = $modules->where(['parent' => $page])->order('sequence desc, addtime desc')->count();

        import('ORG.Paging');
        $paging = new Paging($count, $numPerPage, __APP__."/?g=Admin&m=Module&a=modulePage");
        $show = $paging->show();
        $list = $modules
            ->where(['parent' => $page])
            ->order('sequence desc, addtime desc')
            ->limit($paging->firstRow, $paging->numPerPage)
            ->select();
        $this->assign('pageName', $pageName);
        $this->assign('show', $show);
        $this->assign('list', $list);
        $this->display();
    }

    public function moduleEditPage(){
        $mid = $this->_param('mid');
        $modules = M('columns');
        $module = $modules->where(['id' => $mid])->find();
        if(!$module){
            redirect(__APP__."/?g=Admin&m=Module&a=modulePage");
            exit;
        }
        $this->assign("module", $module);
        $this->display();
    }

    public function moduleEdit(){
        $mid = $this->_param('mid');
        $parent = $this->_param('parent');
        $content = $this->_param('content');
        $modules = M('columns');
        $module = $modules->where(['id', $mid])->find();
        if(!$module){
            $this->error('原信息找不到', __APP__."/?g=Admin&m=Module&a=modulePage");
            exit;
        }
        $data['parent'] = $parent;
        $data['content'] = $content;
        $flag = $modules->where(['id' => $module['id']])->save($data);

        if($flag){
            $this->success("保存成功", __APP__."/?g=Admin&m=Module&a=modulePage&page=$parent");
        }
        else{
            $this->error("未知错误", __APP__."/?g=Admin&m=Module&a=modulePage&page=$parent");
        }
    }

    public function moduleAdd(){
        $modules = M('columns');
        $parents = M('colname');
        $pid = intval($_POST['parent']);
        $title = $_POST['title'];
        $content = $_POST['content'];
        $parent = $parents->where(['id' => $pid])->find();
        if($parent){
            $pname = $parent['name'];
            $cid = intval($parents->max('id'));
            if($cid){
                $cid++;
                $parents->add(['id' => $cid, 'name' => $title]);
                $map = [
                    'parent'    =>  $pid,
                    'cid'       =>  $cid,
                    'cname'     =>  $pname,
                    'name'      =>  $title,
                    'content'   =>  $content,
                    'sequence'  =>  0,
                    'addtime'   =>  time()
                ];
                $modules->add($map);
                echo "<script>alert(\"添加成功\");top.location='".__APP__."/?g=Admin&m=Module&a=modulePage';</script>";
            }
        }
        echo "<script>alert(\"添加失败\");top.location='".__APP__."/?g=Admin&m=Module&a=moduleAddPage';</script>";
        exit;
    }
    public function moduleAddPage(){
        $this->display();
    }
}