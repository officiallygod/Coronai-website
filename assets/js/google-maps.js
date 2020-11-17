function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 13.1333, lng: 77.5673};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'BMSIT&M COLLEGE' // Title Location
    });
}