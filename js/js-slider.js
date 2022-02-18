
$("#primo").click(function() {
  var elmnt = document.getElementById("miodiv");
  elmnt.scrollIntoView({behavior: "smooth"});
});


const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});



    

    
