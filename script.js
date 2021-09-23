var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};
$(document).ready(function() {
    $(document).scroll(function() {
        scrollListner();
    });
    scrollListner();
});

function scrollListner() {
    if ($(window).width() < 481) {
        return;
    }
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 20 && scrollTop < $("#about").offset().top - 50) {
        $("nav").css("display", "none");
    } else {
        $("nav").css("display", "block");
    }

    if (scrollTop < 20) {
        $("nav a").css("color", "white");
        $("nav a").css("border-color", "white");
        $("nav").css("background-color", "transparent");;
    } else if ((scrollTop + 50 > $("#about").offset().top &&
            scrollTop + 50 < $("#skills").offset().top) ||
        (scrollTop + 50 > $("#education").offset().top &&
            scrollTop + 50 < $("#experience").offset().top) ||
        (scrollTop + 50 > $("#contact").offset().top)
    ) {
        $("nav").css("background-color", "white");
        $("nav a").css("color", "black");
        $("nav a").css("border-color", "black");
    } else {
        $("nav a").css("color", "white");
        $("nav a").css("border-color", "white");
        $("nav").css("background-color", "#050A30");
    }
    $('#navbar').children('li').each(function() {
        $(this).children(":first").removeClass("active");
    });

    if (scrollTop >= $("#contact").offset().top) {
        $("nav li:nth-child(6) .nav-item").addClass("active");
    } else if (scrollTop >= $("#experience").offset().top) {
        $("nav li:nth-child(5) .nav-item").addClass("active");
    } else if (scrollTop >= $("#education").offset().top) {
        $("nav li:nth-child(4) .nav-item").addClass("active");
    } else if (scrollTop >= $("#skills").offset().top) {
        $("nav li:nth-child(3) .nav-item").addClass("active");
    } else if (scrollTop >= $("#about").offset().top) {
        $("nav li:nth-child(2) .nav-item").addClass("active");
    } else {
        $("nav li:nth-child(1) .nav-item").addClass("active");
    }
}
$(document).ready(function() {

    console.log($("#work-container").height());
    $('canvas').height($("#work-container").height());
    $(".canvas-parent").height($("#work-container").height());

    $("nav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});