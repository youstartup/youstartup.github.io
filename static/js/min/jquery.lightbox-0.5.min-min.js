/**
 * jQuery lightBox plugin
 * This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)
 * and adapted to me for use like a plugin from jQuery.
 * @name jquery-lightbox-0.5.js
 * @author Leandro Vieira Pinho - http://leandrovieira.com
 * @version 0.5
 * @date April 11, 2008
 * @category jQuery plugin
 * @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)
 * @license CCAttribution-ShareAlike 2.5 Brazil - http://creativecommons.org/licenses/by-sa/2.5/br/deed.en_US
 * @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin
 */
!function($){$.fn.lightBox=function(e){function t(){return i(this,x),!1}function i(t,i){if($("embed, object, select").css({visibility:"hidden"}),n(),e.imageArray.length=0,e.activeImage=0,1==i.length)e.imageArray.push(new Array(t.getAttribute("href"),t.getAttribute("title")));else for(var o=0;o<i.length;o++)e.imageArray.push(new Array(i[o].getAttribute("href"),i[o].getAttribute("title")));for(;e.imageArray[e.activeImage][0]!=t.getAttribute("href");)e.activeImage++;a()}function n(){$("body").append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="'+e.imageLoading+'"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="'+e.imageBtnClose+'"></a></div></div></div></div>');var t=u();$("#jquery-overlay").css({backgroundColor:e.overlayBgColor,opacity:e.overlayOpacity,width:t[0],height:t[1]}).fadeIn();var i=s();$("#jquery-lightbox").css({top:i[1]+t[3]/10,left:i[0]}).show(),$("#jquery-overlay,#jquery-lightbox").click(function(){b()}),$("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(){return b(),!1}),$(window).resize(function(){var e=u();$("#jquery-overlay").css({width:e[0],height:e[1]});var t=s();$("#jquery-lightbox").css({top:t[1]+e[3]/10,left:t[0]})})}function a(){$("#lightbox-loading").show(),e.fixedNavigation?$("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide():$("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide();var t=new Image;t.onload=function(){$("#lightbox-image").attr("src",e.imageArray[e.activeImage][0]),o(t.width,t.height),t.onload=function(){}},t.src=e.imageArray[e.activeImage][0]}function o(t,i){var n=$("#lightbox-container-image-box").width(),a=$("#lightbox-container-image-box").height(),o=t+2*e.containerBorderSize,g=i+2*e.containerBorderSize,c=n-o,l=a-g;$("#lightbox-container-image-box").animate({width:o,height:g},e.containerResizeSpeed,function(){r()}),0==c&&0==l&&v($.browser.msie?250:100),$("#lightbox-container-image-data-box").css({width:t}),$("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({height:i+2*e.containerBorderSize})}function r(){$("#lightbox-loading").hide(),$("#lightbox-image").fadeIn(function(){g(),c()}),m()}function g(){$("#lightbox-container-image-data-box").slideDown("fast"),$("#lightbox-image-details-caption").hide(),e.imageArray[e.activeImage][1]&&$("#lightbox-image-details-caption").html(e.imageArray[e.activeImage][1]).show(),e.imageArray.length>1&&$("#lightbox-image-details-currentNumber").html(e.txtImage+" "+(e.activeImage+1)+" "+e.txtOf+" "+e.imageArray.length).show()}function c(){$("#lightbox-nav").show(),$("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({background:"transparent url("+e.imageBlank+") no-repeat"}),0!=e.activeImage&&(e.fixedNavigation?$("#lightbox-nav-btnPrev").css({background:"url("+e.imageBtnPrev+") left 15% no-repeat"}).unbind().bind("click",function(){return e.activeImage=e.activeImage-1,a(),!1}):$("#lightbox-nav-btnPrev").unbind().hover(function(){$(this).css({background:"url("+e.imageBtnPrev+") left 15% no-repeat"})},function(){$(this).css({background:"transparent url("+e.imageBlank+") no-repeat"})}).show().bind("click",function(){return e.activeImage=e.activeImage-1,a(),!1})),e.activeImage!=e.imageArray.length-1&&(e.fixedNavigation?$("#lightbox-nav-btnNext").css({background:"url("+e.imageBtnNext+") right 15% no-repeat"}).unbind().bind("click",function(){return e.activeImage=e.activeImage+1,a(),!1}):$("#lightbox-nav-btnNext").unbind().hover(function(){$(this).css({background:"url("+e.imageBtnNext+") right 15% no-repeat"})},function(){$(this).css({background:"transparent url("+e.imageBlank+") no-repeat"})}).show().bind("click",function(){return e.activeImage=e.activeImage+1,a(),!1})),l()}function l(){$(document).keydown(function(e){h(e)})}function d(){$(document).unbind()}function h(t){null==t?(keycode=event.keyCode,escapeKey=27):(keycode=t.keyCode,escapeKey=t.DOM_VK_ESCAPE),key=String.fromCharCode(keycode).toLowerCase(),key!=e.keyToClose&&"x"!=key&&keycode!=escapeKey||b(),key!=e.keyToPrev&&37!=keycode||0!=e.activeImage&&(e.activeImage=e.activeImage-1,a(),d()),key!=e.keyToNext&&39!=keycode||e.activeImage!=e.imageArray.length-1&&(e.activeImage=e.activeImage+1,a(),d())}function m(){e.imageArray.length-1>e.activeImage&&(objNext=new Image,objNext.src=e.imageArray[e.activeImage+1][0]),e.activeImage>0&&(objPrev=new Image,objPrev.src=e.imageArray[e.activeImage-1][0])}function b(){$("#jquery-lightbox").remove(),$("#jquery-overlay").fadeOut(function(){$("#jquery-overlay").remove()}),$("embed, object, select").css({visibility:"visible"})}function u(){var e,t;window.innerHeight&&window.scrollMaxY?(e=window.innerWidth+window.scrollMaxX,t=window.innerHeight+window.scrollMaxY):document.body.scrollHeight>document.body.offsetHeight?(e=document.body.scrollWidth,t=document.body.scrollHeight):(e=document.body.offsetWidth,t=document.body.offsetHeight);var i,n;return self.innerHeight?(i=document.documentElement.clientWidth?document.documentElement.clientWidth:self.innerWidth,n=self.innerHeight):document.documentElement&&document.documentElement.clientHeight?(i=document.documentElement.clientWidth,n=document.documentElement.clientHeight):document.body&&(i=document.body.clientWidth,n=document.body.clientHeight),t<n?pageHeight=n:pageHeight=t,e<i?pageWidth=e:pageWidth=i,arrayPageSize=new Array(pageWidth,pageHeight,i,n),arrayPageSize}function s(){var e,t;return self.pageYOffset?(t=self.pageYOffset,e=self.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(t=document.documentElement.scrollTop,e=document.documentElement.scrollLeft):document.body&&(t=document.body.scrollTop,e=document.body.scrollLeft),arrayPageScroll=new Array(e,t),arrayPageScroll}function v(e){var t=new Date;i=null;do var i=new Date;while(i-t<e)}e=jQuery.extend({overlayBgColor:"#000",overlayOpacity:.8,fixedNavigation:!1,imageLoading:"/static/ui/lightbox/lightbox-ico-loading.gif",imageBtnPrev:"/static/ui/lightbox/lightbox-btn-prev.gif",imageBtnNext:"/static/ui/lightbox/lightbox-btn-next.gif",imageBtnClose:"/static/ui/lightbox/lightbox-btn-close.gif",imageBlank:"/static/ui/lightbox/lightbox-blank.gif",containerBorderSize:10,containerResizeSpeed:400,txtImage:"Image",txtOf:"of",keyToClose:"c",keyToPrev:"p",keyToNext:"n",imageArray:[],activeImage:0},e);var x=this;return this.unbind("click").click(t)}}(jQuery);