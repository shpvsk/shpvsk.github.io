"use strict";document.addEventListener("DOMContentLoaded",function(){function e(e){var t=new Image;t.onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}var t;if("IntersectionObserver"in window){t=document.querySelectorAll(".lazy");var n=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var t=e.target;t.src=t.dataset.src,t.classList.remove("lazy"),n.unobserve(t)}})});t.forEach(function(e){n.observe(e)})}else{var s,i=function p(){s&&clearTimeout(s),s=setTimeout(function(){var e=window.pageYOffset;t.forEach(function(t){t.offsetTop<window.innerHeight+e&&(t.src=t.dataset.src,t.classList.remove("lazy"))}),0==t.length&&(document.removeEventListener("scroll",p),window.removeEventListener("resize",p),window.removeEventListener("orientationChange",p))},20)};t=document.querySelectorAll(".lazy"),document.addEventListener("scroll",i),window.addEventListener("resize",i),window.addEventListener("orientationChange",i)}e(function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")});for(var o=document.querySelectorAll(".nav__item > a"),r=0;r<o.length;r++)o[r].setAttribute("data-title",o[r].textContent);for(var o=document.querySelectorAll(".categories-item__link > span"),r=0;r<o.length;r++)o[r].setAttribute("data-title",o[r].textContent);window.addEventListener("scroll",function(){var e=document.querySelector("#head");null!=e&&(this.pageYOffset>1?e.classList.add("js-sticky"):e.classList.remove("js-sticky"))});var l=document.querySelector("#js-showHideFilter"),c=document.querySelector("#filter"),a=document.querySelector("#js-hideFilter");null!=l&&l.addEventListener("click",function(){c.classList.toggle("js-filterShow")}),null!=a&&a.addEventListener("click",function(){c.classList.remove("js-filterShow")});var u=document.querySelector("#js-showTooltip"),d=document.querySelector("#js-tooltip"),v=document.querySelector("#js-hideTooltip");null!=u&&u.addEventListener("click",function(){d.style.display="block"}),null!=v&&v.addEventListener("click",function(){d.style.display="none"});var f=document.querySelectorAll(".delivery-form__wrap > input");if(null!=f)for(var r=0;r<f.length;r++)f[r].addEventListener("keyup",function(e){e.preventDefault(),""!=this.value?this.classList.add("notEmptyInput"):this.classList.remove("notEmptyInput")});if(document.body.clientWidth<992){var m=function(e){e.forEach(function(e){for(var t=e.selector,n=0;n<t.length;n++)t[n].insertAdjacentHTML("afterbegin","<span></span>")})},h=document.querySelectorAll(".nav__list > li"),g=document.querySelectorAll(".nav__list > li > .sub-menu > li"),b=[{selector:h},{selector:g}];m(b);var y=document.querySelector(".nav__list > li > .sub-menu"),L=document.querySelectorAll(".sub-menu span"),_=y.closest(".nav__list > li").querySelector("span");_.addEventListener("click",function(){y.classList.add("js-subMenu")});for(var r=0;r<L.length;r++)L[r].addEventListener("click",function(){this.classList.toggle("js-span-active");var e=this.closest(".sub-menu > li"),t=e.querySelector("a"),n=e.querySelector(".sub-menu");n.classList.contains("js-innerSubMenu")?(n.classList.remove("js-innerSubMenu"),n.style.maxHeight=0,t.style.color="#262626"):(n.classList.add("js-innerSubMenu"),n.style.maxHeight=n.scrollHeight+"px",t.style.color="#FFB32A")});y.insertAdjacentHTML("beforeend",'<button class="sub-menu__btn btn">Назад</button>');document.body.addEventListener("click",function(e){if(e.target.classList.contains("sub-menu__btn")){y.classList.remove("js-subMenu");for(var t=0;t<L.length;t++){var n=L[t].closest(".sub-menu > li"),s=n.querySelector("a"),i=n.querySelector(".sub-menu");L[t].classList.remove("js-span-active"),i.classList.remove("js-innerSubMenu"),i.style.maxHeight=0,s.style.color="#262626"}}})}}),$(document).ready(function(){if($(window).width()<992){var e=function(e){function t(){n.toggleClass("burger-menu_active"),s.toggleClass("burger-menu__button_active"),n.hasClass("burger-menu_active")?$("body").css({overflow:"hidden",position:"fixed",width:"100%"}):$("body").css({overflow:"visible",position:"static",width:"unset"})}var n=$(e),s=n.find(".burger-menu__button"),i=n.find(".nav__link"),o=n.find(".burger-menu__overlay");s.click(function(e){e.preventDefault(),t()}),i.click(function(){t()}),o.click(function(){t()})};e(".burger-menu")}$(".js-offerSlider").slick({infinite:!0,dots:!0,arrows:!1,lazyLoad:"ondemand",speed:400,responsive:[{breakpoint:576,settings:{dots:!1}}]}),$(function(){var e=document.location.href;$.each($(".nav__list > li > a"),function(){this.href==e&&($(this).toggleClass("js-NavLink_active"),$(this).closest(".nav__list > li").find(".sub-menu").toggleClass("js-SubMenu_active"))}),$.each($(".sub-menu a"),function(){this.href==e&&($(this).toggleClass("js-SubMenuLink_active"),$(this).hasClass("js-SubMenuLink_active")&&($(this).closest(".nav__list > li").find(">a").toggleClass("js-NavLink_active"),$(".sub-menu").toggleClass("js-SubMenu_active")))}),$(".js-NavLink_active, .js-SubMenuLink_active").closest(".nav__item").css("height","unset")}),$(".js-minus").click(function(){var e=$(this).parent().find("input"),t=parseInt(e.val())-1;return t=t<1?1:t,e.val(t),e.change(),!1}),$(".js-plus").click(function(){var e=$(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1}),$(".js-imgChange").on("click",function(e){$("#js-imgProduct").attr("src",$(this).attr("src"))}),null!=document.querySelector("#tel")&&$("#tel").mask("+7(999) 999 99 99")});