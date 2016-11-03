"use strict";

//Outside of document ready function because content should be loaded asap.
function includeElements() {
    var include = $(".include");
    for (var i = 0; i < include.length; i++) {
        var element = include.eq(i);
        element.load(element.attr("data-src"));
    }
}
includeElements();


$(document).ready(function() {

    //Cashing repeatedly used variables
    var $window = $(window);
    var $document = $(document);
    var $content = $("#content");
    var $nav = $("#navigation");
    var navTopOffset = $nav.offset().top;

    function init() {
        $document.on("scroll", scroll);
        $(".link").on("click", scrollTo);
        $window.on("resize", refresh);

        initslideshow();
    }

    function scroll() {
        if (navTopOffset <= $window.scrollTop() && !$content.hasClass("nav-fix")) {
            $content.addClass("nav-fix");
        }
        if (navTopOffset > $window.scrollTop() && $content.hasClass("nav-fix")) {
            $content.removeClass("nav-fix");
        }
    }

    function scrollTo(e) {
        var href = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, "slow");
        e.preventDefault();
    }

    function refresh() {
        //reload all cashed properties
        $window = $(window);
        $document = $(document);
        $content = $("#content");
        $nav = $("#navigation");
        navTopOffset = $nav.offset().top;
    }

    init();
});
