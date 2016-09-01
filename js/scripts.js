var map = L.map('map',{scrollWheelZoom:false}).setView([43.64701, -79.39425], 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([43.64701, -79.39425]).addTo(map);
