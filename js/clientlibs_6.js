function vs1aVideo(t,e,n,i){var s="",o="";"youtube"==i&&(s="https://youtu.be/"+e,e=""),n.length>0&&(o="PIP");var r={event:{eventName:"VIDEO_"+t.toUpperCase(),eventAction:e,modelName:n,type:o,externalLink:s}};aaTrackEvent(r)}!function(t,e){(t=t).g2=t.g2||{},t.g2.cpStandardVideo=t.g2.cpStandardVideo||{},t.g2.cpStandardVideo.Component=function(){"use strict";return function(t){var e=window,n=e.jQuery,i=e.G2.util;function s(t,e){if(!(this instanceof s))return new s(t,e);var o={obj:t,foldInner:".fold-text-inner",foldInnerBtn:".fold-text-btn",foldDescWrap:".fold-desc-wrap",foldDescInner:".fold-desc-inner",classAttr:{heightfull:"is-heightfull",opened:"is-opened"},ariaAttr:{expanded:"aria-expanded"},isFoldActive:!1,customEvent:".Component"+(new Date).getTime()+Math.random(),resizeStart:null};this.opts=i.def(o,e||{}),(this.obj=n(this.opts.obj)).length&&this.init()}return s.prototype={init:function(){this.setElements(),this.resizeFunc(),this.bindEvents(!0)},setElements:function(){this.foldInner=this.obj.find(this.opts.foldInner),this.foldInnerBtn=this.foldInner.find(this.opts.foldInnerBtn),this.foldDescWrap=this.foldInner.find(this.opts.foldDescWrap),this.foldDescInner=this.foldDescWrap.find(this.opts.foldDescInner)},changeEvents:function(t){var e=[],n=t.split(" ");for(var i in n)e.push(n[i]+this.opts.customEvent);return e.join(" ")},bindEvents:function(t){t?(n(e).on(this.changeEvents("resize orientationchange"),n.proxy(this.resizeFunc,this)),this.foldInnerBtn.on(this.changeEvents("click"),n.proxy(this.foldInnerBtnClick,this))):(n(e).off(this.changeEvents("resize orientationchange")),this.foldInnerBtn.off(this.changeEvents("click")))},resizeFunc:function(){this.winWidth=i.winSize().w,null==this.opts.resizeStart&&(this.opts.resizeStart=this.winWidth,this.resizeAnimateFunc()),e.clearTimeout(this.resizeEndTime),this.resizeEndTime=e.setTimeout(n.proxy(this.resizeEndFunc,this),150)},resizeEndFunc:function(){this.opts.resizeStart=null,i.cancelAFrame.call(e,this.resizeRequestFrame)},resizeAnimateFunc:function(){this.setLayout(),this.resizeRequestFrame=i.requestAFrame.call(e,n.proxy(this.resizeAnimateFunc,this))},setLayout:function(){var t=i.winSize().h>=1080;this.obj.toggleClass(this.opts.classAttr.heightfull,t),this.opts.isFoldActive&&this.foldLayout(!0,0)},foldInnerBtnClick:function(t){t.preventDefault();var e=n(t.currentTarget);this.opts.isFoldActive=!this.opts.isFoldActive,this.foldView(e),this.foldLayout(this.opts.isFoldActive)},foldView:function(t){this.foldInner.toggleClass(this.opts.classAttr.opened,this.opts.isFoldActive),this.foldInner.hasClass(this.opts.classAttr.opened)?t.attr(this.opts.ariaAttr.expanded,"true"):t.attr(this.opts.ariaAttr.expanded,"false")},foldLayout:function(t,e){var n=this.foldDescInner.outerHeight(!0);i.findFocus(this.foldInner),t?this.foldDescWrap.css("height",n):this.foldDescWrap.css("height","")},reInit:function(t){}},s}()}()}(this),$((function(){!function(){"use strict";!function(t){var e=window,n=e.jQuery,i=e.G2.util;function s(t){var e={obj:".cp-standard-video"};this.opts=i.def(e,t||{}),(this.obj=n(this.opts.obj)).length&&this.init()}s.prototype={init:function(){this.callComponent()},callComponent:function(){for(var t=0,n=this.obj.length;t<n;t++)new e.g2.cpStandardVideo.Component(this.obj.eq(t))}},new s}()}()})),function(t){$((function(){var e=[];$('div[data-check="share-VS1A"]').each((function(){e.push($(this).data("component-id"))}));for(var n=0;n<e.length;n++){var i=e[n],s=parseUri(window.location.href);s.queryKey.sns&&i==s.queryKey.sns.substring(4)&&($("."+i).attr("id",i),document.getElementById(i).scrollIntoView(),$("."+i+" .btn-layer.js-layer-opener").click()),$("."+i+" .share-item-link").on("click",(function(e){if("svg-download"!=$(this).find(".js-svg-icon").data("icon")){e.preventDefault();var n=window.location.href,i="VS1A"+$(this).parents(".cp-standard-video").data("component-id"),s=t.updateURLParameter(n,"sns",i);s=t.updateURLParameter(s,"slide","0"),history.pushState("","",s);var o=$(this).find("span.blind").text();o=o.toLowerCase();var r=$(this).parents(".cm-layer").siblings(".cp-standard-video__inner").find(".fold-text-title").text();sns_share(o,r)}})),$("."+i+" .js-layer-closer").on("click",(function(){if(parseUri(window.location.href).queryKey.sns){var e=t.updateURLParameter(window.location.href,"sns","");e=t.updateURLParameter(e,"slide",""),history.pushState("","",e)}}))}}))}(window.extension=window.extension||{});