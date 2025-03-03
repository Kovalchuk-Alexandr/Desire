
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        // 37.797822, -122.422611
        center: { lat: 37.797822, lng: -122.422611 },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER,
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
        fullscreenControl: true,
    });
}

export default initMap;
// window.initMap = initMap;
