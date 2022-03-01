
$("#btn-primo").click(function() {
  var elmnt = document.getElementById("target-primo");
  elmnt.scrollIntoView({behavior: "smooth"});
});

$("#btn-secondo").click(function() {
  var elmnt = document.getElementById("target-secondo");
  elmnt.scrollIntoView({behavior: "smooth"});
});

$("#btn-terzo").click(function() {
  var elmnt = document.getElementById("target-terzo");
  elmnt.scrollIntoView({behavior: "smooth"});
});

$("#btn-quarto").click(function() {
  var elmnt = document.getElementById("target-quarto");
  elmnt.scrollIntoView({behavior: "smooth"});
});


const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});


var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#list-example'
})