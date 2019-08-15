(function($){var $body,$window,$sidebar,adminbarOffset,top=false,bottom=false,windowWidth,windowHeight,lastWindowPos=0,topOffset=0,bodyHeight,sidebarHeight,resizeTimer,secondary,button;function initMainNavigation(container){container.find('.menu-item-has-children > a').after('<button class="dropdown-toggle" aria-expanded="false">'+screenReaderText.expand+'</button>');container.find('.current-menu-ancestor > button').addClass('toggle-on');container.find('.current-menu-ancestor > .sub-menu').addClass('toggled-on');container.find('.dropdown-toggle').click(function(e){var _this=$(this);e.preventDefault();_this.toggleClass('toggle-on');_this.next('.children, .sub-menu').toggleClass('toggled-on');_this.attr('aria-expanded',_this.attr('aria-expanded')==='false'?'true':'false');_this.html(_this.html()===screenReaderText.expand?screenReaderText.collapse:screenReaderText.expand);});}
initMainNavigation($('.main-navigation'));$(document).on('customize-preview-menu-refreshed',function(e,params){if('primary'===params.wpNavMenuArgs.theme_location){initMainNavigation(params.newContainer);params.oldContainer.find('.dropdown-toggle.toggle-on').each(function(){var containerId=$(this).parent().prop('id');$(params.newContainer).find('#'+containerId+' > .dropdown-toggle').triggerHandler('click');});}});secondary=$('#secondary');button=$('.site-branding').find('.secondary-toggle');(function(){var menu,widgets,social;if(!secondary.length||!button.length){return;}
menu=secondary.find('.nav-menu');widgets=secondary.find('#widget-area');social=secondary.find('#social-navigation');if(!widgets.length&&!social.length&&(!menu.length||!menu.children().length)){button.hide();return;}
button.on('click.twentyfifteen',function(){secondary.toggleClass('toggled-on');secondary.trigger('resize');$(this).toggleClass('toggled-on');if($(this,secondary).hasClass('toggled-on')){$(this).attr('aria-expanded','true');secondary.attr('aria-expanded','true');}else{$(this).attr('aria-expanded','false');secondary.attr('aria-expanded','false');}});})();function onResizeARIA(){if(955>$window.width()){button.attr('aria-expanded','false');secondary.attr('aria-expanded','false');button.attr('aria-controls','secondary');}else{button.removeAttr('aria-expanded');secondary.removeAttr('aria-expanded');button.removeAttr('aria-controls');}}
function resize(){windowWidth=$window.width();if(955>windowWidth){top=bottom=false;$sidebar.removeAttr('style');}}
function scroll(){var windowPos=$window.scrollTop();if(955>windowWidth){return;}
sidebarHeight=$sidebar.height();windowHeight=$window.height();bodyHeight=$body.height();if(sidebarHeight+adminbarOffset>windowHeight){if(windowPos>lastWindowPos){if(top){top=false;topOffset=($sidebar.offset().top>0)?$sidebar.offset().top-adminbarOffset:0;$sidebar.attr('style','top: '+topOffset+'px;');}else if(!bottom&&windowPos+windowHeight>sidebarHeight+$sidebar.offset().top&&sidebarHeight+adminbarOffset<bodyHeight){bottom=true;$sidebar.attr('style','position: fixed; bottom: 0;');}}else if(windowPos<lastWindowPos){if(bottom){bottom=false;topOffset=($sidebar.offset().top>0)?$sidebar.offset().top-adminbarOffset:0;$sidebar.attr('style','top: '+topOffset+'px;');}else if(!top&&windowPos+adminbarOffset<$sidebar.offset().top){top=true;$sidebar.attr('style','position: fixed;');}}else{top=bottom=false;topOffset=($sidebar.offset().top>0)?$sidebar.offset().top-adminbarOffset:0;$sidebar.attr('style','top: '+topOffset+'px;');}}else if(!top){top=true;$sidebar.attr('style','position: fixed;');}
lastWindowPos=windowPos;}
function resizeAndScroll(){resize();scroll();}
$(document).ready(function(){$body=$(document.body);$window=$(window);$sidebar=$('#sidebar').first();adminbarOffset=$body.is('.admin-bar')?$('#wpadminbar').height():0;$window.on('scroll.twentyfifteen',scroll).on('load.twentyfifteen',onResizeARIA).on('resize.twentyfifteen',function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(resizeAndScroll,500);onResizeARIA();});$sidebar.on('click.twentyfifteen keydown.twentyfifteen','button',resizeAndScroll);resizeAndScroll();for(var i=1;i<6;i++){setTimeout(resizeAndScroll,100*i);}});})(jQuery);;var ak_js=document.getElementById("ak_js");if(!ak_js){ak_js=document.createElement('input');ak_js.setAttribute('id','ak_js');ak_js.setAttribute('name','ak_js');ak_js.setAttribute('type','hidden');}
else{ak_js.parentNode.removeChild(ak_js);}
ak_js.setAttribute('value',(new Date()).getTime());var commentForm=document.getElementById('commentform');if(commentForm){commentForm.appendChild(ak_js);}
else{var replyRowContainer=document.getElementById('replyrow');if(replyRowContainer){var children=replyRowContainer.getElementsByTagName('td');if(children.length>0){children[0].appendChild(ak_js);}}}