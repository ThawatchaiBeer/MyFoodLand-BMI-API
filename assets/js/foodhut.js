
// Smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// Map
new WOW().init();

function initMap() {
    var uluru = {lat: 13.69434, lng: 100.6434292};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }

    // BMI 
 window.onload = () => {
    let button = document.querySelector("#btn");
    
    button.addEventListener("click", calculateBMI);
    };
    

    function calculateBMI() {
    

    let height = parseInt(document
            .querySelector("#height").value);
    
   
    let weight = parseInt(document
            .querySelector("#weight").value);
    
    let result = document.querySelector("#result");
    
 
    if (height === "" || isNaN(height)) 
        result.innerHTML = "กรุณากรอกส่วนสูง";
    
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "กรุณากรอกน้ำหนัก";
    
    else {
    
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
    
        if (bmi < 18.6) result.innerHTML =
            `น้ำหนักน้อยกว่ามาตรฐาน : <span>${bmi}</span>`;
    
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `ปกติ: <span>${bmi}</span>`;
    
        else result.innerHTML =
            `ควรควบคุมการกินอาหาร : <span>${bmi}</span>`;
    }
    }
   
    