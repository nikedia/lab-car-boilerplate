
// google maps
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-12.125908,-77.0231307),
        zoom: 10,
    }

var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
}

// // bg button
// function changeTextButton() {
//     // if(min-width: 992px)
//     // if (screen.width <= 992) 
    
//     var mediaquery = window.matchMedia("(min-width: 992px)");
//     if (mediaquery.matches) {
//         document.getElementById("text-bg-button").innerHTML = "Muchas gracias!";
//     }
// }
