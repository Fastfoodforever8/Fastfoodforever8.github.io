function scroll_main() {
    element = document.getElementById("scroll_main")
    element.scrollIntoView({behavior: "smooth"});
                /* x = document.getElementById("scroll_main");
                h= x.clientHeight;
                self.scrollTo(0,h);*/
  }

  function scroll_duty() {
    element = document.getElementById("scroll_duty")
    element.scrollIntoView({behavior: "smooth"});
  }

  function scroll_contact() {
    element = document.getElementById("scroll_contact")
    element.scrollIntoView({behavior: "smooth"});
  }

/*
document.getElementById("scroll-duty").addEventListener("mouseover", mouseOver);

function mouseOver(){
    document.getElementById("duty-1").style = "cursor = pointer";
}*/

    let slide1 = document.getElementById("duty-1");

    slide1.addEventListener("mouseover", function( event ) {
        if(window.matchMedia("(max-width: 700px)").matches == false){
    document.getElementById("PZ-slide").style = "margin-left: 0%";}})

    slide1.addEventListener("mouseout", function( event ) {
        if(window.matchMedia("(max-width: 700px)").matches == false){
    document.getElementById("PZ-slide").style = "margin-left: 200%";}})

    let slide2 = document.getElementById("duty-2");

    slide2.addEventListener("mouseover", function( event ) {
        if(window.matchMedia("(max-width: 700px)").matches == false){
    document.getElementById("IZ-slide").style = "margin-left: 0%";}})
    
    slide2.addEventListener("mouseout", function( event ) {
        if(window.matchMedia("(max-width: 700px)").matches == false){
    document.getElementById("IZ-slide").style = "margin-left: 200%";}})

    let slide3 = document.getElementById("duty-3");

    slide3.addEventListener("mouseover", function( event ) {
        if(window.matchMedia("(max-width: 700px)").matches == false){
    document.getElementById("AZ-slide").style = "margin-left: 0%";}})
        
    slide3.addEventListener("mouseout", function( event ) {
        if(window.matchMedia("(max-width: 700px)").matches == false){
    document.getElementById("AZ-slide").style = "margin-left: 200%";}})

    let slide4 = document.getElementById("duty-4");

    slide4.addEventListener("mouseover", function( event ) {
        if(window.matchMedia("(max-width: 700px)").matches == false){
    document.getElementById("SZ-slide").style = "margin-left: 0%";}})
            
    slide4.addEventListener("mouseout", function( event ) {
        if(window.matchMedia("(max-width: 700px)").matches == false){
    document.getElementById("SZ-slide").style = "margin-left: 200%";}})


// Vytvořit místo 4 boxů 1 box a slideshow na boční šipky
filter_id = 1
function filter_up(){
    if(filter_id < 4){
    document.getElementById(filter_id).style.display = "none";
    filter_id = filter_id + 1;
    document.getElementById(filter_id).style.display = "block";
    }
    else{
        document.getElementById(filter_id).style.display = "none";
        filter_id = 1;
        document.getElementById(filter_id).style.display = "block";
    }
}

function filter_down(){
    if(filter_id > 1){
    document.getElementById(filter_id).style.display = "none";
    filter_id = filter_id - 1;
    document.getElementById(filter_id).style.display = "block";
    }
    else{
        document.getElementById(filter_id).style.display = "none";
        filter_id = 4;
        document.getElementById(filter_id).style.display = "block";
    }
}