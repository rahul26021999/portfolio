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

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

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
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};
$(document).ready(function(){
    $(document).scroll(function() {         
      scrollListner();
    });
    scrollListner();
  });
function scrollListner(){
  var scrollTop=$(document).scrollTop();
  if (scrollTop > 10) { 
    $("nav").css("background-color", "#071330");
  } else {
    $("nav").css("background-color", "transparent");
  }
  console.log(scrollTop);

  if(scrollTop >= $("#contact").offset().top){
    console.log("contact");
    $("nav li:nth-child(5) .nav-item").addClass("active");
    $("nav li:nth-child(4) .nav-item").removeClass("active");
    $("nav li:nth-child(3) .nav-item").removeClass("active");
    $("nav li:nth-child(2) .nav-item").removeClass("active");
    $("nav li:nth-child(1) .nav-item").removeClass("active");
  }
  else if(scrollTop >= $("#work").offset().top){
    console.log("work");
    $("nav li:nth-child(4) .nav-item").addClass("active");
    $("nav li:nth-child(5) .nav-item").removeClass("active");
    $("nav li:nth-child(3) .nav-item").removeClass("active");
    $("nav li:nth-child(2) .nav-item").removeClass("active");
    $("nav li:nth-child(1) .nav-item").removeClass("active");
  }
  else if(scrollTop >= $("#resume").offset().top){
    console.log("resume");
    $("nav li:nth-child(3) .nav-item").addClass("active");
    $("nav li:nth-child(4) .nav-item").removeClass("active");
    $("nav li:nth-child(5) .nav-item").removeClass("active");
    $("nav li:nth-child(2) .nav-item").removeClass("active");
    $("nav li:nth-child(1) .nav-item").removeClass("active");
  }
  else if(scrollTop >= $("#about").offset().top){
    console.log("about");
    $("nav li:nth-child(2) .nav-item").addClass("active");
    $("nav li:nth-child(4) .nav-item").removeClass("active");
    $("nav li:nth-child(3) .nav-item").removeClass("active");
    $("nav li:nth-child(5) .nav-item").removeClass("active");
    $("nav li:nth-child(1) .nav-item").removeClass("active");
  }else{
    $("nav li:nth-child(1) .nav-item").addClass("active");
    $("nav li:nth-child(4) .nav-item").removeClass("active");
    $("nav li:nth-child(3) .nav-item").removeClass("active");
    $("nav li:nth-child(2) .nav-item").removeClass("active");
    $("nav li:nth-child(5) .nav-item").removeClass("active");
  }
}
$(document).ready(function(){   
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
      }, 500, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});