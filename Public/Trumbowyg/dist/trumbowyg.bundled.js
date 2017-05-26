jQuery.trumbowyg={langs:{en:{viewHTML:"源代码",formatting:"格式",p:"段落",blockquote:"引用",code:"代码",header:"标题",bold:"加粗",italic:"斜体",strikethrough:"删除线",underline:"下划线",strong:"加粗",em:"斜体",del:"删除线",unorderedList:"无序列表",orderedList:"有序列表",insertImage:"插入图片",insertVideo:"插入视频",link:"超链接",createLink:"插入链接",unlink:"取消链接",justifyLeft:"居左对齐",justifyCenter:"居中对齐",justifyRight:"居右对齐",justifyFull:"两端对齐",horizontalRule:"插入分隔线",fullscreen:"全屏",close:"关闭",submit:"确定",reset:"取消",required:"必需的",description:"描述",title:"标题",text:"文字"}},plugins:{},svgPath:null},function(e,t,n,a){"use strict"
a.fn.trumbowyg=function(e,t){var n="trumbowyg"
if(e===Object(e)||!e)return this.each(function(){a(this).data(n)||a(this).data(n,new r(this,e))})
if(1===this.length)try{var o=a(this).data(n)
switch(e){case"execCmd":return o.execCmd(t.cmd,t.param,t.forceCss)
case"openModal":return o.openModal(t.title,t.content)
case"closeModal":return o.closeModal()
case"openModalInsert":return o.openModalInsert(t.title,t.fields,t.callback)
case"saveRange":return o.saveRange()
case"getRange":return o.range
case"getRangeText":return o.getRangeText()
case"restoreRange":return o.restoreRange()
case"enable":return o.toggleDisable(!1)
case"disable":return o.toggleDisable(!0)
case"destroy":return o.destroy()
case"empty":return o.empty()
case"html":return o.html(t)}}catch(i){}return!1}
var r=function(e,r){var o=this,i="trumbowyg-icons"
o.doc=e.ownerDocument||n,o.$ta=a(e),o.$c=a(e),r=r||{},null!=r.lang||null!=a.trumbowyg.langs[r.lang]?o.lang=a.extend(!0,{},a.trumbowyg.langs.en,a.trumbowyg.langs[r.lang]):o.lang=a.trumbowyg.langs.en
var s=null!=a.trumbowyg.svgPath?a.trumbowyg.svgPath:r.svgPath
if(o.hasSvg=s!==!1,o.svgPath=o.doc.querySelector("base")?t.location.href.split("#")[0]:"",0===a("#"+i,o.doc).length&&s!==!1){if(null==s)try{throw Error()}catch(l){var d=l.stack.split("\n")
for(var c in d)if(d[c].match(/http[s]?:\/\//)){s=d[+c].match(/((http[s]?:\/\/.+\/)([^\/]+\.js))(\?.*)?:/)[1].split("/"),s.pop(),s=s.join("/")+"/ui/icons.svg"
break}}var u=o.doc.createElement("div")
u.id=i,o.doc.body.insertBefore(u,o.doc.body.childNodes[0]),a.ajax({async:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"xml",url:s,data:null,beforeSend:null,complete:null,success:function(e){u.innerHTML=(new XMLSerializer).serializeToString(e.documentElement)}})}var g=o.lang.header,f=function(){return(t.chrome||t.Intl&&Intl.v8BreakIterator)&&"CSS"in t}
o.btnsDef={viewHTML:{fn:"toggle"},undo:{isSupported:f,key:"Z"},redo:{isSupported:f,key:"Y"},p:{fn:"formatBlock"},blockquote:{fn:"formatBlock"},h1:{fn:"formatBlock",title:g+" 1"},h2:{fn:"formatBlock",title:g+" 2"},h3:{fn:"formatBlock",title:g+" 3"},h4:{fn:"formatBlock",title:g+" 4"},subscript:{tag:"sub"},superscript:{tag:"sup"},bold:{key:"B",tag:"b"},italic:{key:"I",tag:"i"},underline:{tag:"u"},strikethrough:{tag:"strike"},strong:{fn:"bold",key:"B"},em:{fn:"italic",key:"I"},del:{fn:"strikethrough"},createLink:{key:"K",tag:"a"},unlink:{},insertImage:{},justifyLeft:{tag:"left",forceCss:!0},justifyCenter:{tag:"center",forceCss:!0},justifyRight:{tag:"right",forceCss:!0},justifyFull:{tag:"justify",forceCss:!0},unorderedList:{fn:"insertUnorderedList",tag:"ul"},orderedList:{fn:"insertOrderedList",tag:"ol"},horizontalRule:{fn:"insertHorizontalRule"},removeformat:{},fullscreen:{"class":"trumbowyg-not-disable"},close:{fn:"destroy","class":"trumbowyg-not-disable"},formatting:{dropdown:["p","blockquote","h1","h2","h3","h4"],ico:"p"},link:{dropdown:["createLink","unlink"]}},o.o=a.extend(!0,{},{lang:"en",fixedBtnPane:!1,fixedFullWidth:!1,autogrow:!1,prefix:"trumbowyg-",semantic:!0,resetCss:!1,removeformatPasted:!1,tagsToRemove:[],btnsGrps:{design:["bold","italic","underline","strikethrough"],semantic:["strong","em","del"],justify:["justifyLeft","justifyCenter","justifyRight","justifyFull"],lists:["unorderedList","orderedList"]},btns:[["viewHTML"],["undo","redo"],["formatting"],"btnGrp-semantic",["superscript","subscript"],["link"],["insertImage"],"btnGrp-justify","btnGrp-lists",["horizontalRule"],["removeformat"],["fullscreen"]],btnsDef:{},inlineElementsSelector:"a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",pasteHandlers:[],imgDblClickHandler:function(){var e=a(this),t=e.attr("src"),n="(Base64)"
return 0===t.indexOf("data:image")&&(t=n),o.openModalInsert(o.lang.insertImage,{url:{label:"URL",value:t,required:!0},alt:{label:o.lang.description,value:e.attr("alt")}},function(t){return t.src!==n&&e.attr({src:t.src}),e.attr({alt:t.alt}),!0}),!1},plugins:{}},r),o.disabled=o.o.disabled||"TEXTAREA"===e.nodeName&&e.disabled,r.btns?o.o.btns=r.btns:o.o.semantic||(o.o.btns[4]="btnGrp-design"),a.each(o.o.btnsDef,function(e,t){o.addBtnDef(e,t)}),o.eventNamespace="trumbowyg-event",o.keys=[],o.tagToButton={},o.tagHandlers=[],o.pasteHandlers=[].concat(o.o.pasteHandlers),o.init()}
r.prototype={init:function(){var e=this
e.height=e.$ta.height(),e.initPlugins()
try{e.doc.execCommand("enableObjectResizing",!1,!1)}catch(t){}e.doc.execCommand("defaultParagraphSeparator",!1,"p"),e.buildEditor(),e.buildBtnPane(),e.fixedBtnPaneEvents(),e.buildOverlay(),setTimeout(function(){e.disabled&&e.toggleDisable(!0),e.$c.trigger("tbwinit")})},addBtnDef:function(e,t){this.btnsDef[e]=t},buildEditor:function(){var e=this,n=e.o.prefix,r=""
e.$box=a("<div/>",{"class":n+"box "+n+"editor-visible "+n+e.o.lang+" trumbowyg"}),e.isTextarea=e.$ta.is("textarea"),e.isTextarea?(r=e.$ta.val(),e.$ed=a("<div/>"),e.$box.insertAfter(e.$ta).append(e.$ed,e.$ta)):(e.$ed=e.$ta,r=e.$ed.html(),e.$ta=a("<textarea/>",{name:e.$ta.attr("id"),height:e.height}).val(r),e.$box.insertAfter(e.$ed).append(e.$ta,e.$ed),e.syncCode()),e.$ta.addClass(n+"textarea").attr("tabindex",-1),e.$ed.addClass(n+"editor").attr({contenteditable:!0,dir:e.lang._dir||"ltr"}).html(r),e.o.tabindex&&e.$ed.attr("tabindex",e.o.tabindex),e.$c.is("[placeholder]")&&e.$ed.attr("placeholder",e.$c.attr("placeholder")),e.o.resetCss&&e.$ed.addClass(n+"reset-css"),e.o.autogrow||e.$ta.add(e.$ed).css({height:e.height}),e.semanticCode()
var o,i=!1,s=!1
e.$ed.on("dblclick","img",e.o.imgDblClickHandler).on("keydown",function(t){if(s=229===t.which,t.ctrlKey){i=!0
var n=e.keys[String.fromCharCode(t.which).toUpperCase()]
try{return e.execCmd(n.fn,n.param),!1}catch(a){}}}).on("keyup input",function(t){t.which>=37&&t.which<=40||(!t.ctrlKey||89!==t.which&&90!==t.which?i||17===t.which||s||(e.semanticCode(!1,13===t.which),e.$c.trigger("tbwchange")):e.$c.trigger("tbwchange"),setTimeout(function(){i=!1},200))}).on("mouseup keydown keyup",function(){clearTimeout(o),o=setTimeout(function(){e.updateButtonPaneStatus()},50)}).on("focus blur",function(t){e.$c.trigger("tbw"+t.type),"blur"===t.type&&a("."+n+"active-button",e.$btnPane).removeClass(n+"active-button "+n+"active")}).on("cut",function(){setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwchange")},0)}).on("paste",function(n){if(e.o.removeformatPasted){n.preventDefault()
try{var r=t.clipboardData.getData("Text")
try{e.doc.selection.createRange().pasteHTML(r)}catch(o){e.doc.getSelection().getRangeAt(0).insertNode(e.doc.createTextNode(r))}}catch(i){e.execCmd("insertText",(n.originalEvent||n).clipboardData.getData("text/plain"))}}a.each(e.pasteHandlers,function(e,t){t(n)}),setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwpaste",n)},0)}),e.$ta.on("keyup paste",function(){e.$c.trigger("tbwchange")}),e.$box.on("keydown",function(t){return 27===t.which&&1===a("."+n+"modal-box",e.$box).length?(e.closeModal(),!1):void 0})},buildBtnPane:function(){var e=this,t=e.o.prefix,n=e.$btnPane=a("<div/>",{"class":t+"button-pane"})
a.each(e.o.btns,function(r,o){try{var i=o.split("btnGrp-")
null!=i[1]&&(o=e.o.btnsGrps[i[1]])}catch(s){}a.isArray(o)||(o=[o])
var l=a("<div/>",{"class":t+"button-group "+(o.indexOf("fullscreen")>=0?t+"right":"")})
a.each(o,function(t,n){try{var a
e.isSupportedBtn(n)&&(a=e.buildBtn(n)),l.append(a)}catch(r){}}),n.append(l)}),e.$box.prepend(n)},buildBtn:function(e){var t=this,n=t.o.prefix,r=t.btnsDef[e],o=r.dropdown,i=null!=r.hasIcon?r.hasIcon:!0,s=t.lang[e]||e,l=a("<button/>",{type:"button","class":n+e+"-button "+(r["class"]||"")+(i?"":" "+n+"textual-button"),html:t.hasSvg&&i?'<svg><use xlink:href="'+t.svgPath+"#"+n+(r.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>':r.text||r.title||t.lang[e]||e,title:(r.title||r.text||s)+(r.key?" (Ctrl + "+r.key+")":""),tabindex:-1,mousedown:function(){return(!o||a("."+e+"-"+n+"dropdown",t.$box).is(":hidden"))&&a("body",t.doc).trigger("mousedown"),!t.$btnPane.hasClass(n+"disable")||a(this).hasClass(n+"active")||a(this).hasClass(n+"not-disable")?(t.execCmd((o?"dropdown":!1)||r.fn||e,r.param||e,r.forceCss||!1),!1):!1}})
if(o){l.addClass(n+"open-dropdown")
var d=n+"dropdown",c=a("<div/>",{"class":d+"-"+e+" "+d+" "+n+"fixed-top","data-dropdown":e})
a.each(o,function(e,n){t.btnsDef[n]&&t.isSupportedBtn(n)&&c.append(t.buildSubBtn(n))}),t.$box.append(c.hide())}else r.key&&(t.keys[r.key]={fn:r.fn||e,param:r.param||e})
return o||(t.tagToButton[(r.tag||e).toLowerCase()]=e),l},buildSubBtn:function(e){var t=this,n=t.o.prefix,r=t.btnsDef[e],o=null!=r.hasIcon?r.hasIcon:!0
return r.key&&(t.keys[r.key]={fn:r.fn||e,param:r.param||e}),t.tagToButton[(r.tag||e).toLowerCase()]=e,a("<button/>",{type:"button","class":n+e+"-dropdown-button"+(r.ico?" "+n+r.ico+"-button":""),html:t.hasSvg&&o?'<svg><use xlink:href="'+t.svgPath+"#"+n+(r.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>'+(r.text||r.title||t.lang[e]||e):r.text||r.title||t.lang[e]||e,title:r.key?" (Ctrl + "+r.key+")":null,style:r.style||null,mousedown:function(){return a("body",t.doc).trigger("mousedown"),t.execCmd(r.fn||e,r.param||e,r.forceCss||!1),!1}})},isSupportedBtn:function(e){try{return this.btnsDef[e].isSupported()}catch(t){}return!0},buildOverlay:function(){var e=this
return e.$overlay=a("<div/>",{"class":e.o.prefix+"overlay"}).css({top:e.$btnPane.outerHeight(),height:e.$ed.outerHeight()+1+"px"}).appendTo(e.$box),e.$overlay},showOverlay:function(){var e=this
a(t).trigger("scroll"),e.$overlay.fadeIn(200),e.$box.addClass(e.o.prefix+"box-blur")},hideOverlay:function(){var e=this
e.$overlay.fadeOut(50),e.$box.removeClass(e.o.prefix+"box-blur")},fixedBtnPaneEvents:function(){var e=this,n=e.o.fixedFullWidth,r=e.$box
e.o.fixedBtnPane&&(e.isFixed=!1,a(t).on("scroll."+e.eventNamespace+" resize."+e.eventNamespace,function(){if(r){e.syncCode()
var o=a(t).scrollTop(),i=r.offset().top+1,s=e.$btnPane,l=s.outerHeight()-2
o-i>0&&o-i-e.height<0?(e.isFixed||(e.isFixed=!0,s.css({position:"fixed",top:0,left:n?"0":"auto",zIndex:7}),a([e.$ta,e.$ed]).css({marginTop:s.height()})),s.css({width:n?"100%":r.width()-1+"px"}),a("."+e.o.prefix+"fixed-top",r).css({position:n?"fixed":"absolute",top:n?l:l+(o-i)+"px",zIndex:15})):e.isFixed&&(e.isFixed=!1,s.removeAttr("style"),a([e.$ta,e.$ed]).css({marginTop:0}),a("."+e.o.prefix+"fixed-top",r).css({position:"absolute",top:l}))}}))},toggleDisable:function(e){var t=this,n=t.o.prefix
t.disabled=e,e?t.$ta.attr("disabled",!0):t.$ta.removeAttr("disabled"),t.$box.toggleClass(n+"disabled",e),t.$ed.attr("contenteditable",!e)},destroy:function(){var e=this,n=e.o.prefix,r=e.height
e.isTextarea?e.$box.after(e.$ta.css({height:r}).val(e.html()).removeClass(n+"textarea").show()):e.$box.after(e.$ed.css({height:r}).removeClass(n+"editor").removeAttr("contenteditable").html(e.html()).show()),e.$ed.off("dblclick","img"),e.destroyPlugins(),e.$box.remove(),e.$c.removeData("trumbowyg"),a("body").removeClass(n+"body-fullscreen"),e.$c.trigger("tbwclose"),a(t).off("scroll."+e.eventNamespace+" resize."+e.eventNamespace)},empty:function(){this.$ta.val(""),this.syncCode(!0)},toggle:function(){var e=this,t=e.o.prefix
e.semanticCode(!1,!0),setTimeout(function(){e.doc.activeElement.blur(),e.$box.toggleClass(t+"editor-hidden "+t+"editor-visible"),e.$btnPane.toggleClass(t+"disable"),a("."+t+"viewHTML-button",e.$btnPane).toggleClass(t+"active"),e.$box.hasClass(t+"editor-visible")?e.$ta.attr("tabindex",-1):e.$ta.removeAttr("tabindex")},0)},dropdown:function(e){var n=this,r=n.doc,o=n.o.prefix,i=a("[data-dropdown="+e+"]",n.$box),s=a("."+o+e+"-button",n.$btnPane),l=i.is(":hidden")
if(a("body",r).trigger("mousedown"),l){var d=s.offset().left
s.addClass(o+"active"),i.css({position:"absolute",top:s.offset().top-n.$btnPane.offset().top+s.outerHeight(),left:n.o.fixedFullWidth&&n.isFixed?d+"px":d-n.$btnPane.offset().left+"px"}).show(),a(t).trigger("scroll"),a("body",r).on("mousedown."+n.eventNamespace,function(){a("."+o+"dropdown",r).hide(),a("."+o+"active",r).removeClass(o+"active"),a("body",r).off("mousedown."+n.eventNamespace)})}},html:function(e){var t=this
return null!=e?(t.$ta.val(e),t.syncCode(!0),t):t.$ta.val()},syncTextarea:function(){var e=this
e.$ta.val(e.$ed.text().trim().length>0||e.$ed.find("hr,img,embed,iframe,input").length>0?e.$ed.html():"")},syncCode:function(e){var t=this
!e&&t.$ed.is(":visible")?t.syncTextarea():t.$ed.html(t.$ta.val()),t.o.autogrow&&(t.height=t.$ed.height(),t.height!==t.$ta.css("height")&&(t.$ta.css({height:t.height}),t.$c.trigger("tbwresize")))},semanticCode:function(e,t){var n=this
if(n.saveRange(),n.syncCode(e),a(n.o.tagsToRemove.join(","),n.$ed).remove(),n.o.semantic){if(n.semanticTag("b","strong"),n.semanticTag("i","em"),t){var r=n.o.inlineElementsSelector,o=":not("+r+")"
n.$ed.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim().length>0}).wrap("<span data-tbw/>")
var i=function(e){if(0!==e.length){var t=e.nextUntil(o).addBack().wrapAll("<p/>").parent(),n=t.nextAll(r).first()
t.next("br").remove(),i(n)}}
i(n.$ed.children(r).first()),n.semanticTag("div","p",!0),n.$ed.find("p").filter(function(){return n.range&&this===n.range.startContainer?!1:0===a(this).text().trim().length&&0===a(this).children().not("br,span").length}).contents().unwrap(),a("[data-tbw]",n.$ed).contents().unwrap(),n.$ed.find("p:empty").remove()}n.restoreRange(),n.syncTextarea()}},semanticTag:function(e,t,n){a(e,this.$ed).each(function(){var e=a(this)
e.wrap("<"+t+"/>"),n&&a.each(e.prop("attributes"),function(){e.parent().attr(this.name,this.value)}),e.contents().unwrap()})},createLink:function(){for(var e,t,n,r=this,o=r.doc.getSelection(),i=o.focusNode;["A","DIV"].indexOf(i.nodeName)<0;)i=i.parentNode
if(i&&"A"===i.nodeName){var s=a(i)
e=s.attr("href"),t=s.attr("title"),n=s.attr("target")
var l=r.doc.createRange()
l.selectNode(i),o.addRange(l)}r.saveRange(),r.openModalInsert(r.lang.createLink,{url:{label:"URL",required:!0,value:e},title:{label:r.lang.title,value:t},text:{label:r.lang.text,value:r.getRangeText()},target:{label:r.lang.target,value:n}},function(e){var t=a('<a href="'+e.url+'">'+e.text+"</a>")
return e.title.length>0&&t.attr("title",e.title),e.target.length>0&&t.attr("target",e.target),r.range.deleteContents(),r.range.insertNode(t[0]),!0})},unlink:function(){var e=this,t=e.doc.getSelection(),n=t.focusNode
if(t.isCollapsed){for(;["A","DIV"].indexOf(n.nodeName)<0;)n=n.parentNode
if(n&&"A"===n.nodeName){var a=e.doc.createRange()
a.selectNode(n),t.addRange(a)}}e.execCmd("unlink",void 0,void 0,!0)},insertImage:function(){var e=this
e.saveRange(),e.openModalInsert(e.lang.insertImage,{url:{label:"URL",required:!0},alt:{label:e.lang.description,value:e.getRangeText()}},function(t){return e.execCmd("insertImage",t.url),a('img[src="'+t.url+'"]:not([alt])',e.$box).attr("alt",t.alt),!0})},fullscreen:function(){var e,n=this,r=n.o.prefix,o=r+"fullscreen"
n.$box.toggleClass(o),e=n.$box.hasClass(o),a("body").toggleClass(r+"body-fullscreen",e),a(t).trigger("scroll"),n.$c.trigger("tbw"+(e?"open":"close")+"fullscreen")},execCmd:function(t,n,a,r){var o=this
r=!!r||"","dropdown"!==t&&o.$ed.focus()
try{o.doc.execCommand("styleWithCSS",!1,a||!1)}catch(i){}try{o[t+r](n)}catch(i){try{t(n)}catch(s){"insertHorizontalRule"===t?n=void 0:"formatBlock"!==t||-1===e.userAgent.indexOf("MSIE")&&-1===e.appVersion.indexOf("Trident/")||(n="<"+n+">"),o.doc.execCommand(t,!1,n),o.syncCode(),o.semanticCode(!1,!0)}"dropdown"!==t&&(o.updateButtonPaneStatus(),o.$c.trigger("tbwchange"))}},openModal:function(e,n){var r=this,o=r.o.prefix
if(a("."+o+"modal-box",r.$box).length>0)return!1
r.saveRange(),r.showOverlay(),r.$btnPane.addClass(o+"disable")
var i=a("<div/>",{"class":o+"modal "+o+"fixed-top"}).css({top:r.$btnPane.height()}).appendTo(r.$box)
r.$overlay.one("click",function(){return i.trigger("tbwcancel"),!1})
var s=a("<form/>",{action:"",html:n}).on("submit",function(){return i.trigger("tbwconfirm"),!1}).on("reset",function(){return i.trigger("tbwcancel"),!1}),l=a("<div/>",{"class":o+"modal-box",html:s}).css({top:"-"+r.$btnPane.outerHeight()+"px",opacity:0}).appendTo(i).animate({top:0,opacity:1},100)
return a("<span/>",{text:e,"class":o+"modal-title"}).prependTo(l),i.height(l.outerHeight()+10),a("input:first",l).focus(),r.buildModalBtn("submit",l),r.buildModalBtn("reset",l),a(t).trigger("scroll"),i},buildModalBtn:function(e,t){var n=this,r=n.o.prefix
return a("<button/>",{"class":r+"modal-button "+r+"modal-"+e,type:e,text:n.lang[e]||e}).appendTo(a("form",t))},closeModal:function(){var e=this,t=e.o.prefix
e.$btnPane.removeClass(t+"disable"),e.$overlay.off()
var n=a("."+t+"modal-box",e.$box)
n.animate({top:"-"+n.height()},100,function(){n.parent().remove(),e.hideOverlay()}),e.restoreRange()},openModalInsert:function(e,t,n){var r=this,o=r.o.prefix,i=r.lang,s="",l="tbwconfirm"
return a.each(t,function(e,t){var n=t.label,a=t.name||e,r=t.attributes||{},l=Object.keys(r).map(function(e){return e+'="'+r[e]+'"'}).join(" ")
s+='<label><input type="'+(t.type||"text")+'" name="'+a+'" value="'+(t.value||"").replace(/"/g,"&quot;")+'"'+l+'><span class="'+o+'input-infos"><span>'+(n?i[n]?i[n]:n:i[e]?i[e]:e)+"</span></span></label>"}),r.openModal(e,s).on(l,function(){var e=a("form",a(this)),o=!0,i={}
a.each(t,function(t,n){var s=a('input[name="'+t+'"]',e),l=s.attr("type")
"checkbox"===l.toLowerCase()?i[t]=s.is(":checked"):i[t]=a.trim(s.val()),n.required&&""===i[t]?(o=!1,r.addErrorOnModalField(s,r.lang.required)):n.pattern&&!n.pattern.test(i[t])&&(o=!1,r.addErrorOnModalField(s,n.patternError))}),o&&(r.restoreRange(),n(i,t)&&(r.syncCode(),r.$c.trigger("tbwchange"),r.closeModal(),a(this).off(l)))}).one("tbwcancel",function(){a(this).off(l),r.closeModal()})},addErrorOnModalField:function(e,t){var n=this.o.prefix,r=e.parent()
e.on("change keyup",function(){r.removeClass(n+"input-error")}),r.addClass(n+"input-error").find("input+span").append(a("<span/>",{"class":n+"msg-error",text:t}))},saveRange:function(){var e=this,t=e.doc.getSelection()
if(e.range=null,t.rangeCount){var n,a=e.range=t.getRangeAt(0),r=e.doc.createRange()
r.selectNodeContents(e.$ed[0]),r.setEnd(a.startContainer,a.startOffset),n=(r+"").length,e.metaRange={start:n,end:n+(a+"").length}}},restoreRange:function(){var e,t=this,n=t.metaRange,a=t.range,r=t.doc.getSelection()
if(a){if(n&&n.start!==n.end){var o,i=0,s=[t.$ed[0]],l=!1,d=!1
for(e=t.doc.createRange();!d&&(o=s.pop());)if(3===o.nodeType){var c=i+o.length
!l&&n.start>=i&&n.start<=c&&(e.setStart(o,n.start-i),l=!0),l&&n.end>=i&&n.end<=c&&(e.setEnd(o,n.end-i),d=!0),i=c}else for(var u=o.childNodes,g=u.length;g>0;)g-=1,s.push(u[g])}r.removeAllRanges(),r.addRange(e||a)}},getRangeText:function(){return this.range+""},updateButtonPaneStatus:function(){var e=this,t=e.o.prefix,n=e.getTagsRecursive(e.doc.getSelection().focusNode),r=t+"active-button "+t+"active"
a("."+t+"active-button",e.$btnPane).removeClass(r),a.each(n,function(n,o){var i=e.tagToButton[o.toLowerCase()],s=a("."+t+i+"-button",e.$btnPane)
if(s.length>0)s.addClass(r)
else try{s=a("."+t+"dropdown ."+t+i+"-dropdown-button",e.$box)
var l=s.parent().data("dropdown")
a("."+t+l+"-button",e.$box).addClass(r)}catch(d){}})},getTagsRecursive:function(e,t){var n=this
if(t=t||[],!e||!e.parentNode)return t
e=e.parentNode
var r=e.tagName
return"DIV"===r?t:("P"===r&&""!==e.style.textAlign&&t.push(e.style.textAlign),a.each(n.tagHandlers,function(a,r){t=t.concat(r(e,n))}),t.push(r),n.getTagsRecursive(e,t))},initPlugins:function(){var e=this
e.loadedPlugins=[],a.each(a.trumbowyg.plugins,function(t,n){(!n.shouldInit||n.shouldInit(e))&&(n.init(e),n.tagHandler&&e.tagHandlers.push(n.tagHandler),e.loadedPlugins.push(n))})},destroyPlugins:function(){a.each(this.loadedPlugins,function(e,t){t.destroy&&t.destroy()})}}}(navigator,window,document,jQuery),!function(e){"use strict"
function t(e){for(var t="",n=e.length-1;n>=0;n-=1)t+=e.charAt(n)
return t}function n(e){var t=e
return t=t.replace(/<[^> ]*/g,function(e){return e.toLowerCase()}),t=t.replace(/<[^>]*>/g,function(e){return e=e.replace(/ [^=]+=/g,function(e){return e.toLowerCase()})}),t=t.replace(/<[^>]*>/g,function(e){return e=e.replace(/( [^=]+=)([^"][^ >]*)/g,'$1"$2"')})}function a(e,a){var r,o,i,s="",l=""
for(r=0;a.charAt(r)===e.charAt(r);r+=1)s+=a.charAt(r)
for(var d=r;d>=0;d-=1){if("<"===e.charAt(d)){r=d,s=e.substring(0,r)
break}if(">"===e.charAt(d))break}for(a=t(a),e=t(e),o=0;a.charAt(o)===e.charAt(o);o+=1)l+=a.charAt(o)
for(var c=o;c>=0;c-=1){if(">"===e.charAt(c)){o=c,l=e.substring(0,o)
break}if("<"===e.charAt(c))break}if(l=t(l),r===a.length-o)return!1
for(a=t(a),i=a.substring(r,a.length-o),i=n(i),i=i.replace(/<b(\s+|>)/g,"<strong$1"),i=i.replace(/<\/b(\s+|>)/g,"</strong$1"),i=i.replace(/<i(\s+|>)/g,"<em$1"),i=i.replace(/<\/i(\s+|>)/g,"</em$1"),i=i.replace(/<!(?:--[\s\S]*?--\s*)?>\s*/g,""),i=i.replace(/&nbsp;/gi," "),i=i.replace(/ <\//gi,"</");-1!==i.indexOf("  ");){var u=i.split("  ")
i=u.join(" ")}return i=i.replace(/^\s*|\s*$/g,""),i=i.replace(/<[^>]*>/g,function(e){return e=e.replace(/ ([^=]+)="[^"]*"/g,function(e,t){return-1!==["alt","href","src","title"].indexOf(t)?e:""})}),i=i.replace(/<\?xml[^>]*>/g,""),i=i.replace(/<[^ >]+:[^>]*>/g,""),i=i.replace(/<\/[^ >]+:[^>]*>/g,""),i=i.replace(/<(div|span|style|meta|link){1}.*?>/gi,""),a=s+i+l}e.extend(!0,e.trumbowyg,{plugins:{cleanPaste:{init:function(e){e.pasteHandlers.push(function(){try{var t=e.$ed.html()
setTimeout(function(){var n=e.$ed.html()
n=a(t,n),e.$ed.html(n)},0)}catch(n){}})}}}})}(jQuery),!function(e){"use strict"
function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}function n(e){return-1===e.search("rgb")?e.replace("#",""):"rgba(0, 0, 0, 0)"===e?"transparent":(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/),t(e[1])+t(e[2])+t(e[3]))}function a(e,t){var a=[]
if(!e.style)return a
if(""!==e.style.backgroundColor){var r=n(e.style.backgroundColor)
t.o.plugins.colors.colorList.indexOf(r)>=0?a.push("backColor"+r):a.push("backColorFree")}var o
return""!==e.style.color?o=n(e.style.color):e.hasAttribute("color")&&(o=n(e.getAttribute("color"))),o&&(t.o.plugins.colors.colorList.indexOf(o)>=0?a.push("foreColor"+o):a.push("foreColorFree")),a}function r(t,n){var a=[]
e.each(n.o.plugins.colors.colorList,function(e,r){var o=t+r,i={fn:t,forceCss:!0,param:"#"+r,style:"background-color: #"+r+";"}
n.addBtnDef(o,i),a.push(o)})
var r=t+"Remove",o={fn:"removeFormat",param:t,style:"background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2NkQAAfEJMRmwBYhoGBYQtMBYoAADziAp0jtJTgAAAAAElFTkSuQmCC);"}
n.addBtnDef(r,o),a.push(r)
var i=t+"Free",s={fn:function(){n.openModalInsert(n.lang[t],{color:{label:t,value:"#FFFFFF"}},function(e){return n.execCmd(t,e.color),!0})},text:"#",style:"text-indent: 0;line-height: 20px;padding: 0 5px;"}
return n.addBtnDef(i,s),a.push(i),a}e.extend(!0,e.trumbowyg,{langs:{cs:{foreColor:"Barva textu",backColor:"Barva pozadí"},en:{foreColor:"文字颜色",backColor:"背景颜色"}}})
var o={colorList:["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646","ffff00","f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada","fff2ca","d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5","ffe694","bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","b7dde8","fac08f","f2c314","a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","92cddc","e36c09","c09100","7f7f7f","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","31859b","974806","7f6000"]}
e.extend(!0,e.trumbowyg,{plugins:{color:{init:function(t){t.o.plugins.colors=e.extend(!0,{},o,t.o.plugins.colors||{})
var n={dropdown:r("foreColor",t)},a={dropdown:r("backColor",t)}
t.addBtnDef("foreColor",n),t.addBtnDef("backColor",a)},tagHandler:a}}})}(jQuery),!function(e){"use strict"
e.extend(!0,e.trumbowyg,{plugins:{pasteImage:{init:function(e){e.pasteHandlers.push(function(t){try{for(var n,a=(t.originalEvent||t).clipboardData.items,r=a.length-1;r>=0;r+=1)a[r].type.match(/^image\//)&&(n=new FileReader,n.onloadend=function(t){e.execCmd("insertImage",t.target.result,void 0,!0)},n.readAsDataURL(a[r].getAsFile()))}catch(o){}})}}}})}(jQuery),!function(e){"use strict"
var t={rows:0,columns:0}
e.extend(!0,e.trumbowyg,{langs:{en:{table:"插入表格",tableAddRow:"插入行",tableAddColumn:"插入列",rows:"行数",columns:"列数",styler:"表类名",error:"错误"}},plugins:{table:{init:function(n){n.o.plugins.table=e.extend(!0,{},t,n.o.plugins.table||{})
var a={fn:function(){n.saveRange(),n.openModalInsert(n.lang.table,{rows:{type:"number",required:!0},columns:{type:"number",required:!0}},function(t){for(var a=e("<table></table>"),r=0;r<t.rows;r+=1)for(var o=e("<tr></tr>").appendTo(a),i=0;i<t.columns;i+=1)e("<td></td>").appendTo(o)
return n.range.deleteContents(),n.range.insertNode(a[0]),!0})}},r={fn:function(){n.saveRange()
var t=e("<tr></tr>")
return n.range.deleteContents(),n.range.insertNode(t[0]),!0}},o={fn:function(){n.saveRange()
var t=e("<td></td>")
return n.range.deleteContents(),n.range.insertNode(t[0]),!0}}
n.addBtnDef("table",a),n.addBtnDef("tableAddRow",r),n.addBtnDef("tableAddColumn",o)}}}})}(jQuery),!function(e){"use strict"
function t(e,n){var a=n.shift(),r=n
if(null!==e){if(0===r.length)return e[a]
if("object"==typeof e)return t(e[a],r)}return e}function n(){if(!e.trumbowyg&&!e.trumbowyg.addedXhrProgressEvent){var t=e.ajaxSettings.xhr
e.ajaxSetup({xhr:function(){var e=t(),n=this
return e&&"object"==typeof e.upload&&void 0!==n.progressUpload&&e.upload.addEventListener("progress",function(e){n.progressUpload(e)},!1),e}}),e.trumbowyg.addedXhrProgressEvent=!0}}var a={serverPath:"./src/plugins/upload/trumbowyg.upload.php",fileFieldName:"fileToUpload",data:[],headers:{},xhrFields:{},urlPropertyName:"file",statusPropertyName:"success",success:void 0,error:void 0}
n(),e.extend(!0,e.trumbowyg,{langs:{en:{upload:"上传",file:"文件",uploadError:"错误"},ru:{upload:"Загрузка",file:"Файл",uploadError:"Ошибка"}},plugins:{upload:{init:function(n){n.o.plugins.upload=e.extend(!0,{},a,n.o.plugins.upload||{})
var r={fn:function(){n.saveRange()
var a,r=n.o.prefix,o=n.openModalInsert(n.lang.upload,{file:{type:"file",required:!0,attributes:{accept:"image/*"}}},function(i){var s=new FormData
s.append(n.o.plugins.upload.fileFieldName,a),n.o.plugins.upload.data.map(function(e){s.append(e.name,e.value)}),0===e("."+r+"progress",o).length&&e("."+r+"modal-title",o).after(e("<div/>",{"class":r+"progress"}).append(e("<div/>",{"class":r+"progress-bar"}))),e.ajax({url:n.o.plugins.upload.serverPath,headers:n.o.plugins.upload.headers,xhrFields:n.o.plugins.upload.xhrFields,type:"POST",data:s,cache:!1,dataType:"json",processData:!1,contentType:!1,progressUpload:function(t){e("."+r+"progress-bar").stop().animate({width:Math.round(100*t.loaded/t.total)+"%"},200)},success:function(a){if(n.o.plugins.upload.success)n.o.plugins.upload.success(a,n,o,i)
else if(t(a,n.o.plugins.upload.statusPropertyName.split("."))){var r=t(a,n.o.plugins.upload.urlPropertyName.split("."))
n.execCmd("insertImage",r),e('img[src="'+r+'"]',n.$box),setTimeout(function(){n.closeModal()},250),n.$c.trigger("tbwuploadsuccess",[n,a,r])}else n.addErrorOnModalField(e("input[type=file]",o),n.lang[a.message]),n.$c.trigger("tbwuploaderror",[n,a])},error:n.o.plugins.upload.error||function(){n.addErrorOnModalField(e("input[type=file]",o),n.lang.uploadError),n.$c.trigger("tbwuploaderror",[n])}})})
e("input[type=file]").on("change",function(e){try{a=e.target.files[0]}catch(t){a=e.target.value}})}}
n.addBtnDef("upload",r)}}}})}(jQuery)
