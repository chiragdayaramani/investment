jQuery(document).ready(function(){

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = jQuery(document.body).height();
var content = jQuery("div[id$='content_margin']");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = content.height() + differ;
jQuery("div[id$='content_margin']").css({"min-height":content_height+"px"});
}

/* Slideshow Function Call */

if(jQuery('#ttr_slideshow_inner').length){
jQuery('#ttr_slideshow_inner').TTSlider({
stopTransition:false ,
slideShowSpeed:4000, begintime:3000,cssPrefix: 'ttr_'
});
}
/* Animation Function Call */
jQuery().TTAnimation({cssPrefix: 'ttr_'});

/*************** Hamburgermenu slideleft script ***************/
jQuery('button#nav-expander').on('click',function(e){
e.preventDefault();
jQuery('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
jQuery('ul.ttr_menu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
if(jQuery(this).parent().hasClass('show')){
location.assign(jQuery(this).attr('href'));
}
} else {
if(window_width > 991 && jQuery(this).attr('href')){
window.location.href = jQuery(this).attr('href'); 
}
else{
if(jQuery(this).parent().hasClass('show')){
location.assign(jQuery(this).attr('href'));
}
}
}
});

/*************** Sidebarmenu click script ***************/
jQuery('ul.ttr_vmenu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 991 && jQuery(this).attr('href')){
window.location.href = jQuery(this).attr('href'); 
}
else{
if(jQuery(this).parent().hasClass('show')){
location.assign(jQuery(this).attr('href'));
}
}
});

/*************** Tab menu click script ***************/
jQuery('.ttr_menu_items ul.dropdown-menu [data-toggle=dropdown], .ttr_menu_items_parent_link_arrow ').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 992){
event.preventDefault();
event.stopPropagation();
jQuery(this).parent().siblings().removeClass('show');
jQuery(this).parent().toggleClass(function() {
if (jQuery(this).is(".show") && jQuery(this).children(" .ttr_menu_items_parent_link_arrow").attr('href') !== undefined ) {
window.location.href = jQuery(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "show";
}
});
}
});

/*************** Tab-Sidebarmenu script ***************/
jQuery('.ttr_vmenu_items ul.dropdown-menu [data-toggle=dropdown], .ttr_vmenu_items_parent_link_arrow ').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 992){
event.preventDefault();
event.stopPropagation();
jQuery(this).parent().siblings().removeClass('show');
jQuery(this).parent().toggleClass(function() {
if (jQuery(this).is(".show") && jQuery(this).children(" .ttr_vmenu_items_parent_link_arrow").attr('href') !== undefined ) {
window.location.href = jQuery(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "show";
}
});
}
});

/*************** Google-Webfont script ***************/
WebFontConfig = {
google: { families: [ 'Montserrat:700','Rubik','Montserrat','Work+Sans','Work+Sans:700','Montserrat:500','Work+Sans:600','Poppins:600','Poppins:500','Montserrat:600'] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();

/*************** Joomla motools display script ***************/
if(window.MooTools) {
window.addEvent('domready', function() {
Element.implement({
hide: function() {
this.setStyle('display','');
}
});
});
}
jQuery('.ttr_verticalmenu_content ul li #dropdown-menu li a').click(function(e){
if (jQuery(this).attr('class') != 'active'){
jQuery('.ttr_verticalmenu_content ul li a').removeClass('active');
jQuery(this).addClass('active');
}
});
jQuery('.ttr_verticalmenu_content ul li #dropdown-menu li a').filter(function(){
return this.href === document.location.href;
}).addClass('active')
jQuery('#dropdown-menu > li > a').each(function () {
var currentURL = document.location.href;
var thisURL = jQuery(this).attr('href');
if (currentURL.indexOf(thisURL) != -1) {
jQuery(this).parents('#dropdown-menu').css('display', 'block');
}
});
/*************** Html video script ***************/
var objects = ['iframe[src*="youtube.com"]','iframe[src*="youtu.be"]','iframe[src*="youtube-nocookie.com"]', 'object'];
for(var i = 0 ; i < objects.length ; i++){
if (jQuery(objects[i]).length > 0) {
jQuery(objects[i]).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
jQuery(objects[i]).addClass('embed-responsive-item');
}
}
/*************** Extra js for Bootstrap4 ***************/
jQuery('.jmoddiv').unbind('mouseenter').unbind('mouseleave');
var e = 200,
o = 100,
i = function(i, n) {
var d, a, l, r, s, p, u, m, c, h, f, v, j, b, g;
return v = function(t) {
return u < t.top && s < t.left && p > t.left + e && r > t.top + o
}, d = jQuery(n), b = jQuery.extend({}, d.offset(), {
width: n.offsetWidth,
height: n.offsetHeight
}), u = jQuery(document).scrollTop(), s = jQuery(document).scrollLeft(), p = s + jQuery(window).width(), r = u + jQuery(window).height(), m = {
top: b.top - o,
left: b.left + b.width / 2 - e / 2
}, c = {
top: b.top + b.height,
left: b.left + b.width / 2 - e / 2
}, h = {
top: b.top + b.height / 2 - o / 2,
left: b.left - e
}, f = {
top: b.top + b.height / 2 - o / 2,
left: b.left + b.width
}, a = v(m), l = v(c), j = v(h), g = v(f), a ? "top" : l ? "bottom" : j ? "left" : "right"
};
jQuery('.jmoddiv').on({
mouseenter: function() {
var e =jQuery(this).data('jmodediturl'),
o =jQuery(this).data('jmodtip'),
n =jQuery(this).data('target');
jQuery('body>.btn.jmodedit').clearQueue().tooltip('dispose').remove(),
jQuery(this).addClass('jmodinside').prepend('<a class="btn jmodedit" href="#" target="' + n + '"><span class="icon-edit"></span></a>').children(':first').attr('href', e).attr('title', o).tooltip({
container: !1,
html: !0,
placement: i
}).jEditMakeAbsolute(!0),
jQuery('.btn.jmodedit').on({
mouseenter: function() {
jQuery(this).clearQueue()
},
mouseleave: function() {
jQuery(this).delay(500).queue(function(e) {
jQuery(this).tooltip('dispose').remove(), e()
})
}
})
},
mouseleave: function() {
jQuery('body>.btn.jmodedit').delay(500).queue(function(e) {
jQuery(this).tooltip('dispose').remove(), e()
})
}
});


jQuery('#jform_consentbox-lbl').on('click', function() {
jQuery('#modal-jform_consentbox').attr('style', 'left: 50%; top: 5% ; bottom:10%; overflow: hidden auto;; width: 80% ; margin-left: -40%; position: fixed; background-color: #fff;');
});


jQuery('#modal-jform_consentbox .modal-header button.close').on('click', function() {
jQuery('body').removeClass('modal-open');
jQuery('.fade').attr('style', 'display: none');
jQuery('#modal-jform_consentbox').attr('style', 'display: none ');
});
});
