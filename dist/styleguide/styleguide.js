function ghPageRoutes(){var a=$(location).attr("pathname").split("/")[1],b=$(location).attr("pathname").split("/")[2],c=$("a"),d=$("img");d.each(function(){var b=$(this).attr("src"),c=$(this).attr("src"),d=c.split("/")[0],e=d.split(".")[0];return"nova"===a&&"nova"!==e&&"http:"!==e&&"https:"!==e&&"www"!==e?(b="/nova"+c,$(this).attr("src",b)):void 0}),c.each(function(){var c,d,e=$(this).attr("href"),f=$(this).attr("href");void 0!==f&&(f.indexOf("/")>=0&&(c=f.split("/")[0]),void 0!==c&&(d=c.split(".")[0]));var g;return void 0!==b&&(g=b.split(".")[0]),"nova"===a&&"nova"!==d&&"http:"!==d&&"https:"!==d&&"www"!==d?"ui-components"===g&&"#"===e[0]?(e="/nova/ui-components.html"+f,$(this).attr("href",e)):(e="/nova"+f,$(this).attr("href",e)):void 0})}$(document).ready(function(){"use strict";$(window).scroll(function(){$(this).scrollTop()>200?$(".button--scroll-to-top").fadeIn():$(".button--scroll-to-top").fadeOut()}),$("component").replaceWith(function(){var type=$(this).data("type"),properties=eval($(this).data("properties")),component="ui.component."+type+".render";if($(this).data("random")){var objectLength=Object.keys(properties).length,randomObjectNumber=Math.floor(Math.random()*objectLength),properties=eval($(this).data("properties")+"."+Object.keys(properties)[randomObjectNumber]);return eval(component)(properties)}return eval(component)(properties)}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return console.log("true"),$("html,body").animate({scrollTop:a.offset().top},500),!1}})}),$("li.dropdown").click(function(){"use strict";$(this).toggleClass("drop-nav-active")});