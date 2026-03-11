jQuery(window).scroll(function () {
    var n = jQuery(window).scrollTop();
    n >= 150 ? jQuery("body").addClass("sticky") : jQuery("body").removeClass("sticky")
});
jQuery(document).ready(function () {
    $(".menuIcn").click(function () {
        $("body").addClass("openmenu")
    });
    $(".cossIcnInr, .overlay,.closeIcn > span").click(function () {
        $("body").removeClass("openmenu")
    });
    jQuery(".parent > .arrowbtn").click(function () {
        jQuery(this).parent(".parent").siblings().removeClass("active");
        jQuery(this).parent(".parent").toggleClass("active");
        jQuery(this).parent(".parent").siblings().children(".submenu").slideUp();
        jQuery(this).parent(".parent").children(".submenu").slideToggle()
    })
    jQuery(".parent > .menuItemTitle > .arrowbtn").click(function () {
        jQuery(this).parent().parent(".parent").siblings().removeClass("active");
        jQuery(this).parent().parent(".parent").toggleClass("active");
        jQuery(this).parent().parent(".parent").siblings().children(".submenu").slideUp();
        jQuery(this).parent().parent(".parent").children(".submenu").slideToggle()
    })
    jQuery('.parent > .menuHeader').click(function () {
        jQuery(this).parent('.parent').siblings().removeClass('active');
        jQuery(this).parent('.parent').toggleClass('active');
        jQuery(this).parent('.parent').siblings().children('.submenu').slideUp();
        jQuery(this).parent('.parent').children('.submenu').slideToggle();
    });
});

