"use strict";document.addEventListener("DOMContentLoaded",function(){function e(e){e.addEventListener("mouseover",function(e){e.stopPropagation(),this.style.display="block"})}function t(e){e.addEventListener("mouseout",function(e){e.stopPropagation(),this.style.display="none"})}var n;if("IntersectionObserver"in window){n=document.querySelectorAll(".lazy");var s=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var t=e.target;t.src=t.dataset.src,t.classList.remove("lazy"),s.unobserve(t)}})});n.forEach(function(e){s.observe(e)})}else{var o,i=function L(){o&&clearTimeout(o),o=setTimeout(function(){var e=window.pageYOffset;n.forEach(function(t){t.offsetTop<window.innerHeight+e&&(t.src=t.dataset.src,t.classList.remove("lazy"))}),0==n.length&&(document.removeEventListener("scroll",L),window.removeEventListener("resize",L),window.removeEventListener("orientationChange",L))},20)};n=document.querySelectorAll(".lazy"),document.addEventListener("scroll",i),window.addEventListener("resize",i),window.addEventListener("orientationChange",i)}for(var c=document.querySelectorAll(".nav__item > a"),l=0;l<c.length;l++)c[l].setAttribute("data-title",c[l].textContent);for(var c=document.querySelectorAll(".categories-item__link > span"),l=0;l<c.length;l++)c[l].setAttribute("data-title",c[l].textContent);window.addEventListener("scroll",function(){var e=document.querySelector("#head");null!=e&&(this.pageYOffset>1?e.classList.add("js-sticky"):e.classList.remove("js-sticky"))});var r=document.querySelector("#js-showHideFilter"),a=document.querySelector("#filter"),u=document.querySelector("#js-hideFilter");null!=r&&r.addEventListener("click",function(){a.classList.toggle("js-filterShow")}),null!=u&&u.addEventListener("click",function(){a.classList.remove("js-filterShow")});var d=document.querySelector("#filter-check1"),f=document.querySelector("#filter-check2"),v=document.querySelector("#filter-check3"),y=document.querySelector("#filter-check4"),h=document.querySelector("#filter-check5"),g=document.querySelector("#filter-check6"),m=document.querySelector("#filter-check7"),k=document.querySelector("#filter-check8"),b=document.querySelectorAll(".filter-menu__label");if(d||f||v||y||h||g||m||null!=k){e(d),t(d),e(f),t(f),e(v),t(v),e(y),t(y),e(h),t(h),e(g),t(g),e(m),t(m),e(k),t(k);for(var l=0;l<b.length;l++)b[l].addEventListener("mouseover",function(e){switch(e.stopPropagation(),this.getAttribute("for")){case"brand":console.log("1"),d.style.display="block";break;case"taste":console.log("2"),f.style.display="block";break;case"country":console.log("3"),v.style.display="block";break;case"strength":console.log("4"),y.style.display="block";break;case"smokiness":console.log("5"),h.style.display="block";break;case"weight":console.log("6"),g.style.display="block";break;case"resistance":console.log("7"),m.style.display="block";break;case"price":console.log("8"),k.style.display="block"}}),b[l].addEventListener("mouseout",function(e){switch(e.stopPropagation(),this.getAttribute("for")){case"brand":d.style.display="none";break;case"taste":f.style.display="none";break;case"country":v.style.display="none";break;case"strength":y.style.display="none";break;case"smokiness":h.style.display="none";break;case"weight":g.style.display="none";break;case"resistance":m.style.display="none";break;case"price":k.style.display="none"}})}var p=document.querySelector("#js-showTooltip"),w=document.querySelector("#js-tooltip"),_=document.querySelector("#js-hideTooltip");null!=p&&p.addEventListener("click",function(){w.style.display="block"}),null!=_&&_.addEventListener("click",function(){w.style.display="none"})}),$(document).ready(function(){if($(window).width()<768){var e=function(e){function t(){n.toggleClass("burger-menu_active"),s.toggleClass("burger-menu__button_active"),n.hasClass("burger-menu_active")?$("body").css({overflow:"hidden",position:"fixed",width:"100%"}):$("body").css({overflow:"visible",position:"static",width:"unset"})}var n=$(e),s=n.find(".burger-menu__button"),o=n.find(".nav__link"),i=n.find(".burger-menu__overlay");s.click(function(e){e.preventDefault(),t()}),o.click(function(){t()}),i.click(function(){t()})};e(".burger-menu")}$(".js-offerSlider").slick({infinite:!0,dots:!0,arrows:!1,lazyLoad:"ondemand",speed:400}),$(function(){var e=document.location.href;$.each($(".nav__list > li > a"),function(){this.href==e&&($(this).toggleClass("js-NavLink_active"),$(this).closest(".nav__list > li").find(".sub-menu").toggleClass("js-SubMenu_active"))}),$.each($(".sub-menu a"),function(){this.href==e&&($(this).toggleClass("js-SubMenuLink_active"),$(this).hasClass("js-SubMenuLink_active")&&($(this).closest(".nav__list > li").find(">a").toggleClass("js-NavLink_active"),$(".sub-menu").toggleClass("js-SubMenu_active")))}),$(".js-NavLink_active, .js-SubMenuLink_active").closest(".nav__item").css("height","unset")}),$(".js-minus").click(function(){var e=$(this).parent().find("input"),t=parseInt(e.val())-1;return t=t<1?1:t,e.val(t),e.change(),!1}),$(".js-plus").click(function(){var e=$(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1}),$(".js-imgChange").on("click",function(e){$("#js-imgProduct").attr("src",$(this).attr("src"))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1N1YkZpbHRlciIsIlN1YkZpbHRlciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhpcyIsInN0eWxlIiwiZGlzcGxheSIsImhpZGVTdWJGaWx0ZXIiLCJsYXp5bG9hZEltYWdlcyIsIndpbmRvdyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImltYWdlIiwidGFyZ2V0Iiwic3JjIiwiZGF0YXNldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJsYXp5bG9hZFRocm90dGxlVGltZW91dCIsImxhenlsb2FkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiaW1nIiwib2Zmc2V0VG9wIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGV4dExpbmsiLCJpIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImFkZCIsInNob3dIaWRlRmlsdGVyIiwiZmlsdGVyIiwiaGlkZUZpbHRlciIsInRvZ2dsZSIsImZpbHRlQ2hlY2sxIiwiZmlsdGVDaGVjazIiLCJmaWx0ZUNoZWNrMyIsImZpbHRlQ2hlY2s0IiwiZmlsdGVDaGVjazUiLCJmaWx0ZUNoZWNrNiIsImZpbHRlQ2hlY2s3IiwiZmlsdGVDaGVjazgiLCJsYWJlbEFsbCIsImdldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93VG9vbHRpcCIsInRvb2x0aXAiLCJoaWRlVG9vbHRpcCIsIiQiLCJyZWFkeSIsIndpZHRoIiwiYnVyZ2VyTWVudSIsInNlbGVjdG9yIiwidG9nZ2xlTWVudSIsIm1lbnUiLCJ0b2dnbGVDbGFzcyIsImJ1dHRvbiIsImhhc0NsYXNzIiwiY3NzIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImZpbmQiLCJsaW5rcyIsIm92ZXJsYXkiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNrIiwiaW5maW5pdGUiLCJkb3RzIiwiYXJyb3dzIiwibGF6eUxvYWQiLCJzcGVlZCIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsImVhY2giLCJjbG9zZXN0IiwiJGlucHV0IiwicGFyZW50IiwiY291bnQiLCJwYXJzZUludCIsInZhbCIsImNoYW5nZSIsIm9uIiwiYXR0ciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQUEsVUFBU0MsaUJBQWlCLG1CQUFvQixXQXFHNUMsUUFBU0MsR0FBY0MsR0FDckJBLEVBQVVGLGlCQUFpQixZQUFhLFNBQVVHLEdBQ2hEQSxFQUFNQyxrQkFDTkMsS0FBS0MsTUFBTUMsUUFBVSxVQUl6QixRQUFTQyxHQUFjTixHQUNyQkEsRUFBVUYsaUJBQWlCLFdBQVksU0FBVUcsR0FDL0NBLEVBQU1DLGtCQUNOQyxLQUFLQyxNQUFNQyxRQUFVLFNBOUd6QixHQUFJRSxFQUVKLElBQUksd0JBQTBCQyxRQUFRLENBQ3BDRCxFQUFpQlYsU0FBU1ksaUJBQWlCLFFBQzNDLElBQUlDLEdBQWdCLEdBQUlDLHNCQUFxQixTQUFVQyxFQUFTQyxHQUM5REQsRUFBUUUsUUFBUSxTQUFVQyxHQUN4QixHQUFJQSxFQUFNQyxlQUFnQixDQUN4QixHQUFJQyxHQUFRRixFQUFNRyxNQUNsQkQsR0FBTUUsSUFBTUYsRUFBTUcsUUFBUUQsSUFDMUJGLEVBQU1JLFVBQVVDLE9BQU8sUUFDdkJaLEVBQWNhLFVBQVVOLE9BSTlCVixHQUFlTyxRQUFRLFNBQVVHLEdBQy9CUCxFQUFjYyxRQUFRUCxTQUVuQixDQUNMLEdBc0JJUSxHQXRCQUMsRUFBVyxRQUFTQSxLQUNsQkQsR0FDRkUsYUFBYUYsR0FHZkEsRUFBMEJHLFdBQVcsV0FDbkMsR0FBSUMsR0FBWXJCLE9BQU9z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U0FBVSxXQVV0RlYsRUFBRSxhQUFhZ0IsTUFBTSxXQUNuQixHQUFJYyxHQUFTOUIsRUFBRTNELE1BQU0wRixTQUFTbEIsS0FBSyxTQUMvQm1CLEVBQVFDLFNBQVNILEVBQU9JLE9BQVMsQ0FJckMsT0FIQUYsR0FBUUEsRUFBUSxFQUFJLEVBQUlBLEVBQ3hCRixFQUFPSSxJQUFJRixHQUNYRixFQUFPSyxVQUNBLElBRVRuQyxFQUFFLFlBQVlnQixNQUFNLFdBQ2xCLEdBQUljLEdBQVM5QixFQUFFM0QsTUFBTTBGLFNBQVNsQixLQUFLLFFBR25DLE9BRkFpQixHQUFPSSxJQUFJRCxTQUFTSCxFQUFPSSxPQUFTLEdBQ3BDSixFQUFPSyxVQUNBLElBR1RuQyxFQUFFLGlCQUFpQm9DLEdBQUcsUUFBUyxTQUFVbkIsR0FDdkNqQixFQUFFLGtCQUFrQnFDLEtBQUssTUFBT3JDLEVBQUUzRCxNQUFNZ0csS0FBSyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7IC8vbGF6eSBsb2FkXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhenlsb2FkSW1hZ2VzO1xuXG4gIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgbGF6eWxvYWRJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhenlcIik7XG4gICAgdmFyIGltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMsIG9ic2VydmVyKSB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHZhciBpbWFnZSA9IGVudHJ5LnRhcmdldDtcbiAgICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZS5kYXRhc2V0LnNyYztcbiAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibGF6eVwiKTtcbiAgICAgICAgICBpbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxhenlsb2FkSW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBsYXp5bG9hZCA9IGZ1bmN0aW9uIGxhenlsb2FkKCkge1xuICAgICAgaWYgKGxhenlsb2FkVGhyb3R0bGVUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChsYXp5bG9hZFRocm90dGxlVGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIGxhenlsb2FkVGhyb3R0bGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIGxhenlsb2FkSW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgIGlmIChpbWcub2Zmc2V0VG9wIDwgd2luZG93LmlubmVySGVpZ2h0ICsgc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1nLmRhdGFzZXQuc3JjO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsYXp5bG9hZEltYWdlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGF6eWxvYWQpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxhenlsb2FkKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uQ2hhbmdlXCIsIGxhenlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjApO1xuICAgIH07XG5cbiAgICB2YXIgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQ7XG4gICAgbGF6eWxvYWRJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhenlcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5bG9hZCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGF6eWxvYWQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25DaGFuZ2VcIiwgbGF6eWxvYWQpO1xuICB9IC8v0LLRi9Cy0L7QtCDQsiBiZWZvcmUg0YHRgdC70YvQu9C60Lgg0LzQtdC90Y4g0LfQvdCw0YfQtdC90LjQtSDRgdCw0LzQvtC5INGB0YHRi9C70LrQuFxuXG5cbiAgdmFyIHRleHRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9faXRlbSA+IGEnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRMaW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgdGV4dExpbmtbaV0uc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgdGV4dExpbmtbaV0udGV4dENvbnRlbnQpO1xuICB9IC8v0LLRi9Cy0L7QtCDQsiBhZnRlciDQvdCw0LfQstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuSAtINC00LvRjyDQsNC90LjQvNCw0YbQuNC4XG5cblxuICB2YXIgdGV4dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcmllcy1pdGVtX19saW5rID4gc3BhbicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dExpbmsubGVuZ3RoOyBpKyspIHtcbiAgICB0ZXh0TGlua1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCB0ZXh0TGlua1tpXS50ZXh0Q29udGVudCk7XG4gIH0gLy/Qu9C40L/QutCw0Y8g0L3QsNCy0LjQs9Cw0YbQuNGPINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LVcblxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZCcpO1xuXG4gICAgaWYgKGhlYWQgIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucGFnZVlPZmZzZXQgPiAxKSB7XG4gICAgICAgIGhlYWQuY2xhc3NMaXN0LmFkZCgnanMtc3RpY2t5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXN0aWNreScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8v0YHQstC+0YDQsNGH0LjQstCw0L3QuNC1L9GA0LDQt9Cy0L7RgNCw0YfQuNCy0LDQvdC40LUg0YTQuNC70YzRgtGA0LBcblxuICB2YXIgc2hvd0hpZGVGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtc2hvd0hpZGVGaWx0ZXInKTtcbiAgdmFyIGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXInKTtcbiAgdmFyIGhpZGVGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtaGlkZUZpbHRlcicpO1xuXG4gIGlmIChzaG93SGlkZUZpbHRlciAhPSBudWxsKSB7XG4gICAgc2hvd0hpZGVGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnanMtZmlsdGVyU2hvdycpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhpZGVGaWx0ZXIgIT0gbnVsbCkge1xuICAgIGhpZGVGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmaWx0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnanMtZmlsdGVyU2hvdycpO1xuICAgIH0pO1xuICB9IC8v0L7RgtC+0LHRgNCw0LbQtdC90LjQtSDQv9C+0LTQvNC10L3RjiDRhNC40LvRjNGC0YDQsCDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC90LAg0L/Rg9C90LrRgiDRhNC40YzRgtGA0LBcblxuXG4gIHZhciBmaWx0ZUNoZWNrMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2hlY2sxJyk7XG4gIHZhciBmaWx0ZUNoZWNrMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2hlY2syJyk7XG4gIHZhciBmaWx0ZUNoZWNrMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2hlY2szJyk7XG4gIHZhciBmaWx0ZUNoZWNrNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2hlY2s0Jyk7XG4gIHZhciBmaWx0ZUNoZWNrNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2hlY2s1Jyk7XG4gIHZhciBmaWx0ZUNoZWNrNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2hlY2s2Jyk7XG4gIHZhciBmaWx0ZUNoZWNrNyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2hlY2s3Jyk7XG4gIHZhciBmaWx0ZUNoZWNrOCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY2hlY2s4Jyk7XG5cbiAgZnVuY3Rpb24gc2hvd1N1YkZpbHRlcihTdWJGaWx0ZXIpIHtcbiAgICBTdWJGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlU3ViRmlsdGVyKFN1YkZpbHRlcikge1xuICAgIFN1YkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbGFiZWxBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLW1lbnVfX2xhYmVsJyk7IC8v0L/RgNC4INC90LDQstC10LTQtdC90LjQuCDQvdCwINC/0L7QtNC80LXQvdGOINGE0LjQu9GM0YLRgNCwXG5cbiAgaWYgKGZpbHRlQ2hlY2sxIHx8IGZpbHRlQ2hlY2syIHx8IGZpbHRlQ2hlY2szIHx8IGZpbHRlQ2hlY2s0IHx8IGZpbHRlQ2hlY2s1IHx8IGZpbHRlQ2hlY2s2IHx8IGZpbHRlQ2hlY2s3IHx8IGZpbHRlQ2hlY2s4ICE9IG51bGwpIHtcbiAgICBzaG93U3ViRmlsdGVyKGZpbHRlQ2hlY2sxKTtcbiAgICBoaWRlU3ViRmlsdGVyKGZpbHRlQ2hlY2sxKTtcbiAgICBzaG93U3ViRmlsdGVyKGZpbHRlQ2hlY2syKTtcbiAgICBoaWRlU3ViRmlsdGVyKGZpbHRlQ2hlY2syKTtcbiAgICBzaG93U3ViRmlsdGVyKGZpbHRlQ2hlY2szKTtcbiAgICBoaWRlU3ViRmlsdGVyKGZpbHRlQ2hlY2szKTtcbiAgICBzaG93U3ViRmlsdGVyKGZpbHRlQ2hlY2s0KTtcbiAgICBoaWRlU3ViRmlsdGVyKGZpbHRlQ2hlY2s0KTtcbiAgICBzaG93U3ViRmlsdGVyKGZpbHRlQ2hlY2s1KTtcbiAgICBoaWRlU3ViRmlsdGVyKGZpbHRlQ2hlY2s1KTtcbiAgICBzaG93U3ViRmlsdGVyKGZpbHRlQ2hlY2s2KTtcbiAgICBoaWRlU3ViRmlsdGVyKGZpbHRlQ2hlY2s2KTtcbiAgICBzaG93U3ViRmlsdGVyKGZpbHRlQ2hlY2s3KTtcbiAgICBoaWRlU3ViRmlsdGVyKGZpbHRlQ2hlY2s3KTtcbiAgICBzaG93U3ViRmlsdGVyKGZpbHRlQ2hlY2s4KTtcbiAgICBoaWRlU3ViRmlsdGVyKGZpbHRlQ2hlY2s4KTsgLy/Qv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC90LAg0YHQsNC8INC/0YPQvdC60YIg0LzQtdC90Y4g0LggXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhYmVsQWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsYWJlbEFsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8v0L7RgdGC0LDQvdC+0LLQutCwINC40YHQv9C+0LvQvdC10L3QuNGPINGE0YPQvdC60YbQuNC4XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmdldEF0dHJpYnV0ZSgnZm9yJykpIHtcbiAgICAgICAgICBjYXNlICdicmFuZCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMScpO1xuICAgICAgICAgICAgZmlsdGVDaGVjazEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3Rhc3RlJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyJyk7XG4gICAgICAgICAgICBmaWx0ZUNoZWNrMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnY291bnRyeSc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMycpO1xuICAgICAgICAgICAgZmlsdGVDaGVjazMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3N0cmVuZ3RoJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0Jyk7XG4gICAgICAgICAgICBmaWx0ZUNoZWNrNC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc21va2luZXNzJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc1Jyk7XG4gICAgICAgICAgICBmaWx0ZUNoZWNrNS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnd2VpZ2h0JzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc2Jyk7XG4gICAgICAgICAgICBmaWx0ZUNoZWNrNi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAncmVzaXN0YW5jZSc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnNycpO1xuICAgICAgICAgICAgZmlsdGVDaGVjazcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3ByaWNlJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc4Jyk7XG4gICAgICAgICAgICBmaWx0ZUNoZWNrOC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIHN0YXRlbWVudHNfZGVmXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsYWJlbEFsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy/QvtGB0YLQsNC90L7QstC60LAg0LjRgdC/0L7Qu9C90LXQvdC40Y8g0YTRg9C90LrRhtC40LhcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0QXR0cmlidXRlKCdmb3InKSkge1xuICAgICAgICAgIGNhc2UgJ2JyYW5kJzpcbiAgICAgICAgICAgIGZpbHRlQ2hlY2sxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3Rhc3RlJzpcbiAgICAgICAgICAgIGZpbHRlQ2hlY2syLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2NvdW50cnknOlxuICAgICAgICAgICAgZmlsdGVDaGVjazMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc3RyZW5ndGgnOlxuICAgICAgICAgICAgZmlsdGVDaGVjazQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc21va2luZXNzJzpcbiAgICAgICAgICAgIGZpbHRlQ2hlY2s1LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3dlaWdodCc6XG4gICAgICAgICAgICBmaWx0ZUNoZWNrNi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdyZXNpc3RhbmNlJzpcbiAgICAgICAgICAgIGZpbHRlQ2hlY2s3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3ByaWNlJzpcbiAgICAgICAgICAgIGZpbHRlQ2hlY2s4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBzdGF0ZW1lbnRzX2RlZlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSAvLyB0b29sdGlwIGluIHByb2R1Y3QgY2FyZFxuXG5cbiAgdmFyIHNob3dUb29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXNob3dUb29sdGlwJyk7XG4gIHZhciB0b29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXRvb2x0aXAnKTtcbiAgdmFyIGhpZGVUb29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWhpZGVUb29sdGlwJyk7XG5cbiAgaWYgKHNob3dUb29sdGlwICE9IG51bGwpIHtcbiAgICBzaG93VG9vbHRpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGlkZVRvb2x0aXAgIT0gbnVsbCkge1xuICAgIGhpZGVUb29sdGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9XG59KTsgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbi8vIFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxKXsgIFxuLy8gXHRcdFx0JCgnLm5hdmlnYXRpb24nKS5hZGRDbGFzcyhcInN0aWNreVwiKTtcbi8vIFx0fVxuLy8gXHRlbHNle1xuLy8gXHRcdFx0JCgnLm5hdmlnYXRpb24nKS5yZW1vdmVDbGFzcyhcInN0aWNreVwiKTtcbi8vIFx0fVxuLy8gfSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy9idXJnZXIgbWVudVxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICB2YXIgYnVyZ2VyTWVudSA9IGZ1bmN0aW9uIGJ1cmdlck1lbnUoc2VsZWN0b3IpIHtcbiAgICAgIHZhciBtZW51ID0gJChzZWxlY3Rvcik7XG4gICAgICB2YXIgYnV0dG9uID0gbWVudS5maW5kKCcuYnVyZ2VyLW1lbnVfX2J1dHRvbicpO1xuICAgICAgdmFyIGxpbmtzID0gbWVudS5maW5kKCcubmF2X19saW5rJyk7XG4gICAgICB2YXIgb3ZlcmxheSA9IG1lbnUuZmluZCgnLmJ1cmdlci1tZW51X19vdmVybGF5Jyk7XG4gICAgICBidXR0b24uY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVNZW51KCk7XG4gICAgICB9KTtcbiAgICAgIGxpbmtzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9nZ2xlTWVudSgpO1xuICAgICAgfSk7XG4gICAgICBvdmVybGF5LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9nZ2xlTWVudSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIG1lbnUudG9nZ2xlQ2xhc3MoJ2J1cmdlci1tZW51X2FjdGl2ZScpO1xuICAgICAgICBidXR0b24udG9nZ2xlQ2xhc3MoJ2J1cmdlci1tZW51X19idXR0b25fYWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MoJ2J1cmdlci1tZW51X2FjdGl2ZScpKSB7XG4gICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICdvdmVyZmxvdyc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdzdGF0aWMnLFxuICAgICAgICAgICAgJ3dpZHRoJzogJ3Vuc2V0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGJ1cmdlck1lbnUoJy5idXJnZXItbWVudScpO1xuICB9IC8vIHNsaWRlciBvbiB0aGUgaW5kZXgucGhwXG5cblxuICAkKCcuanMtb2ZmZXJTbGlkZXInKS5zbGljayh7XG4gICAgLy8gYXV0b3BsYXk6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgZG90czogdHJ1ZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgIHNwZWVkOiA0MDAgLy8gcmVzcG9uc2l2ZTogW1xuICAgIC8vIFx0e1xuICAgIC8vIFx0XHRicmVha3BvaW50OiA3NjgsXG4gICAgLy8gXHRcdHNldHRpbmdzOiB7XG4gICAgLy8gXHRcdFx0c2xpZGVzVG9TaG93OiAzXG4gICAgLy8gXHRcdH1cbiAgICAvLyBcdH0sXG4gICAgLy8gXVxuXG4gIH0pOyAvLyDRhNC+0LrRg9GBINC80LXQvdGOINC90LAg0LDQutGC0LjQstC90L7QuSDRgdGB0YvQu9C60LUv0YHRgtGA0LDQvdC40YbQtVxuXG4gICQoZnVuY3Rpb24gKCkge1xuICAgIHZhciB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgICQuZWFjaCgkKCcubmF2X19saXN0ID4gbGkgPiBhJyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmhyZWYgPT0gdXJsKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2pzLU5hdkxpbmtfYWN0aXZlJyk7IC8v0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINC90LAgc3ViLW1lbnUg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0L/QvtGP0LLQu9C10L3QuNGPXG5cbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubmF2X19saXN0ID4gbGknKS5maW5kKCcuc3ViLW1lbnUnKS50b2dnbGVDbGFzcygnanMtU3ViTWVudV9hY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgO1xuICAgIH0pOyAvLyDRhNC+0LrRg9GBIHN1Yi1tZW51INC90LAg0LDQutGC0LjQstC90L7QuSDRgdGB0YvQu9C60LUv0YHRgtGA0LDQvdC40YbQtVxuXG4gICAgJC5lYWNoKCQoJy5zdWItbWVudSBhJyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmhyZWYgPT0gdXJsKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2pzLVN1Yk1lbnVMaW5rX2FjdGl2ZScpOyAvL9GE0L7QutGD0YEg0LrQsNGC0LDQu9C+0LPQsCDQvdCwINCw0LrRgtC40LLQvdC+0Lkg0YHRgdGL0LvQutC1L9GB0YLRgNCw0L3QuNGG0LUgc3ViLW1lbnVcbiAgICAgICAgLy8gJCh0aGlzKS5jbG9zZXN0KCcubmF2X19saXN0ID4gbGknKS50b2dnbGVDbGFzcygnbmF2X19pdGVtX2FjdGl2ZScpLmZpbmQoJz5hJykudG9nZ2xlQ2xhc3MoJ25hdl9fbGlua19hY3RpdmUnKTtcbiAgICAgICAgLy/QtdGB0LvQuCDQsNC60YLQuNCy0L3QsCDRgdGB0LvRi9C60LAv0YHRgtGA0LDQvdC40YbQsCBzdWItbWVudSDQtNC10LvQsNC10Lwg0LDQutGC0LjQstC90YvQvCDRgdGB0YvQu9C60YMg0LrQsNGC0LDQu9C+0LPQsCDQuCDQv9C+0LrQsNC30YvQstCw0LXQvCBzdWItbWVudSDQtNC+0LHQsNCy0LvRj9GPINC60LvQsNGB0YEg0Logc3ViLW1lbnVcblxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtU3ViTWVudUxpbmtfYWN0aXZlJykpIHtcbiAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5uYXZfX2xpc3QgPiBsaScpLmZpbmQoJz5hJykudG9nZ2xlQ2xhc3MoJ2pzLU5hdkxpbmtfYWN0aXZlJyk7XG4gICAgICAgICAgJCgnLnN1Yi1tZW51JykudG9nZ2xlQ2xhc3MoJ2pzLVN1Yk1lbnVfYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICA7XG4gICAgICB9XG5cbiAgICAgIDtcbiAgICB9KTsgLy/Qt9Cw0LTQsNC10YIg0LLRi9GB0L7RgtGDINCx0LvQvtC60LAg0LIg0LPQu9Cw0LLQvdC+0Lwg0LzQtdC90Y4g0L/RgNC4INCw0LrRgtC40LLQvdC+0Lkg0YHRgdGL0LvQutC1IHN1Yi1tZW51LSDQtNC70Y8g0LrQvtGA0YDQtdC60YLQvdC+0LPQviDQvtGC0L7QsdGA0LDQtNC10L3QuNGPIFxuXG4gICAgJCgnLmpzLU5hdkxpbmtfYWN0aXZlLCAuanMtU3ViTWVudUxpbmtfYWN0aXZlJykuY2xvc2VzdCgnLm5hdl9faXRlbScpLmNzcygnaGVpZ2h0JywgJ3Vuc2V0Jyk7XG4gIH0pOyAvLyAvLyBjb2xsYmFjayBtb2RhbFxuICAvLyBcdCQoJy5qcy1jb2xsYmFjay1tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAvLyBcdFx0JCgnI2NvbGxiYWNrLW1vZGFsJykuYXJjdGljbW9kYWwoe1xuICAvLyBcdFx0fSk7XG4gIC8vIFx0fSk7XG4gIC8vICQoZnVuY3Rpb24oKSB7XG4gIC8vIH0pO1xuICAvL21pbnVzIGFuZCBwbHVzIHByb2R1dGMgY2FydFxuXG4gICQoJy5qcy1taW51cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpO1xuICAgIHZhciBjb3VudCA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSkgLSAxO1xuICAgIGNvdW50ID0gY291bnQgPCAxID8gMSA6IGNvdW50O1xuICAgICRpbnB1dC52YWwoY291bnQpO1xuICAgICRpbnB1dC5jaGFuZ2UoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICAkKCcuanMtcGx1cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpO1xuICAgICRpbnB1dC52YWwocGFyc2VJbnQoJGlucHV0LnZhbCgpKSArIDEpO1xuICAgICRpbnB1dC5jaGFuZ2UoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pOyAvLyBjaGFuZ2UgaW1nIHByb2R1Y3QgY2FyZFxuXG4gICQoJy5qcy1pbWdDaGFuZ2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICQoJyNqcy1pbWdQcm9kdWN0JykuYXR0cignc3JjJywgJCh0aGlzKS5hdHRyKCdzcmMnKSk7XG4gIH0pO1xufSk7Il19
