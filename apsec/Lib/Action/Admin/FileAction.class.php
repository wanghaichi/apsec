<?php
/**
 * Created by PhpStorm.
 * User: hardy
 * Date: 2017/5/23
 * Time: 10:16
 */

class FileAction extends Action {
    public function __construct()
    {
        parent::__construct();
        if(!session(C('USER_AUTH_KEY')))
            redirect(__APP__."/?g=Admin&m=Auth&a=loginPage");
    }

    public function upload(){
        import('@.ORG.UploadFile');
        //导入上传类
        $upload = new UploadFile();
        //设置上传文件大小
        $upload->maxSize            = 3292200;
        //设置上传文件类型
        $upload->allowExts          = explode(',', 'jpg,gif,png,jpeg');
        //设置附件上传目录
        $upload->savePath           = '../Public/upload/';
        //设置上传文件规则
        $upload->saveRule           = 'uniqid';

        $res = array();
        //$upload->thumbRemoveOrigin  = true;
        if (!$upload->upload()) {
            //捕获上传异常
            $res['message'] = $upload->getErrorMsg();

        } else {
            //取得成功上传的文件信息
            $uploadList = $upload->getUploadFileInfo();
            import('@.ORG.Image');
            //给m_缩略图添加水印, Image::water('原文件名','水印图片地址')
            $filename = "/Public/upload/".$uploadList[0]['savename'];
            $res = [
                'success' => true,
                'file' => $filename
            ];
        }
        echo json_encode($res);
    }
}