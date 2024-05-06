var map = L.map('map').setView([52.5101, 13.3690], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([52.51904, 13.40120]).addTo(map);
var marker2 = L.marker([52.5055, 13.4403]).addTo(map);
var marker3 = L.marker([52.51627, 13.37770]).addTo(map);
var marker4 = L.marker([52.50760, 13.38584]).addTo(map);
var marker5 = L.marker([52.52303, 13.39981]).addTo(map);
var marker6 = L.marker([52.54689, 13.51648]).addTo(map);
var marker7 = L.marker([52.54461, 13.51877]).addTo(map);
var marker8 = L.marker([52.50876, 13.37659]).addTo(map);
var marker9 = L.marker([52.49664, 13.44635]).addTo(map);
var marker10 = L.marker([52.49837, 13.44097]).addTo(map);
var marker11 = L.marker([52.50112, 13.44246]).addTo(map);
var marker12 = L.marker([52.49993, 13.44123]).addTo(map);
var marker13 = L.marker([52.49808, 13.44355]).addTo(map);
var marker14 = L.marker([52.52352, 13.40293]).addTo(map);
var marker15 = L.marker([52.51835, 13.38873]).addTo(map);
var marker16 = L.marker([52.51860, 13.37610]).addTo(map);
var marker17 = L.marker([52.51377, 13.37883]).addTo(map);
var marker18 = L.marker([52.50180, 13.44576]).addTo(map);
var marker19 = L.marker([52.50792, 13.37762]).addTo(map);
var marker20 = L.marker([52.49636, 13.39609]).addTo(map);
var marker21 = L.marker([52.518121, 13.391529]).addTo(map);


var circle1 = L.circle([52.497779, 13.411474], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 700
}).addTo(map);

var circle2 = L.circle([52.492606, 13.460655], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 700
}).addTo(map);

var circle3 = L.circle([52.517892, 13.404071], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 700
}).addTo(map);

var circle4 = L.circle([52.48116, 13.435271], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 700
}).addTo(map);
52.48116, 13.435271



var polygon1 = L.polygon([
    [52.52348, 13.41242],
    [52.52256, 13.41101],
    [52.52032, 13.41404],
    [52.52193, 13.41629]
]).addTo(map);

var polygon2 = L.polygon([
    [52.50599, 13.37425],
    [52.50717, 13.37294],
    [52.50766, 13.37307],
    [52.50882, 13.37561]
]).addTo(map);

var polygon3 = L.polygon([
    [52.51119, 13.38342],
    [52.51073, 13.37897],
    [52.50982, 13.37967],
    [52.51009, 13.38402]
]).addTo(map);

var polygon4 = L.polygon([
    [52.51272, 13.37614],
    [52.51745, 13.37650],
    [52.51688, 13.35504],
    [52.51954, 13.35033],
    [52.51963, 13.34808],
    [52.51263, 13.33600],
    [52.50999, 13.35712]
]).addTo(map);

marker1.bindPopup("<b>Berlin Cathedral</b><br>Cathedral").openPopup();
marker2.bindPopup("<b>East Side Gallery</b><br>Monument").openPopup();
marker3.bindPopup("<b>Brandenburg Gate</b><br>Monument").openPopup();
marker4.bindPopup("<b>Berlin Loves You</b><br>Souvenir Store").openPopup();
marker5.bindPopup("<b>Cafe Neundrei</b><br>Cafe").openPopup();
marker6.bindPopup("<b>Indian SuperMarket</b><br>Supermarket").openPopup();
marker7.bindPopup("<b>PICKNWEIGHT</b><br>Thrifting Warehouse").openPopup();
marker8.bindPopup("<b>Wiener Feinbäcker Heberer</b><br>Bakery").openPopup();
marker9.bindPopup("<b>Taborkirche</b><br>Church").openPopup();
marker10.bindPopup("<b>St. Marien Liebfrauen</b><br>Congregration").openPopup();
marker11.bindPopup("<b>Burgermeister</b><br>Hamburger Restaurant").openPopup();
marker12.bindPopup("<b>Passenger Espresso</b><br>Coffee Shop").openPopup();
marker13.bindPopup("<b>Cuong's Creative Market</b><br>Art Shop").openPopup();
marker14.bindPopup("<b>Muji</b><br>Convenience Store").openPopup();
marker15.bindPopup("<b>Dussmann das KulturKaufhaus</b><br>Bookstore").openPopup();
marker16.bindPopup("<b>Reichstag Building</b><br>Government Office").openPopup();
marker17.bindPopup("<b>Memorial to the Murdered Jews of Europe</b><br>Memorial").openPopup();
marker18.bindPopup("<b>Oberbaumbrücke</b><br>Oberbaum Bridge").openPopup();
marker19.bindPopup("<b>Berlin Souvenirs x Kiosk</b><br>Souvenir Store").openPopup();
marker20.bindPopup("<b>Heilig Kreuz-Kirche</b><br>Church").openPopup();
marker21.bindPopup("<b>Staatsbibliotek zu Berlin</b><br>Library").openPopup();

polygon1.bindPopup("Alexanderplatz");
polygon2.bindPopup("Potsdamer Platz");
polygon3.bindPopup("Mall of Berlin");
polygon4.bindPopup("Tiergarten");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);