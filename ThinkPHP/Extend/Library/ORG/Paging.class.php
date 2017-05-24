<?php

/**
 * Created by PhpStorm.
 * User: hardy
 * Date: 2017/5/24
 * Time: 9:25
 */
class Paging
{
    // 显示每页的页数
    public $numPerPage = 10;

    // 当前页面的URL，不包括分页参数
    public $url = '';

    // 当前页第一条数据所在位置
    public $firstRow = 0;

    public $totalNum;

    protected $parameter = 'p';

    protected $prev = "<<";

    protected $next = ">>";

    protected $itemStyle = "<li class=\"__STYLE__\"><a href=\"__HREF__\">__ITEM__</a></li>";

//    protected $classStyle = "<ul class=\"pagination pagination-sm no-margin pull-right\">__ITEM__</ul>";

    public function __construct($count, $numPerPage, $url){
        $this->totalNum = $count;
        $this->url = $url;
        $this->numPerPage = $numPerPage;


    }

    public function show(){
        // 获取总页数
        $numOfPage = ceil($this->totalNum / $this->numPerPage);

        $p = 1;

        // 获取分页参数
        if(isset($_GET[$this->parameter])){
            $p = intval($_GET[$this->parameter]);
            if($p <= 0)
                $p = 1;
            $this->firstRow = ($p - 1) * $this->numPerPage;
        }
        $disabled = $p == 1 ? "disabled" : "";
        $href = $p == 1 ? "" : $this->url."&p=".($p-1);
        $preStyle = $this->renderItem($disabled, $href, $this->prev, $this->itemStyle);

        $disabled = $p == $numOfPage ? "disabled" : "";
        $href = $p == $numOfPage ? "" : $this->url."&p=".($p+1);
        $nextStyle = $this->renderItem($disabled, $href, $this->next, $this->itemStyle);

        $res = $preStyle . "__ITEMS__" . $nextStyle;
        $items = "";
        if($numOfPage <= 5){
            for($i = 1; $i <= $numOfPage; $i ++){
                $active = "";
                if($i == $p){
                    $active = "active";
                }
                $href = $this->url."&".$this->parameter."=".$i;
                $items .= $this->renderItem($active, $href, $i, $this->itemStyle);
            }
        }
        else{
            // 渲染当前页左右共五个item
            for ($i = $p - 2; $i <= $p + 2; $i ++){
                if($i < 1 || $i > $numOfPage)
                    continue;
                $active = "";
                $href = $this->url."&".$this->parameter."=".$i;
                if($p == $i)
                    $active = "active";
                $items .= $this->renderItem($active, $href, $p, $this->itemStyle);
            }
            // 渲染前后的...部分

            if($p >= 5){
                $items = $this->renderItem("disabled", "", "...", $this->itemStyle);
            }
            if($p <= $numOfPage - 4){
                $items = $this->renderItem("disabled", "", "...", $this->itemStyle);
            }

            // 渲染首尾
            if($p >= 4){
                $href = $this->url."&".$this->parameter."=1";
                $items = $this->renderItem("", $href, "1", $this->itemStyle);
            }

            if($p <= $numOfPage - 3){
                $href = $this->url."&".$this->parameter."=".$numOfPage;
                $items = $this->renderItem("", $href, $numOfPage, $this->itemStyle);
            }
        }

        return str_replace('__ITEMS__', $items, $res);

    }

    protected function renderItem($style, $href, $item, $str){
        return str_replace(['__STYLE__', '__HREF__', '__ITEM__'], [$style, $href, $item], $str);
    }
}