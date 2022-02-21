$(".reviews__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    centerMode: true,
    variableWidth: true,
    nextArrow: '<button type="button" class="slick-next"><img src="icons/reviews/next.png" alt="next"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/reviews/prev.png" alt="prev"></button>',
    cssEase: 'linear',
});
// let latitude = 55.747998323956125,
//     longitude = 37.62720854063828,
//     map_zoom = 18;

// let markerUrl = 'images/icon-location.png';

// let mainColor = "#b0d7ff",
//     saturationValue = -1,
//     brightnexxValue = 1;


// let mapOptions = {
//     center: new google.maps.LatLng(latitude, longitude),
//     zoom: map_zoom,
//     panControl: false,
//     zoomControl: false,
//     mapTypeControl: false,
//     streetViewControl: false,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     scrollwheel: false
// };

// let map = new google.maps.Map(document.getElementById("google-container"), map-options);

// let marker = new google.maps.marker({
//     position: new google.maps.LatLng(latitude, longitude),
//     map: map,
//     visible: true,
//     icon: markerUrl,
// });