function toAEM_beforeDocumentReady(){}function toAEM_documentReady(){}function toAEM_appReady(){toApp_checkFirstVisit()}function toAEM_imageLoadComplete(){}function toAEM_bnp_changeStep(e,s,t){}function toApp_checkFirstVisit(){$(App.Events).trigger(App.Events.CHECK_FIRST_VISIT,[!0])}function toApp_showShareHighlight(e,s,t){$(App.Events).trigger(App.Events.SHOW_SHARE_HIGHLIGHT,[e,s,t])}function toApp_showShareGallery(e,s,t){$(App.Events).trigger(App.Events.SHOW_SHARE_GALLERY,[e,s,t])}function toApp_360vr_changeImage(){$(App.Events).trigger(App.Events.CHANGE_360VR,[{arrImageUrl:["assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00000.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00001.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00002.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00003.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00004.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00005.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00006.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00007.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00008.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00009.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00010.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00011.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00012.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00013.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00014.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00015.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00016.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00017.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00018.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00019.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00020.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00021.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00022.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00023.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00024.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00025.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00026.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00027.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00028.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00029.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00030.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00031.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00032.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00033.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00034.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00035.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00036.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00037.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00038.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00039.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00040.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00041.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00042.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00043.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00044.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00045.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00046.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00047.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00048.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00049.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00050.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00051.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00052.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00053.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00054.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00055.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00056.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00057.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00058.jpg","assets/images/tmp/sample_360sq/EQ900_Exterior_Mar_00059.jpg"],isHasDetail:!0,indexImage_detail:50,pos_detailPoint:[{posX:52,posY:262},{posX:650,posY:360},{posX:670,posY:106},{posX:1204,posY:210},{posX:1258,posY:280}],arrDetailCutUrl:["assets/images/tmp/sample_detailCut.jpg","assets/images/tmp/sample_detailCut.jpg","assets/images/tmp/sample_detailCut.jpg","assets/images/tmp/sample_detailCut.jpg","assets/images/tmp/sample_detailCut.jpg"],altText_DetailCutImg:["디테일컷 이미지 1","디테일컷 이미지 2","디테일컷 이미지 3","디테일컷 이미지 4","디테일컷 이미지 5"],altText_DetailCutBtn:["디테일컷 버튼 1","디테일컷 버튼 2","디테일컷 버튼 3","디테일컷 버튼 4","디테일컷 버튼 5"],altText:"360도 이미지 시퀀스의 대체 텍스트 값이 삽입되는 변수 입니다."}])}var saveScroll=0;function toApp_showPopup(e){setTimeout((function(){if(null!=$(e)){$(App.Events).trigger(App.Events.SHOW_POPUP),$(e).css("position","fixed"),$(e).removeClass("hide"),saveScroll=$(window).scrollTop(),$("body").css("overflow","hidden");var s=parseInt($(e).innerWidth()),t=parseInt($(e).innerHeight()),a=$(window).innerHeight();return null==$(e).attr("data-ori-width")&&$(e).attr("data-ori-width",s),s=parseInt($(e).attr("data-ori-width")),$(e).hasClass("owners-pop-style")?t>a?$(e).css({width:"auto",height:a-60,marginLeft:-s/2,marginTop:-(a-60)/2,"overflow-y":"scroll"}):$(e).css({height:"auto",marginLeft:-s/2,marginTop:-t/2,"overflow-y":"auto"}):t>a?$(e).css({width:s+60,height:a-60,marginLeft:-(s+60)/2,marginTop:-(a-60)/2,"overflow-y":"scroll"}):$(e).css({height:"auto",marginLeft:-s/2,marginTop:-t/2,"overflow-y":"auto"}),$("#overlay").removeClass("hide"),TweenLite.to($("#overlay"),.3,{css:{opacity:.8}}),TweenLite.to($(e),.5,{css:{opacity:1}}),$(App.Events).trigger(App.Events.COMPLETE_POPUP),null==$(e).attr("tabindex")||"-1"==$(e).attr("tabindex")||-1==$(e).attr("tabindex")?($(e).attr("tabindex","0"),$(e).focus(),$(e).removeAttr("tabindex")):$(e).focus(),!1}}),10)}function toApp_hidePopup(e){if(null!=$(e)){var s=parseInt($(e).innerWidth()),t=parseInt($(e).innerHeight());$(window).innerHeight();TweenLite.to($(e),.3,{css:{opacity:0},onComplete:function(){$(e).addClass("hide")}}),TweenLite.to($("#overlay"),.5,{css:{opacity:0},onComplete:function(){$("#overlay").addClass("hide"),$(e).css({height:"auto",marginLeft:-s/2,marginTop:-t/2,"overflow-y":"auto"})}}),$("body").css("overflow","visible"),$(window).scrollTop(saveScroll),$(App.Events).trigger(App.Events.HIDE_POPUP)}}function toApp_hidePopup_Focus(popupCon){if(null!=setFocus&&null!=$(popupCon)){TweenLite.to($(popupCon),.3,{css:{opacity:0}}),TweenLite.to($("#overlay"),.5,{css:{opacity:0},onComplete:function(){$(popupCon).addClass("hide"),$("#overlay").addClass("hide")}}),$("body").css("overflow","visible"),$(window).scrollTop(saveScroll),$(App.Events).trigger(App.Events.HIDE_POPUP);var obj=eval("$('#"+setFocus+"')");obj.focus()}}function toApp_hideChangePopup(e){null!=$(e)&&(TweenLite.to($(e),.3,{css:{opacity:0}}),$(e).addClass("hide"),$("#overlay").addClass("hide"),$("body").css("overflow","visible"),$(window).scrollTop(saveScroll),$(App.Events).trigger(App.Events.HIDE_POPUP))}function toAEM_onChangeCustomSelectBox(e){}function toApp_onChangeSection(e,s){return $(App.Events).trigger(App.Events.CLICK_INDICATOR,[e,s]),!1}function toAEM_getDeviceType(){return _Device.type}function toAEM_getMobileOS(){return _Device.os}function toApp_onSearchClick(){alert("ipad일시 서치페이지로 이동")}function scrollLoader_frontComplete(e){setting_devComponent(e)}function setting_devComponent(e){App._isContinue=e;var s=$(".model .sec-intro"),t=$(".model .sec-360view"),a=$(".model .sec-features"),p=$(".model .sec-spec"),r=$(".model .sec-gallery");s.length&&null==s.attr("data-dev-setting")?(s.attr("data-dev-setting",!0),pip_dev_setting_intro()):t.length&&null==t.attr("data-dev-setting")?(t.attr("data-dev-setting",!0),pip_dev_setting_360view()):a.length&&null==a.attr("data-dev-setting")?(a.attr("data-dev-setting",!0),pip_dev_setting_features()):p.length&&null==p.attr("data-dev-setting")?(p.attr("data-dev-setting",!0),pip_dev_setting_spec()):r.length&&null==r.attr("data-dev-setting")?(r.attr("data-dev-setting",!0),pip_dev_setting_gallery()):scrollLoader_devLoadingComplete()}function scrollLoader_devLoadingComplete(){scrollLoader_devComplete(App._isContinue)}function scrollLoader_devComplete(e){$(App.Events).trigger(App.Events.PIP_DEV_SETTING_COMPLETE,e)}function pip_dev_setting_intro(){scrollLoader_devLoadingComplete()}function pip_dev_setting_360view(){scrollLoader_devLoadingComplete()}function pip_dev_setting_features(){scrollLoader_devLoadingComplete()}function pip_dev_setting_spec(){scrollLoader_devLoadingComplete()}function pip_dev_setting_gallery(){scrollLoader_devLoadingComplete()}function toAPP_setting360ArcoTab(){$(App.Events).trigger(App.Events.RESET_MODEL_360_SPEC)}var builder_connector=builder_connector||{};function _track_spec_expand(e){}function _track_gallery_tab_click(e){}function _track_gallery_list_click(e){}builder_connector.getBuilderCurrentStep=function(){var e=0;return"undefined"==typeof builder||(e=builder.current_step),e},builder_connector.setBuilderCurrentStep=function(e){"undefined"==typeof builder||(builder.current_step=e)},builder_connector.doSteps=function(e){};