function sns_share(e,t){var r=encodeURIComponent(window.location.href);console.log("url : "+window.location.href),console.log("comTitle : "+t);var n=encodeURIComponent($("title").text());switch(""!=t&&null!=t&&(n=encodeURIComponent(t)),console.log("sTitle decode: "+decodeURIComponent(n)),e){case"facebook":url="http://www.facebook.com/sharer/sharer.php?u="+r,window.open(url,"_blank","width=600,height=400,resizable=yes,scrollbars=yes");break;case"twitter":url="http://twitter.com/intent/tweet?text="+n+"&url="+r,window.open(url,"_blank","width=600,height=400,resizable=yes,scrollbars=yes");break;default:return alert("지원하지 않는 SNS입니다."),!1}snsShareAa(e,n)}function setCookie(e,t,r){var n=new Date;n.setTime(n.getTime()+60*r*60*24*1e3),document.cookie=e+"="+t+";expires="+n.toUTCString()+";path=/"}function getCookie(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}function setJsUrlMap(e){var t=e;return location.port||(t=t.replace("/content/genesis-p2","")),t}function compoVideo(e,t,r){var n="";r.length>0&&(n="PIP"),aaTrackEvent({event:{eventName:"VIDEO_"+e.toUpperCase(),eventAction:t,modelName:r,type:n,externalLink:""}})}function snsShareAa(e,t){aaTrackEvent({event:{eventName:"SOCIAL_SHARE",eventAction:t,type:e,modelName:"",externalLink:""}})}function parseUri(e){for(var t=parseUri.options,r=t.parser[t.strictMode?"strict":"loose"].exec(e),n={},a=14;a--;)n[t.key[a]]=r[a]||"";return n[t.q.name]={},n[t.key[12]].replace(t.q.parser,(function(e,r,a){r&&(n[t.q.name][r]=a)})),n}function aaTrackEvent(e){console.log(" aaTrackEvent : ",e);try{return _trackEvent(e)}catch(e){return console.log("aaTrackEvent : ",e),{}}}function aaSatelliteEvent(e,t){console.log(" aaSatelliteEvent : ",t);try{return _satellite.track(e,t)}catch(e){return console.log("aaSatelliteEvent : ",e),{}}}function aaDlEvent(e){console.log(" aaDlEvent : ",e);try{return _dl=Object.assign(_dl,e)}catch(e){return console.log("aaDlEvent : ",e),{}}}!function(e){e.getProperties=function(e){return $("[data-"+e+"]").attr("data-"+e)},e.api=function(e){var t="post";return e.method&&(t=e.method),$.ajax({url:e.url,dataType:"json",method:t,data:e.param})},e.YYYYMMDDHHMMSS=function(){function e(e){return(e<10?"0":"")+e}var t=new Date;return t.getFullYear()+e(t.getMonth()+1)+e(t.getDate())+e(t.getHours())+e(t.getMinutes())+e(t.getSeconds())},e.loadTemplate=function(e){return document.getElementById(e).innerHTML},e.replaceTemplate=function(e,t){var r=e;for(var n in t)r=r.split("{{"+n+"}}").join(t[n]);return r=r.replace(/{{(.*?)}}/g,"")},e.removeSpace=function(e){var t="";return e&&(t=e.replace(/(\s*)/g,"")),t},e.updateURLParameter=function(e,t,r){var n=null,a="",o=e.split("?"),i=o[0],l=o[1],s="",c="";if(l){var u=(d=l.split("#"))[0];(n=d[1])&&(l=u),o=l.split("&");for(var p=0;p<o.length;p++)o[p].split("=")[0]!=t&&(a+=s+o[p],s="&")}else{var d;u=(d=i.split("#"))[0];n=d[1],u&&(i=u)}(n&&""!=r&&(r+="#"+n),""!=r)?c=i+"?"+a+(s+""+t+"="+r):c=i+"?"+a;return c},e.nvl=function(e,t){function r(e){var t=e+"";return""==t||null==t||"null"==t}function n(e){return null==typeof e||void 0===e||"undefined"==e||null==e}return(r(t)||n(t))&&(t=""),r(e)||n(e)?t:e},e.registerHelper=function(){Handlebars.registerHelper("character",(function(e,t){return String.fromCharCode(65+e)})),Handlebars.registerHelper("stringify",(function(e,t){return JSON.stringify(e)})),Handlebars.registerHelper("if_eq",(function(e,t,r){return e==t?r.fn(this):r.inverse(this)})),Handlebars.registerHelper("if_index",(function(e,t,r){return e&&e.indexOf(t)>-1?r.fn(this):r.inverse(this)})),Handlebars.registerHelper("loop",(function(e,t,r){for(var n="",a=e;a<=+t;a++)r.data.index=a,n+=r.fn(this);return n})),Handlebars.registerHelper("math",(function(e,t,r,n){return{"+":(e=parseFloat(e))+(r=parseFloat(r)),"-":e-r,"*":e*r,"/":e/r,"%":e%r}[t]})),Handlebars.registerHelper("paging",(function(e,t){return""})),Handlebars.registerHelper("tel",(function(e,t){var r="";return 9==(e=(e=e.split("-").join("")).replace(/\s/g,"")).length&&(r=e.replace(/(\d{2})(\d{3})(\d{4})/g,"$1-$2-$3")),10==e.length&&(r=e.replace(/(\d{3})(\d{3})(\d{4})/g,"$1-$2-$3")),11==e.length&&(r=e.replace(/(\d{3})(\d{4})(\d{4})/g,"$1-$2-$3")),10==e.length&&"02"==e.substring(0,2)&&(r=e.replace(/(\d{2})(\d{4})(\d{4})/g,"$1-$2-$3")),r})),Handlebars.registerHelper("date_format",(function(e,t){return e.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/,"$1.$2.$3")})),Handlebars.registerHelper("split",(function(e,t){return e.split(t)})),Handlebars.registerHelper("timFilter",(function(e){if(e){if("1"==e)return"오전";if("2"==e)return"오후";if(e.length>3)return e.substring(0,2)+":"+e.substring(2)}return e})),Handlebars.registerHelper("date_format2",(function(e){if(!e)return"";var t="";e=e.replace(/\s/gi,"");try{8==e.length&&(t=e.replace(/(\d{4})(\d{2})(\d{2})/,"$1년 $2월 $3일"))}catch(r){t=e,console.log(r)}return t})),Handlebars.registerHelper("time_format",(function(e){return e?e.substring(0,2)+"시":""}))}}(window.extension=window.extension||{}),parseUri.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};