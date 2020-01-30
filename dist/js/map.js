function initMap() {
  var lawOffice = { lat: 36.128852, lng: -86.802428 };
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: lawOffice});
  var marker = new google.maps.Marker({ position: lawOffice, map: map });
}