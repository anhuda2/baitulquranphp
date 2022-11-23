/*!
 * WPMU DEV Forminator UI
 * Copyright 2019 Incsub (https://incsub.com)
 * Licensed under GPL v3 (http://www.gnu.org/licenses/gpl-3.0.html)
 */
function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.inputStates=function(o){var e=t(o),i=e.closest("form");if(e.is("input")||i.is(".forminator-poll")&&(i.is(".forminator-ui")||i.is(".forminator-custom-form")))return e.each(function(){var o,e;o=t(this),e=o.closest(".forminator-field"),o.mouseover(function(t){e.addClass("forminator-is_hover"),t.stopPropagation()}).mouseout(function(t){e.removeClass("forminator-is_hover"),t.stopPropagation()}),function(o){var e=t(o),i=e.closest(".forminator-field");e.focus(function(t){i.addClass("forminator-is_active"),t.stopPropagation()}).blur(function(t){i.removeClass("forminator-is_active"),t.stopPropagation()})}(this),function(o){var e=t(o),i=e.closest(".forminator-field");""!==e.val().trim()&&i.addClass("forminator-is_filled"),e.on("change",function(){""!==e.val().trim()?i.addClass("forminator-is_filled"):i.removeClass("forminator-is_filled")})}(this)}),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.inputMaterial=function(o){var e=t(o),i=e.closest(".forminator-field"),n=i.find(".forminator-label"),r=e.closest("form");if(e.is("input")||r.is(".forminator-poll")&&(r.is(".forminator-ui")||r.is(".forminator-custom-form")))return e.parent().hasClass("forminator-input--wrap")||e.wrap('<div class="forminator-input--wrap"></div>'),n.length&&(n.addClass("forminator-floating--input"),i.find(".forminator-input-with-icon").length&&n.addClass("forminator-has_icon"),i.find(".forminator-input-with-phone").length&&(n.addClass("forminator-has_phone"),i.find(".intl-tel-input").hasClass("allow-dropdown")&&n.addClass("allow-dropdown"))),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.textareaStates=function(o){var e=t(o),i=e.closest("form");if(e.is("textarea")||i.is(".forminator-ui")||i.is(".forminator-custom-form"))return e.each(function(){var o,e;o=t(this),e=o.closest(".forminator-field"),o.mouseover(function(t){e.addClass("forminator-is_hover"),t.stopPropagation()}).mouseout(function(t){e.removeClass("forminator-is_hover"),t.stopPropagation()}),function(o){var e=t(o),i=e.closest(".forminator-field");e.focus(function(t){i.addClass("forminator-is_active"),t.stopPropagation()}).blur(function(t){i.removeClass("forminator-is_active"),t.stopPropagation()})}(this),function(o){var e=t(o),i=e.closest(".forminator-field");e.on("load",function(){""!==e.val().trim()&&i.addClass("forminator-is_filled")}),e.on("change",function(){""!==e.val().trim()?i.addClass("forminator-is_filled"):i.removeClass("forminator-is_filled")})}(this)}),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.textareaMaterial=function(o){var e=t(o),i=e.closest(".forminator-field"),n=i.find(".forminator-label"),r=e.closest("form");if((e.is("textarea")||r.is(".forminator-ui")||r.is(".forminator-custom-form"))&&!e.hasClass("wp-editor-area")&&!e.parent().hasClass("forminator-textarea--wrap"))return function(){if(e.parent().hasClass("forminator-textarea--wrap")||e.wrap('<div class="forminator-textarea--wrap"></div>'),n.length){var t=n.height()+9;n.addClass("forminator-floating--textarea"),i.css({position:"relative"}),i.hasClass("forminator-is_filled")&&i.hasClass("forminator-is_active")||n.css({"padding-top":t+"px"}),e.css({"padding-top":t+"px"})}}(),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.radioStates=function(o){var e=t(o),i=e.find("input");if(e.is("label")&&"radio"===i.attr("type"))return i.each(function(){t(this).on("click",function(){var o=t(this),e=o.parent(),i=e.closest(".forminator-field").find(".forminator-radio");i.find("input").removeAttr("checked"),i.removeClass("forminator-is_checked"),o.attr("checked","checked"),e.addClass("forminator-is_checked")})}),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.checkboxStates=function(o){var e=t(o),i=e.find("input");if(e.is("label")&&"checkbox"===i.attr("type"))return i.each(function(){t(this).on("click",function(){var o=t(this).parent();o.is(".forminator-is_checked")?o.removeClass("forminator-is_checked"):o.addClass("forminator-is_checked")})}),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.multiSelectStates=function(o){var e=t(o),i=e.find(".forminator-option"),n=i.find("input");if(e.is(".forminator-multiselect")&&0!==i.length)return n.each(function(){t(this).on("click",function(){var o=t(this).parent();o.is(".forminator-is_checked")?o.removeClass("forminator-is_checked"):o.addClass("forminator-is_checked")})}),this}}(jQuery),function(t){FUI.select=function(o){var e,i,n,r,a,s,c,l=t(o);function f(){var o=l.children();s.empty(),o.each(function(){var o,e=t(this);"OPTION"===t(this).prop("tagName")&&((o=t("<li></li>").appendTo(s)).html(e.text()),o.data("value",e.val()),e.val()==l.val()&&h(o,!0))})}function d(){var t=l[0].$value;void 0!==t&&t.match("^https?://|#")&&(window.location.href=t)}function u(){e.find("select").is(":disabled")||(e.hasClass("forminator-is_open")?p():m())}function p(t){t||(t=e),t.removeClass("forminator-is_open"),l.closest(".forminator-field").removeClass("forminator-is_active")}function m(){t(".forminator-select-container.forminator-is_open").each(function(){p(t(this))}),e.addClass("forminator-is_open"),l.closest(".forminator-field").addClass("forminator-is_active")}function h(o,e){e=void 0!==e&&e,a.text(o.text()),t(".current",s).removeClass("current"),o.addClass("current"),p(),l.val(o.data("value")),e||l.trigger("change")}return l.wrap('<div class="forminator-select-container">'),l.addClass("forminator-screen-reader-only"),l.is("select")&&(e=l.parent(),n=t('<div class="forminator-select-list" aria-hidden="true"></div>').appendTo(e),r=t('<div class="forminator-value-wrapper"></div>').appendTo(n),a=t('<div class="forminator-value"></div>').appendTo(r),i=t('<div class="forminator-dropdown-handle"><span class="forminator-icon-chevron-down"></span></div>').appendTo(r),s=t('<ul class="forminator-dropdown-list"></ul>').appendTo(n)),f(),l.on("fui:change",function(){f(),s.find("li").not(".optgroup-label").on("click",function(o){h(t(o.target),!1),d()})}),s.find("li").on("click",function(o){var e=t(o.target);l.valid(),h(e,!1),d(),l.valid()}),i.on("click",u),a.on("click",u),l.on("focus",m),e.mouseover(function(t){e.closest(".forminator-field").addClass("forminator-is_hover"),t.stopPropagation()}).mouseout(function(t){e.closest(".forminator-field").removeClass("forminator-is_hover"),t.stopPropagation()}),t(document).click(function(o){t(o.target).closest(".forminator-select-container").length||p()}),""!==(c=l.attr("id"))&&t('label[for="'+c+'"]').on("click",m),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.select2=function(){t(".forminator-custom-form").each(function(){var o=t(this),e=o.data("form-id"),i=o.find(".forminator-select2");t.each(["bold","flat","default","material","none"],function(t,n){var r,a="en",s=null;o.hasClass("forminator-design--"+n)&&i.length&&(r=!0===i.data("rtl-support")?"rtl":"ltr",s=""!==i.data("placeholder")?i.data("placeholder"):null,a=""!==i.data("language")?i.data("language"):"en",i.FUIselect2({dir:r,language:a,placeholder:s,dropdownCssClass:"forminator-custom-form-"+e+" forminator-dropdown--"+n}).on("select2:opening",function(){i.data("select2").$dropdown.find(":input.select2-search__field").attr("placeholder",s)}))})})},t("body").ready(function(){FUI.select2()})}(jQuery),function(){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={});var t=t||{};t.KeyCode={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},t.Utils=t.Utils||{},t.Utils.remove=function(t){return t.remove&&"function"==typeof t.remove?t.remove():!(!t.parentNode||!t.parentNode.removeChild||"function"!=typeof t.parentNode.removeChild)&&t.parentNode.removeChild(t)},t.Utils.isFocusable=function(t){if(0<t.tabIndex||0===t.tabIndex&&null!==t.getAttribute("tabIndex"))return!0;if(t.disabled)return!1;switch(t.nodeName){case"A":return!!t.href&&"ignore"!=t.rel;case"INPUT":return"hidden"!=t.type&&"file"!=t.type;case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},t.Utils.simulateClick=function(t){var o=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(o)},t.Utils.IgnoreUtilFocusChanges=!1,t.Utils.dialogOpenClass="forminator-authentication-enabled",t.Utils.focusFirstDescendant=function(o){for(var e=0;e<o.childNodes.length;e++){var i=o.childNodes[e];if(t.Utils.attemptFocus(i)||t.Utils.focusFirstDescendant(i))return!0}return!1},t.Utils.focusLastDescendant=function(o){for(var e=o.childNodes.length-1;0<=e;e--){var i=o.childNodes[e];if(t.Utils.attemptFocus(i)||t.Utils.focusLastDescendant(i))return!0}return!1},t.Utils.attemptFocus=function(o){if(!t.Utils.isFocusable(o))return!1;t.Utils.IgnoreUtilFocusChanges=!0;try{o.focus()}catch(t){}return t.Utils.IgnoreUtilFocusChanges=!1,document.activeElement===o},t.OpenDialogList=t.OpenDialogList||new Array(0),t.getCurrentDialog=function(){if(t.OpenDialogList&&t.OpenDialogList.length)return t.OpenDialogList[t.OpenDialogList.length-1]},t.closeCurrentDialog=function(){var o=t.getCurrentDialog();return!!o&&(o.close(),!0)},t.handleEscape=function(o){(o.which||o.keyCode)===t.Utils.ESC&&t.closeCurrentDialog()&&o.stopPropagation()},document.addEventListener("keyup",t.handleEscape),t.Authentication=function(o,e,i){if(this.dialogNode=document.getElementById(o),null===this.dialogNode)throw new Error('No element found with id="'+o+'".');var n=["dialog","alertdialog"];if(!(this.dialogNode.getAttribute("role")||"").trim().split(/\s+/g).some(function(t){return n.some(function(o){return t===o})}))throw new Error("Dialog() requires a DOM element with ARIA role of dialog or alertdialog.");if(this.dialogNode.parentNode.classList.contains("forminator-authentication")?this.backdropNode=this.dialogNode.parentNode:(this.backdropNode=document.createElement("div"),this.backdropNode.className="forminator-authentication",this.backdropNode.setAttribute("data-markup","new"),this.dialogNode.parentNode.insertBefore(this.backdropNode,this.dialogNodev),this.backdropNode.appendChild(this.dialogNode)),this.backdropNode.classList.add("forminator-active"),document.body.parentNode.classList.add(t.Utils.dialogOpenClass),"string"==typeof e)this.focusAfterClosed=document.getElementById(e);else{if("object"!==_typeof(e))throw new Error("the focusAfterClosed parameter is required for the aria.Authentication constructor.");this.focusAfterClosed=e}"string"==typeof i?this.focusFirst=document.getElementById(i):"object"===_typeof(i)?this.focusFirst=i:this.focusFirst=null;var r=document.createElement("div");this.preNode=this.dialogNode.parentNode.insertBefore(r,this.dialogNode),this.preNode.tabIndex=0;var a=document.createElement("div");this.postNode=this.dialogNode.parentNode.insertBefore(a,this.dialogNode.nextSibling),this.postNode.tabIndex=0,0<t.OpenDialogList.length&&t.getCurrentDialog().removeListeners(),this.addListeners(),t.OpenDialogList.push(this),this.dialogNode.classList.add("forminator-authentication-fade-in"),this.dialogNode.classList.remove("forminator-authentication-fade-out"),this.focusFirst?this.focusFirst.focus():t.Utils.focusFirstDescendant(this.dialogNode),this.lastFocus=document.activeElement},t.Authentication.prototype.close=function(){var o=this;t.OpenDialogList.pop(),this.removeListeners(),this.preNode.parentNode.removeChild(this.preNode),this.postNode.parentNode.removeChild(this.postNode),this.dialogNode.classList.add("forminator-content-fade-out"),this.dialogNode.classList.remove("forminator-content-fade-in"),this.focusAfterClosed.focus(),setTimeout(function(){o.backdropNode.classList.remove("forminator-active")},300),0<t.OpenDialogList.length?t.getCurrentDialog().addListeners():document.body.parentNode.classList.remove(t.Utils.dialogOpenClass)},t.Authentication.prototype.addListeners=function(){document.addEventListener("focus",this.trapFocus,!0)},t.Authentication.prototype.removeListeners=function(){document.removeEventListener("focus",this.trapFocus,!0)},t.Authentication.prototype.trapFocus=function(o){if(!t.Utils.IgnoreUtilFocusChanges){var e=t.getCurrentDialog();e.dialogNode.contains(o.target)?e.lastFocus=o.target:(t.Utils.focusFirstDescendant(e.dialogNode),e.lastFocus==document.activeElement&&t.Utils.focusLastDescendant(e.dialogNode),e.lastFocus=document.activeElement)}},FUI.openAuthentication=function(o,e,i){new t.Authentication(o,e,i)},FUI.closeAuthentication=function(){t.getCurrentDialog().close()}}();