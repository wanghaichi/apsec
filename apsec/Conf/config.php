<?php
return array(
	//'配置项'=>'配置值'

	'APP_GROUP_LIST' => 'Home,Manager', //项目分组设定，注意','后面全完不要有空格！！

	'DEFAULT_GROUP'  => 'Home', //默认分组

	'URL_PATHINFO_DEPR' => '-',

	'VAR_URL_PARAMS'	=> '_URL_',

	'URL_MODEL' => 1,		

	'SHOW_PAGE_TRACE'=>0,

	'URL_HTML_SUFFIX'=>'html',

	'HTML_CACHE_ON'=>false,
	'HTML_READ_TYPE'=>1,
	'HTML_CACHE_RULES'=> array(

	'Column:'=>array('Column{:action}_{id}','600'),
   //'*'=>array('{$_SERVER.REQUEST_URI|md5}'),
    //…更多操作的静态规则
								),

    'DB_TYPE'   => 'mysql', // 数据库类型
    'DB_HOST'   => 'localhost', // 服务器地址
    //'DB_NAME'   => 'apecsec', // 数据库名
    'DB_NAME'   => 'apsec',
    'DB_USER'   => 'root', // 用户名
    'DB_PWD'    => '', // 密码
    'DB_PORT'   => 3306, // 端口
    'DB_PREFIX' => 'apec_', // 数据库表前缀
);
?>