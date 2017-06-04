$(document).ready(function(){
    $(".header-item").click(function(){
        var item = $(this).find(" span").text()
        var index = $(this).index() + 1;
        console.log("clicked ",item);
        $('.header-item').removeClass('selected');
        $(this).addClass("selected");
        console.log($('.right-section section:nth-child('+index+')'));
        $('.right-section section').removeClass('active-section');
        $('.right-section section:nth-child('+index+')').addClass('active-section');
    }); 
    console.log("dom ready");
    // createMap();
});

function createMap(){
    var cords = {lat: 23.061847, lng: 72.526301};
    var map = new google.maps.Map(document.getElementsByClassName("map")[0],{
        zoom: 15,
        center: cords
    });

    var marker = new google.maps.Marker({
        position: cords,
        map: map
    });
}
