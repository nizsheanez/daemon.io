(function(e){function t(){return"onhashchange"in window}function i(){r=document.location.hash,window.onhashchange=n}function n(){var t=r;r=document.location.hash,e(window).trigger("jQuery.hashchange",{before:t,after:r})}function a(e){null==r&&(r=document.location.hash),null!=s&&clearInterval(s),l!=e.interval&&(s=setInterval(o,e.interval),l=e.interval)}function o(){if(r!=document.location.hash){var t=r;r=document.location.hash,e(window).trigger("jQuery.hashchange",{before:t,after:r})}}e.fn.hashchange=function(t){return e(window).bind("jQuery.hashchange",t),this},e.observeHashChange=function(n){var o=e.extend({},e.observeHashChange.defaults,n);t()?i():a(o)};var r=null,s=null,l=0;e.observeHashChange.defaults={interval:500},e.observeHashChange()})(jQuery),$(function(){function e(e){top.consoleRef=window.open("","myconsole","width=600,height=300,left=50,top=50,menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1"),top.consoleRef.document.writeln("<html><head><title>Snippet :: Code View :: "+location.href+'</title></head><body bgcolor=white onLoad="self.focus()"><pre>'+e+"</pre></body></html>"),top.consoleRef.document.close()}$(".snippet-container").each(function(){$(this).find("a.snippet-text").click(function(){var e=$(this).parents(".snippet-wrap").find(".snippet-formatted"),t=$(this).parents(".snippet-wrap").find(".snippet-textonly");return e.toggle(),t.toggle(),t.is(":visible")?$(this).html("html"):$(this).html("text"),!1}),$(this).find("a.snippet-window").click(function(){var t=$(this).parents(".snippet-wrap").find(".snippet-textonly").html();return e(t),$(this).blur(),!1})}),$(".snippet-toggle").each(function(){$(this).click(function(){$(this).parents(".snippet-container").find(".snippet-wrap").toggle()})})}),$(function(){$(".twit_box").css("display","block");var e=$(document),t=$(window),i=function(){var i=$(this).scrollTop();i>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut(),e.height()-t.height()>i+30?$(".scrolldown").fadeIn():$(".scrolldown").fadeOut()};$(window).scroll(i),i(),$(".scrollup").click(function(){var e=t.scrollTop()-.6*t.height();return $("html, body").animate({scrollTop:e>0?e:0},500),!1}),$(".scrolldown").click(function(){var i=t.scrollTop()+.6*t.height(),n=e.height();return $("html, body").animate({scrollTop:i>n?n:i},500),!1}),$(".accordion h2 > a").click(function(){var e=$(this).closest("div").find(".accordion-content"),t=$(this).closest("section"),i=$("section").index(t),n=$(".accordion .opened");e.get(0)!==n.get(0)&&(n.removeClass("opened").slideUp(),e.addClass("opened").slideDown({complete:function(){$("html, body").animate({scrollTop:0===i?0:-35+t.prev().offset().top},500,"easeInSine")}}))});var n=function(){$('.accordion h2 > a[href="'+document.location.hash+'"]').click()};$(window).hashchange!==void 0&&$(window).hashchange(n),n();var a="Unknown OS";-1!=navigator.appVersion.indexOf("Win")&&(a="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&(a="MacOS"),-1!=navigator.appVersion.indexOf("X11")&&(a="UNIX"),-1!=navigator.appVersion.indexOf("Linux")&&(a="Linux"),$.browser={},$.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),$.browser.msie=/msie/.test(navigator.userAgent.toLowerCase());var o=navigator.userAgent.indexOf("Chrome")>-1;navigator.userAgent.indexOf("MSIE")>-1,navigator.userAgent.indexOf("Firefox")>-1;var r=navigator.userAgent.indexOf("Safari")>-1;navigator.userAgent.indexOf("Presto")>-1,o&&r&&(r=!1),"MacOS"===a&&$.browser.webkit&&o&&$("html > head").append($("<style>.caption p {font-weight: bold;}</style>"));var s=$("header"),t=$(window),l=!1;activateScrollListener=function(){l||(l=!0,s.css("position","absolute"),t.scroll(function(){var e=t.scrollTop();0>e&&(e=0);var i=$(document).height(),n=t.height();e>i-n&&(e=i-n),s.css("top",e)}).trigger("scroll"))},deactivateScrollListener=function(){l&&(l=!1,s.css({position:"fixed",top:0}),t.unbind("scroll"))},onresize=function(){1020>$(window).width()?activateScrollListener():deactivateScrollListener()},onresize(),$(window).resize(onresize)});