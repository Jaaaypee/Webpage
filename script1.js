
var request = new XMLHttpRequest();
request.open('GET', "https://zoo-animal-api.herokuapp.com/animals/rand/10");
$(document).ready(function(){
  $(window).scroll(function(){
      
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }


      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });
})

$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});

  $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){

  $('html').css("scrollBehavior", "smooth");
});
request.onload = function () {
 var response = request.response;
 var parsedData = JSON.parse(response);
 var cpe = parsedData.name;
 
 
 for (count in parsedData) {
   const para = document.createElement("div");
   para.setAttribute("id", "div" + count);

    var cpe = parsedData[count].name;
    var cpe2 = parsedData[count].image_link;
    var cpelatin = parsedData[count].latin_name;
    var animal = parsedData[count].animal_type;
    var active = parsedData[count].active_time;

    var cpe = "Name: " + cpe;
    var cpelatin = "Latin Name: " + cpelatin;
    var animal = "Animal Type: " + animal;
    var active = "Active Time: " + active;

    var cpe41 = document.createElement('p');
    var cpename = document.createElement('p');
    var cpetype = document.createElement('p');
    var time = document.createElement('p');
    var cpeimg = document.createElement('img');

    cpe41.innerHTML = cpe;
    cpename.innerHTML = cpelatin;
    cpetype.innerHTML = animal;
    time.innerHTML = active;
    cpeimg.innerHTML = cpe2;

    const t = document.createElement("table");
    var r1 = document.createElement("tr");
    var r2 = document.createElement("tr");
    r2.setAttribute("class","col-lg-8");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td2 = document.createElement("td");


    cpeimg.setAttribute('src', cpe2);
    td1.appendChild(cpe41);
    td1.appendChild(cpename);
    td1.appendChild(cpetype);
    td1.appendChild(time);
    td2.appendChild(cpeimg);
    r1.appendChild(td1);
    r2.appendChild(td2);
    t.appendChild(r1);
    t.appendChild(r2);
    para.appendChild(t);
    document.body.appendChild(para);
 }


 console.log(parsedData);
 console.log(cpe);

}
 request.send();