"use strict";

function initslideshow() {
    slideshow.construct();
}
var slideshow = {
    construct: function() {
        this.lastImageNr = 1;
        this.timer = 0;
        this.$imagenav = $(".imagenav");
        this.$images = $(".image");
        //create image navigation
        for (var i = 0; i < this.$images.length; i++) {
            this.$imagenav.append('<a href="#" class="bullet" data-image="' + i + '"></a>');
            this.$imagenav.children().last().click(this.menuClick);
        }
        this.bullets = this.$imagenav.children();
        this.bullets.first().trigger("click");
    },
    menuClick: function(e) {
        e.preventDefault();
        var element = $(this);
        var imageNr = element.attr("data-image")
        if (imageNr != slideshow.lastImageNr) {
            $(slideshow.bullets).eq(slideshow.lastImageNr).removeClass("activbullet")
            element.addClass("activbullet");
            $(slideshow.$images).eq(slideshow.lastImageNr).removeClass("show");
            $(slideshow.$images).eq(imageNr).addClass("show");
            slideshow.lastImageNr = imageNr;
        }
        slideshow.startTimer();
    },
    startTimer: function() {
        window.clearTimeout(slideshow.timer);
        slideshow.timer = window.setTimeout(slideshow.nextImage, 3000);
    },
    nextImage: function() {
        var next = +slideshow.lastImageNr + 1;
        var bullets = $(slideshow.bullets);
        if (bullets.length <= next) {
            next = 0;
        }
        bullets.eq(next).trigger("click");
    }
};
