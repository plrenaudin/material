/*! 
 * modernizr 3.3.0 (Custom Build) | MIT
 * http://modernizr.com/download/?-touchevents-setclasses
 */

!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

/*!
 * bootstrap v3.3.5 (http://getbootstrap.com)
 * affix, collapse, dropdown, modal, tab, transition
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(o).remove(),t(s).each(function(){var n=t(this),o=e(n),s={relatedTarget:this};o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(o[0],i.target)||(o.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),o.removeClass("open").trigger("hidden.bs.dropdown",s))))}))}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new a(this)),"string"==typeof e&&n[e].call(i)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.5",a.prototype.toggle=function(n){var o=t(this);if(!o.is(".disabled, :disabled")){var s=e(o),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var o=e(n),a=o.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&o.find(s).trigger("focus"),n.trigger("click");var r=" li:not(.disabled):visible a",d=o.find(".dropdown-menu"+r);if(d.length){var l=d.index(i.target);38==i.which&&l>0&&l--,40==i.which&&l<d.length-1&&l++,~l||(l=0),d.eq(l).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,n){return this.each(function(){var o=t(this),s=o.data("bs.modal"),a=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);s||o.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](n):a.show&&s.show(n)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var n=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),o&&n.$element[0].offsetWidth,n.$element.addClass("in"),n.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});o?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var n=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=t(this),o=n.attr("href"),s=t(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),n.data());n.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.tab");o||n.data("bs.tab",o=new i(this)),"string"==typeof e&&o[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(n);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},i.prototype.activate=function(e,n,o){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var a=n.find("> .active"),r=o&&t.support.transition&&(a.length&&a.hasClass("fade")||!!n.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var o=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.affix"),s="object"==typeof e&&e;o||n.data("bs.affix",o=new i(this,s)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.5",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var o=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>o?"top":!1;if("bottom"==this.affixed)return null!=i?o+this.unpin<=s.top?!1:"bottom":t-n>=o+a?!1:"bottom";var r=null==this.affixed,d=r?o:s.top,l=r?a:e;return null!=i&&i>=o?"top":null!=n&&d+l>=t-n?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,o=n.top,s=n.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof n&&(s=o=n),"function"==typeof o&&(o=n.top(this.$element)),"function"==typeof s&&(s=n.bottom(this.$element));var r=this.getState(a,e,o,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var d="affix"+(r?"-"+r:""),l=t.Event(d+".bs.affix");if(this.$element.trigger(l),l.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(d).trigger(d.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery),+function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function i(e){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!o&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),o||i.data("bs.collapse",o=new n(this,s)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.5",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){o&&o.length&&(i.call(o,"hide"),e||o.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var d=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][d])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION):o.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var o=t(n);this.addAriaAndCollapsedClass(e(o),o)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var o=t(this);o.attr("data-target")||n.preventDefault();var s=e(o),a=s.data("bs.collapse"),r=a?"toggle":o.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var o=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

// floating label
	(function ($) {
		'use strict';

		$.fn.floatingLabel = function (option) {
			var parent = this.closest('.form-group-label');

			if (parent.length) {
				switch (option) {
					case 'focusin':
						parent.addClass('control-focus');
						break;
					case 'focusout':
						parent.removeClass('control-focus');
						break;
					default: 
						if (this.val()) {
							parent.addClass('control-highlight');
						} else if (this.is('select') && $('option:first-child', this).html().replace(' ', '') !== '') {
							parent.addClass('control-highlight');
						} else {
							parent.removeClass('control-highlight');
						};
				};
			};

			return this;
		};
	}(jQuery));

	$(function () {
		'use strict';

		$('.form-group-label .form-control').each(function () {
			$(this).floatingLabel('change');
		});

		$(document).on('change', '.form-group-label .form-control', function () {
			$(this).floatingLabel('change');
		});

		$(document).on('focusin', '.form-group-label .form-control', function () {
			$(this).floatingLabel('focusin');
		});

		$(document).on('focusout', '.form-group-label .form-control', function () {
			$(this).floatingLabel('focusout');
		});
	});

/*!
 * textarea autosize v0.4.0
 * https://github.com/javierjulio/textarea-autosize
 */

!function(t,e){function i(e){this.element=e,this.$element=t(e),this.init()}var n="textareaAutoSize",h="plugin_"+n,s=function(t){return t.replace(/\s/g,"").length>0};i.prototype={init:function(){var i=(this.$element.outerHeight(),parseInt(this.$element.css("paddingBottom"))+parseInt(this.$element.css("paddingTop")));s(this.element.value)&&this.$element.height(this.element.scrollHeight-i),this.$element.on("input keyup",function(){var n=t(e),h=n.scrollTop();t(this).height(0).height(this.scrollHeight-i),n.scrollTop(h)})}},t.fn[n]=function(e){return this.each(function(){t.data(this,h)||t.data(this,h,new i(this,e))}),this}}(jQuery,window,document);

// textarea autosize default
	$(function () {
		'use strict';

		$('.textarea-autosize').textareaAutoSize();
	});

// header waterfall
	$(function () {
		'use strict';

		$('.header-waterfall').each(function () {
			$(this).affix({
				offset: {
					top: 1
				}
			});
		});
	});

// menu
	(function ($) {
		'use strict';

		var Menu = function (element, options) {
			this.ignoreBackdropClick = false;
			this.isShown             = null;
			this.options             = options;
			this.originalBodyPad     = null;
			this.scrollbarWidth      = 0;
			this.$backdrop           = null;
			this.$body               = $(document.body);
			this.$element            = $(element);
			this.$dialog             = this.$element.find('.menu-scroll');
		};

		if (!$.fn.modal) {
			throw new Error('Menu requires Bootstrap modal.js');
		};

		Menu.DEFAULTS = $.extend({}, $.fn.modal.Constructor.DEFAULTS, {});
		Menu.TRANSITION_DURATION = 300;
		Menu.TRANSITION_DURATION_BACKDROP = 150;

		Menu.prototype = $.extend({}, $.fn.modal.Constructor.prototype);

		Menu.prototype.backdrop = function (callback) {
			var that = this;

			if (this.isShown && this.options.backdrop) {
				var doAnimate = $.support.transition;

				this.$backdrop = $(document.createElement('div')).addClass('menu-backdrop').appendTo(this.$body);

				this.$element.on('click.dismiss.bs.menu', $.proxy(function (e) {
					if (this.ignoreBackdropClick) {
						this.ignoreBackdropClick = false;
						return;
					};

					if (e.target !== e.currentTarget) {
						return;
					};

					this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
				}, this));

				if (doAnimate) {
					this.$backdrop[0].offsetWidth;
				};

				this.$backdrop.addClass('in');

				if (!callback) {
					return;
				};

				doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Menu.TRANSITION_DURATION_BACKDROP) : callback();
			} else if (!this.isShown && this.$backdrop) {
				this.$backdrop.removeClass('in');

				var callbackRemove = function () {
					that.removeBackdrop();
					callback && callback();
				};

				$.support.transition ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Menu.TRANSITION_DURATION_BACKDROP) : callbackRemove();
			} else if (callback) {
				callback();
			};
		};

		Menu.prototype.hide = function (e) {
			if (e) e.preventDefault();

			e = $.Event('hide.bs.menu');

			this.$element.trigger(e);

			if (!this.isShown || e.isDefaultPrevented()) {
				return;
			};

			this.isShown = false;

			this.escape();

			$(document).off('focusin.bs.modal');

			this.$element.removeClass('in').off('click.dismiss.bs.menu').off('mouseup.dismiss.bs.menu');

			this.$dialog.off('mousedown.dismiss.bs.menu');

			$.support.transition ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Menu.TRANSITION_DURATION) : this.hideModal();
		};

		Menu.prototype.hideModal = function () {
			var that = this;

			this.$element.hide();

			this.backdrop(function () {
				that.$element.trigger('hidden.bs.menu');
			});
		};

		Menu.prototype.show = function (_relatedTarget) {
			var that = this;
			var e    = $.Event('show.bs.menu', { relatedTarget: _relatedTarget });

			this.$element.trigger(e);

			if (this.isShown || e.isDefaultPrevented()) {
				return;
			};

			this.isShown = true;

			this.escape();

			this.$element.on('click.dismiss.bs.menu', '[data-dismiss="menu"]', $.proxy(this.hide, this));

			this.$dialog.on('mousedown.dismiss.bs.menu', function () {
				that.$element.one('mouseup.dismiss.bs.menu', function (e) {
					if ($(e.target).is(that.$element)) {
						that.ignoreBackdropClick = true;
					};
				});
			});

			this.backdrop(function () {
				var transition = $.support.transition;

				if (!that.$element.parent().length) {
					that.$element.appendTo(that.$body);
				};

				that.$element.show();

				if (transition) {
					that.$element[0].offsetWidth;
				};

				that.$element.addClass('in');

				that.enforceFocus();

				var e = $.Event('shown.bs.menu', { relatedTarget: _relatedTarget });

				transition ? that.$dialog.one('bsTransitionEnd', function () {
					that.$element.trigger('focus').trigger(e);
				}).emulateTransitionEnd(Menu.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
			});
		};

		function Plugin (option, _relatedTarget) {
			return this.each(function () {
				var $this   = $(this);
				var data    = $this.data('bs.menu');
				var options = $.extend({}, Menu.DEFAULTS, $this.data(), typeof option == 'object' && option);

				if (!data) $this.data('bs.menu', (data = new Menu(this, options)));
				if (typeof option == 'string') data[option](_relatedTarget);
				else if (options.show) data.show(_relatedTarget);
			});
		};

		var old = $.fn.menu;

		$.fn.menu             = Plugin;
		$.fn.menu.Constructor = Menu;

		$.fn.menu.noConflict = function () {
			$.fn.menu = old;
			return this;
		};

		$(document).on('click.bs.menu.data-api', '[data-toggle="menu"]', function (e) {
			var $this   = $(this);
			var href    = $this.attr('href');
			var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')));
			var option  = $target.data('bs.menu') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

			if ($this.is('a')) e.preventDefault();

			$target.one('show.bs.menu', function (showEvent) {
				if (showEvent.isDefaultPrevented()) {
					return;
				} else {
					$target.attr('tabindex', '-1');
				};

				$target.one('hidden.bs.menu', function () {
					$this.is(':visible') && $this.trigger('focus');
				});
			});

			Plugin.call($target, option, this);
		});
	}(jQuery));

// modale dialog vertical alignment
	$(function () {
		'use strict';

		$(document).on('hidden.bs.modal', '.modal-va-middle', function () {
			$(this).removeClass('modal-va-middle-show');
		});

		$(document).on('show.bs.modal', '.modal-va-middle', function () {
			$(this).addClass('modal-va-middle-show');
		});
	});

// snackbar
	(function ($) {
		'use strict';

		var Snackbar = function (options) {
			this.options  = options;
			this.$element = $('<div class="snackbar-inner">' + this.options.content + '</div>');
		};

		Snackbar.DEFAULTS = {
			alive: 6000,
			content: '&nbsp;',
			hide: function () {},
			show: function () {}
		};

		Snackbar.prototype.fbtn = function (margin) {
			if ($(window).width() < 768 && $('.fbtn-container').length) {
				var str = 'translateY(-' + margin + 'px)';
				$('.fbtn-container').css({
					'-webkit-transform': str,
					'transform': str
				});
			};
		};

		Snackbar.prototype.hide = function () {
			var that = this;

			this.$element.removeClass('in');

			clearTimeout(this.$element.data('timer'));

			if ($.support.transition) {
				this.$element.one('bsTransitionEnd', function () {
					that.options.hide(that.options);
					that.$element.remove();
				});
			} else {
				that.options.hide(that.options);
				that.$element.remove();
			}

			this.fbtn('0');
		};

		Snackbar.prototype.show = function () {
			var that = this;

			if (!$('.snackbar').length) {
				$(document.body).append('<div class="snackbar"></div>');
			};

			this.$element.appendTo('.snackbar').show().addClass(function () {
				that.$element.on('click', '[data-dismiss="snackbar"]', function () {
					that.hide();
				});

				that.$element.data('timer', setTimeout(function () {
					that.hide();
				}, that.options.alive));

				that.$element.on('mouseenter', function () {
					clearTimeout(that.$element.data('timer'));
				}).on('mouseleave', function () {
					that.$element.data('timer', setTimeout(function () {
						that.hide();
					}, that.options.alive));
				});

				that.options.show(that.options);

				return 'in';
			});

			this.fbtn(this.$element.outerHeight());
		};

		function Plugin (option) {
			return this.each(function () {
				var $this    = $(document.body);
				var data     = $this.data('bs.snackbar');
				var options  = $.extend({}, Snackbar.DEFAULTS, option);

				if (!data) {
					$this.data('bs.snackbar', (data = new Snackbar(options)));
					data.show();
				} else if ($('.snackbar-inner').length && !$('.snackbar-inner.old').length) {
					$('.snackbar-inner.in').addClass('old')
					data.hide();
					if ($.support.transition) {
						$(document).one('bsTransitionEnd', '.snackbar-inner.old', function () {
							$this.data('bs.snackbar', (data = new Snackbar(options)));
							data.show();
						});
					} else {
						$this.data('bs.snackbar', (data = new Snackbar(options)));
						data.show();
					};
				} else if (!$('.snackbar-inner').length) {
					$this.data('bs.snackbar', (data = new Snackbar(options)));
					data.show();
				};
			});
		};

		var old = $.fn.snackbar;

		$.fn.snackbar             = Plugin;
		$.fn.snackbar.Constructor = Snackbar;

		$.fn.snackbar.noConflict = function () {
			$.fn.snackbar = old;
			return this;
		};
	}(jQuery));

// tab switch
	(function ($) {
		'use strict';

		$.fn.tabSwitch = function (oldTab) {
			var $this = $(this),
			    $thisNav = $this.closest('.tab-nav'),
			    $thisNavIndicator = $('.tab-nav-indicator', $thisNav),
			    thisLeft = $this.offset().left,
			    thisNavLeft = $thisNav.offset().left,
			    thisNavWidth = $thisNav.outerWidth();

			if (oldTab !== undefined && oldTab[0] !== undefined) {
				var oldTabLeft = oldTab.offset().left;

				$thisNavIndicator.css({
					left: (oldTabLeft - thisNavLeft),
					right: (thisNavLeft + thisNavWidth - oldTabLeft - oldTab.outerWidth())
				});

				if (oldTab.offset().left > thisLeft) {
					$thisNavIndicator.addClass('reverse');

					$thisNavIndicator.one('webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', function () {
						$thisNavIndicator.removeClass('reverse');
					});
				};
			};

			$thisNavIndicator.addClass('animate').css({
				left: (thisLeft - thisNavLeft),
				right: (thisNavLeft + thisNavWidth - thisLeft - $this.outerWidth())
			}).one('webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', function () {
				$thisNavIndicator.removeClass('animate');
			});

			return this;
		}
	})(jQuery);

	$(function () {
		'use strict';

		$('.tab-nav').each(function () {
			$(this).append('<div class="tab-nav-indicator"></div>');
		});

		$(document).on('show.bs.tab', '.tab-nav a[data-toggle="tab"]', function (e) {
			$(e.target).tabSwitch($(e.relatedTarget));
		});
	});

// tile
	(function ($) {
		'use strict';

		var Tile = function (element, options) {
			this.options       = $.extend({}, Tile.DEFAULTS, options);
			this.transitioning = null;
			this.$element      = $(element);

			if (this.options.parent) {
				this.$parent = this.getParent();
			};

			if (this.options.toggle) {
				this.toggle();
			};
		};

		if (!$.fn.collapse) {
			throw new Error('Menu requires Bootstrap collapse.js');
		};

		Tile.DEFAULTS = {
			keyboard: true,
			toggle: true
		};
		Tile.TRANSITION_DURATION = 150;

		Tile.prototype = $.extend({}, $.fn.collapse.Constructor.prototype);

		Tile.prototype.escape = function () {
			if (this.$element.hasClass('in') && this.options.keyboard) {
				$(document).on('keydown.dismiss.bs.tile', $.proxy(function (e) {
					e.which == 27 && this.hide();
				}, this));
			} else if (!this.$element.hasClass('in')) {
				this.$element.off('keydown.dismiss.bs.tile');
			};
		};

		Tile.prototype.hide = function () {
			if (this.transitioning || !this.$element.hasClass('in')) {
				return;
			};

			var startEvent = $.Event('hide.bs.tile');

			this.$element.trigger(startEvent);

			if (startEvent.isDefaultPrevented()) {
				return;
			};

			var dimension = this.dimension();

			this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

			this.$element.addClass('collapsing').removeClass('collapse in');

			this.$element.closest('.tile-collapse').removeClass('active');

			this.transitioning = 1

			var complete = function () {
				this.transitioning = 0;
				this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.tile');
				this.escape();
			};

			if (!$.support.transition) {
				return complete.call(this);
			};

			this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Tile.TRANSITION_DURATION);
		};

		Tile.prototype.show = function () {
			if (this.transitioning || this.$element.hasClass('in')) {
				return;
			};

			var actives = this.$parent && this.$parent.find('.tile-collapse').children('.in, .collapsing');
			var activesData;

			if (actives && actives.length) {
				activesData = actives.data('bs.tile');
				if (activesData && activesData.transitioning) {
					return;
				};
			};

			var startEvent = $.Event('show.bs.tile');

			this.$element.trigger(startEvent);

			if (startEvent.isDefaultPrevented()) {
				return;
			};

			if (actives && actives.length) {
				Plugin.call(actives, 'hide');
				activesData || actives.data('bs.tile', null);
			};

			var dimension = this.dimension();

			this.$element.removeClass('collapse').addClass('collapsing')[dimension](0);

			this.$element.closest('.tile-collapse').addClass('active');

			this.transitioning = 1;

			var complete = function () {
				this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
				this.transitioning = 0;
				this.$element.trigger('shown.bs.tile');
				this.escape();
			};

			if (!$.support.transition) {
				return complete.call(this);
			};

			var scrollSize = $.camelCase(['scroll', dimension].join('-'));

			this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Tile.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
		};

		function getTargetFromTrigger($trigger) {
			var href;
			var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

			return $(target);
		};

		function Plugin(option) {
			return this.each(function () {
				var $this   = $(this);
				var data    = $this.data('bs.tile');
				var options = $.extend({}, Tile.DEFAULTS, $this.data(), typeof option == 'object' && option);

				if (!data && options.toggle && /show|hide/.test(option)) {
					options.toggle = false;
				};

				if (!data) {
					$this.data('bs.tile', (data = new Tile(this, options)));
				};

				if (typeof option == 'string') {
					data[option]();
				};
			})
		};

		var old = $.fn.tile;

		$.fn.tile             = Plugin;
		$.fn.tile.Constructor = Tile;

		$.fn.tile.noConflict = function () {
			$.fn.tile = old;
			return this;
		};

		$(document).on('click.bs.tile.data-api', '[data-toggle="tile"]', function (e) {
			var $this = $(this);

			if (!$(e.target).is('[data-ignore="tile"], [data-ignore="tile"] *')) {
				if (!$this.attr('data-target')) {
					e.preventDefault();
				};

				var $target = getTargetFromTrigger($this);
				var data    = $target.data('bs.tile');
				var option  = data ? 'toggle' : $this.data();

				Plugin.call($target, option);
			};
		});
	}(jQuery));

/*!
 * waves v0.7.4
 * http://fian.my.id/Waves
 */

!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],function(){return b.apply(a)}):"object"==typeof exports?module.exports=b.call(a):a.Waves=b.call(a)}("object"==typeof global?global:this,function(){"use strict";function e(a){return null!==a&&a===a.window}function f(a){return e(a)?a:9===a.nodeType&&a.defaultView}function g(a){var b=typeof a;return"function"===b||"object"===b&&!!a}function h(a){return g(a)&&a.nodeType>0}function i(a){var d=c.call(a);return"[object String]"===d?b(a):g(a)&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(d)&&a.hasOwnProperty("length")?a:h(a)?[a]:[]}function j(a){var b,c,d={top:0,left:0},e=a&&a.ownerDocument;return b=e.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect()),c=f(e),{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}}function k(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function n(a,b,c,d){if(c){d.classList.remove("waves-wrapping"),c.classList.remove("waves-rippling");var e=c.getAttribute("data-x"),f=c.getAttribute("data-y"),g=c.getAttribute("data-scale"),h=c.getAttribute("data-translate"),i=Date.now()-Number(c.getAttribute("data-hold")),j=350-i;0>j&&(j=0),"mousemove"===a.type&&(j=150);var m="mousemove"===a.type?2500:l.duration;setTimeout(function(){var a={top:f+"px",left:e+"px",opacity:"0","-webkit-transition-duration":m+"ms","-moz-transition-duration":m+"ms","-o-transition-duration":m+"ms","transition-duration":m+"ms","-webkit-transform":g+" "+h,"-moz-transform":g+" "+h,"-ms-transform":g+" "+h,"-o-transform":g+" "+h,transform:g+" "+h};c.setAttribute("style",k(a)),setTimeout(function(){try{d.removeChild(c),b.removeChild(d)}catch(a){return!1}},m)},j)}}function p(a){if(o.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(c.classList.contains("waves-effect")&&!(c instanceof SVGElement)){b=c;break}c=c.parentElement}return b}function q(a){var b=p(a);if(null!==b){if(b.disabled||b.getAttribute("disabled")||b.classList.contains("disabled"))return;if(o.registerEvent(a),"touchstart"===a.type&&l.delay){var c=!1,e=setTimeout(function(){e=null,l.show(a,b)},l.delay),f=function(d){e&&(clearTimeout(e),e=null,l.show(a,b)),c||(c=!0,l.hide(d,b))},g=function(a){e&&(clearTimeout(e),e=null),f(a)};b.addEventListener("touchmove",g,!1),b.addEventListener("touchend",f,!1),b.addEventListener("touchcancel",f,!1)}else l.show(a,b),d&&(b.addEventListener("touchend",l.hide,!1),b.addEventListener("touchcancel",l.hide,!1)),b.addEventListener("mouseup",l.hide,!1),b.addEventListener("mouseleave",l.hide,!1)}}var a=a||{},b=document.querySelectorAll.bind(document),c=Object.prototype.toString,d="ontouchstart"in window,l={duration:750,delay:200,show:function(a,b,c){if(2===a.button)return!1;b=b||this;var d=document.createElement("div");d.className="waves-wrap waves-wrapping",b.appendChild(d);var e=document.createElement("div");e.className="waves-ripple waves-rippling",d.appendChild(e);var f=j(b),g=0,h=0;"touches"in a&&a.touches.length?(g=a.touches[0].pageY-f.top,h=a.touches[0].pageX-f.left):(g=a.pageY-f.top,h=a.pageX-f.left),h=h>=0?h:0,g=g>=0?g:0;var i="scale("+b.clientWidth/100*3+")",m="translate(0,0)";c&&(m="translate("+c.x+"px, "+c.y+"px)"),e.setAttribute("data-hold",Date.now()),e.setAttribute("data-x",h),e.setAttribute("data-y",g),e.setAttribute("data-scale",i),e.setAttribute("data-translate",m);var n={top:g+"px",left:h+"px"};e.classList.add("waves-notransition"),e.setAttribute("style",k(n)),e.classList.remove("waves-notransition"),n["-webkit-transform"]=i+" "+m,n["-moz-transform"]=i+" "+m,n["-ms-transform"]=i+" "+m,n["-o-transform"]=i+" "+m,n.transform=i+" "+m,n.opacity="1";var o="mousemove"===a.type?2500:l.duration;n["-webkit-transition-duration"]=o+"ms",n["-moz-transition-duration"]=o+"ms",n["-o-transition-duration"]=o+"ms",n["transition-duration"]=o+"ms",e.setAttribute("style",k(n))},hide:function(a,b){b=b||this;for(var c=b.getElementsByClassName("waves-wrapping"),d=b.getElementsByClassName("waves-rippling"),e=0,f=d.length;f>e;e++)n(a,b,d[e],c[e])}},m={input:function(a){var b=a.parentNode;if("i"!==b.tagName.toLowerCase()||!b.classList.contains("waves-effect")){var c=document.createElement("i");c.className=a.className+" waves-input-wrapper",a.className="waves-button-input",b.replaceChild(c,a),c.appendChild(a);var d=window.getComputedStyle(a,null),e=d.color,f=d.backgroundColor;c.setAttribute("style","color:"+e+";background:"+f),a.setAttribute("style","background-color:rgba(0,0,0,0);")}},img:function(a){var b=a.parentNode;if("i"!==b.tagName.toLowerCase()||!b.classList.contains("waves-effect")){var c=document.createElement("i");b.replaceChild(c,a),c.appendChild(a)}}},o={touches:0,allowEvent:function(a){var b=!0;return/^(mousedown|mousemove)$/.test(a.type)&&o.touches&&(b=!1),b},registerEvent:function(a){var b=a.type;"touchstart"===b?o.touches+=1:/^(touchend|touchcancel)$/.test(b)&&setTimeout(function(){o.touches&&(o.touches-=1)},500)}};return a.init=function(a){var b=document.body;a=a||{},"duration"in a&&(l.duration=a.duration),"delay"in a&&(l.delay=a.delay),d&&(b.addEventListener("touchstart",q,!1),b.addEventListener("touchcancel",o.registerEvent,!1),b.addEventListener("touchend",o.registerEvent,!1)),b.addEventListener("mousedown",q,!1)},a.attach=function(a,b){a=i(a),"[object Array]"===c.call(b)&&(b=b.join(" ")),b=b?" "+b:"";for(var d,e,f=0,g=a.length;g>f;f++)d=a[f],e=d.tagName.toLowerCase(),-1!==["input","img"].indexOf(e)&&(m[e](d),d=d.parentElement),-1===d.className.indexOf("waves-effect")&&(d.className+=" waves-effect"+b)},a.ripple=function(a,b){a=i(a);var c=a.length;if(b=b||{},b.wait=b.wait||0,b.position=b.position||null,c)for(var d,e,f,g={},h=0,k={type:"mousedown",button:1},m=function(a,b){return function(){l.hide(a,b)}};c>h;h++)if(d=a[h],e=b.position||{x:d.clientWidth/2,y:d.clientHeight/2},f=j(d),g.x=f.left+e.x,g.y=f.top+e.y,k.pageX=g.x,k.pageY=g.y,l.show(k,d),b.wait>=0&&null!==b.wait){var n={type:"mouseup",button:1};setTimeout(m(n,d),b.wait)}},a.calm=function(a){a=i(a);for(var b={type:"mouseup",button:1},c=0,d=a.length;d>c;c++)l.hide(b,a[c])},a.displayEffect=function(b){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),a.init(b)},a});

// waves default
	$(function () {
		Waves.attach('.waves-attach');

		Waves.init({
			duration: 600
		});
	});
