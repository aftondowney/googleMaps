(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

exports.initMap = function() {

var portland = {lat: 45.523452, lng: -122.676207};

var mapOptions = {
  mapTypeId: google.maps.MapTypeId.SATELLITE

};

var map = new google.maps.Map(document.getElementById('map'), {
  center: portland,
  zoom: 12
  });

    // Create an array of styles.
    var styles = [
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "weight": 0.1 },
      { "saturation": 57 },
      { "lightness": 4 },
      { "color": "#01A890" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#F93A3B" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#F93A3B" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#AA6CBA" }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#F93A3B" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "color": "#e9ef9d" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#c6c9c5" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#294D76" }
    ]
  }
];

map.setOptions({styles: styles});

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
  //   var styledMap = new google.maps.StyledMapType(styles,
  //     {name: "Styled Map"});
  //
  //   // Create a map object, and include the MapTypeId to add
  //   // to the map type control.
  //   var mapOptions = {
  //     zoom: 11,
  //     center: new google.maps.LatLng(55.6468, 37.581),
  //     mapTypeControlOptions: {
  //       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  //     }
  //   };
  //   var map = new google.maps.Map(document.getElementById('map'),
  //     mapOptions);
  //
  //   //Associate the styled map with the MapTypeId and set it to display.
  //   map.mapTypes.set('map_style', styledMap);
  //   map.setMapTypeId('map_style');
  // }

///Mount Tabor
var fact1 = '<div class="content">'+
    '<div id="fact1">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Mount Tabor</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Mount Tabor</b>, is a volcano. Well it was. Portland is just one of two cities in the US that have a dormant volcano found within city limits. While there are no current predictions of it reawakening anytime soon, residents in the area are required by the state to have additional volcano coverage included in their homeowners insurance. Just in case.</p>'+'<button class="btn btn-success answer" value="wrong">True</button><button class="btn btn-danger answer" value="correct">False</button>'+
    '</div>';

var infowindow1 = new google.maps.InfoWindow( {
  content: fact1
});

var marker1 = new google.maps.Marker( {
  position: {lat: 45.517985, lng: -122.594776},
  map: map,
  title: ""
});


///Oregon Humane Society
var fact2 = '<div class="content">'+
    '<div id="fact2">'+
    '</div>'+
    '<h1 id="firstHeading2" class="firstHeading">Oregon Humane Society</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Oregon Humane Society</b>, marks the final resting place of Bobbie the Wonder Dog. Bobbie successfully navigated his way home after getting lost in Indiana! That is a 2800 mile trip!</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+
    '</div>';

var infowindow2 = new google.maps.InfoWindow( {
  content: fact2
});

var marker2 = new google.maps.Marker( {
  position: {lat: 45.579153, lng: -122.652616},
  map: map,
  title: ""
});

///Willamette River
var fact3 = '<div class="content">'+
    '<div id="fact3">'+
    '</div>'+
    '<h1 id="firstHeading3" class="firstHeading">Willamette River</h1>'+
    '<div id="bodyContent3">'+
    '<p><b>The Willamette River</b>, was home to possibly the first river boat brothel madam, Nancy Boggs.  It was said she had easy access to the entire area along the river, with a large client base as Portland did not yet have bridges in the late 1800s. She did not pay any taxes to the city.</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong ">False</button>'+
    '</div>';

var infowindow3 = new google.maps.InfoWindow( {
  content: fact3
});

var marker3 = new google.maps.Marker( {
  position: {lat: 45.525878, lng: -122.667664},
  map: map,
  title: ""
});


///Oaks Park
var fact4 = '<div class="content">'+
    '<div id="fact4">'+
    '</div>'+
    '<h1 id="firstHeading4" class="firstHeading">Oaks Park</h1>'+
    '<div id="bodyContent4">'+
    '<p><b>Oaks Park</b>, has been the "Coney Island of the Northwest" since 1905. A well loved attraction located just south of Portland proper, it is one of the oldest amusement parks in the US. It even has a skating rink! Did you know that it is actually illegal to get married in a skating rink? <a href="HTTP://voodoodoughnut.com/voodoo-doughnut-weddings.php">Donut shop?</a> Totally fine!</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+
    '</div>';

var infowindow4 = new google.maps.InfoWindow( {
  content: fact4
});

var marker4 = new google.maps.Marker( {
  position: {lat: 45.471880, lng: -122.66162},
  map: map,
  title: ""
});

////Forest Park
var fact5 = '<div class="content">'+
    '<div id="fact5">'+
    '</div>'+
    '<h1 id="firstHeading5" class="firstHeading">Forest Park</h1>'+
    '<div id="bodyContent5">'+
    '<p><b>Forest Park</b> is the largest urban forest to be found in the United States. It is struggling with invasive ivy though. As Portland benefits from the beauty of this park, all citizens are charged with the task of removing any invasive ivy found on the trees. Park Rangers are always on hand with chalomine lotion as the invasive ivy and poison ivy look the same.</p>'+'<button class="btn btn-success answer" value="wrong">True</button><button class="btn btn-danger answer" value="correct">False</button>'+
    '</div>';

var infowindow5 = new google.maps.InfoWindow( {
  content: fact5
});

var marker5 = new google.maps.Marker( {
  position: {lat: 45.578244, lng: -122.775006},
  map: map,
  title: ""
});


////Pittock Mansion
var fact6 = '<div class="content">'+
    '<div id="fact6">'+
    '</div>'+
    '<h1 id="firstHeading6" class="firstHeading">Pittock Mansion</h1>'+
    '<div id="bodyContent6">'+
    '<p><b>Pittock Mansion</b> is a French Renaissance-style château in the West Hills of Portland. The mansion was originally built in 1909 as a private home for London-born publisher Henry Pittock and his wife, Georgiana. It is said that the Mansion is haunted by the ghosts of Henry and Georgiana. Visitors have reported hearing mutterings and complaints about the influx of Californians to the city.</p>'+'<button class="btn btn-success answer" value="wrong">True</button><button class="btn btn-danger answer" value="correct">False</button>'+
    '</div>';

var infowindow6 = new google.maps.InfoWindow( {
  content: fact6
});

var marker6 = new google.maps.Marker( {
  position: {lat: 45.525219, lng: -122.716309},
  map: map,
  title: ""
});


////Rain or Shine Coffee
var fact7 = '<div class="content">'+
    '<div id="fact7">'+
    '</div>'+
    '<h1 id="firstHeading7" class="firstHeading">Rain or Shine</h1>'+
    '<div id="bodyContent7">'+
    '<p><b>Rain or Shine</b> coffee is a cute shop neslted in SE off Division. Known for their eclectic variety of drinks, the Lavendar or Cardamom lattes are local favorites. What makes this shop unique though is that in order to qualify to be a barista, you must have at least one visible tattoo.</p>'+'<button class="btn btn-success answer" value="wrong">True</button><button class="btn btn-danger answer" value="correct">False</button>'+
    '</div>';

var infowindow7 = new google.maps.InfoWindow( {
  content: fact7
});

var marker7 = new google.maps.Marker( {
  position: {lat: 45.505491, lng: -122.601835},
  map: map,
  title: ""
});


////Collins Beach
var fact8 = '<div class="content">'+
    '<div id="fact8">'+
    '</div>'+
    '<h1 id="firstHeading8" class="firstHeading">Collins Beach</h1>'+
    '<div id="bodyContent8 response">'+
    '<p><b>Collins Beach</b> is a popular destination for Portlanders in the summer. A little over a mile long many people can be seen playing in the Columbia River, catching some sun, and sometimes they are seen wearing nothing but a pirate hat! Part of Collins Beach is one of two Clothing Optional beachs in the state.</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+
    '</div>';

var infowindow8 = new google.maps.InfoWindow( {
  content: fact8
});

var marker8 = new google.maps.Marker( {
  position: {lat: 45.788729, lng: -122.787344},
  map: map,
  title: ""
});


////Beaverton
var fact9 = '<div class="content">'+
    '<div id="fact9">'+
    '</div>'+
    '<h1 id="firstHeading9" class="firstHeading">Beaverton</h1>'+
    '<div id="bodyContent9">'+
    '<p><b>Beaverton</b> got its name from the large population of beavers in the area. Nike currently employs them for their new Nike+ FuelBand for pets.</p>'+'<button class="btn btn-success answer">True</button><button class="btn btn-danger answer">False</button>'+ '<div class="response">' + '<p></p>' + '</div>' +
    '</div>';

var infowindow9 = new google.maps.InfoWindow( {
  content: fact9
});

var marker9 = new google.maps.Marker( {
  position: {lat: 45.497113, lng: -122.845688},
  map: map,
  title: ""
});

////Lebanon
var fact10 = '<div class="content">'+
    '<div id="fact10">'+
    '</div>'+
    '<h1 id="firstHeading10" class="firstHeading">Lebanon</h1>'+
    '<div id="bodyContent10">'+
    '<p><b>Lebanon</b> can be found south east of Salem. It is home to the world headquarters of <a href="http://entek.com/">ENTEK</a>, and the College of Osteopathic Medicine of the Pacific, Northwest. Interestingly enough, it\'s actually pronounced leb-i-nin. Take that Aloha!</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+ '<div class="response">' + '<p></p>' + '</div>' +
    '</div>';

var infowindow10 = new google.maps.InfoWindow( {
  content: fact10
});

var marker10 = new google.maps.Marker( {
  position: {lat: 44.536512, lng: -122.907034},
  map: map,
  title: ""
});

////Government Island
var fact11 = '<div class="content">'+
    '<div id="fact11">'+
    '</div>'+
    '<h1 id="firstHeading11" class="firstHeading">Government Island</h1>'+
    '<div id="bodyContent11">'+
    '<p><b>Government Island</b> is just about smack dab in the middle of the Columbia River! It is only accessible by boat, or canoe, or kayak, or one very determined person on a inner tube. The military appropriated the island in 1850 and named it. Not sure why it isn\'t Military Island or something, but oh well. Lewis and Clark visited the island in 1805. They decided not to stay.</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+ '<div class="response">' + '<p></p>' + '</div>' +
    '</div>';

var infowindow11 = new google.maps.InfoWindow( {
  content: fact11
});

var marker11 = new google.maps.Marker( {
  position: {lat: 45.578514, lng: -122.5120755},
  map: map,
  title: ""
});
//////////END OF MARKER CODE/////////


/////Listeners//////
///Mount Tabor
marker1.addListener('click', function() {
  infowindow1.open(map, marker1);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it! Mount Tabor is a dormant volcano but to our knowledge no additional homeowners insurance is required.");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Oregon Humane Society
marker2.addListener('click', function() {
  infowindow2.open(map, marker2);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Willamette River
marker3.addListener('click', function() {
  infowindow3.open(map, marker3);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Oaks Park
marker4.addListener('click', function() {
  infowindow4.open(map, marker4);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Forest Park
marker5.addListener('click', function() {
  infowindow5.open(map, marker5);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

/////Pittock Mansion
marker6.addListener('click', function() {
  infowindow6.open(map, marker6);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Rain or Shine Cafe
marker7.addListener('click', function() {
  infowindow7.open(map, marker7);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Collins Beach
marker8.addListener('click', function() {
  infowindow8.open(map, marker8);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it! And that one part is totally true. I definitely saw a man wearing nothing but a pirate hat once.");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});


/////Beaverton
marker9.addListener('click', function() {
  infowindow9.open(map, marker9);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

/////Lebanon
marker10.addListener('click', function() {
  infowindow10.open(map, marker10);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Government Island
marker11.addListener('click', function() {
  infowindow11.open(map, marker11);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});


};

},{}],2:[function(require,module,exports){
var callMap = require("./../js/map.js").initMap;

$( document ).ready(function() {
  google.maps.event.addDomListener(window, 'load', callMap);

});


exports.initMap = function() {

var portland = {lat: 45.523452, lng: -122.676207};

var mapOptions = {
  mapTypeId: google.maps.MapTypeId.SATELLITE

};

var map = new google.maps.Map(document.getElementById('map'), {
  center: portland,
  zoom: 12
  });

    // Create an array of styles.
    var styles = [
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "weight": 0.1 },
      { "saturation": 57 },
      { "lightness": 4 },
      { "color": "#01A890" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#F93A3B" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#F93A3B" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#AA6CBA" }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#F93A3B" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "color": "#e9ef9d" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#c6c9c5" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#294D76" }
    ]
  }
];

map.setOptions({styles: styles});

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
  //   var styledMap = new google.maps.StyledMapType(styles,
  //     {name: "Styled Map"});
  //
  //   // Create a map object, and include the MapTypeId to add
  //   // to the map type control.
  //   var mapOptions = {
  //     zoom: 11,
  //     center: new google.maps.LatLng(55.6468, 37.581),
  //     mapTypeControlOptions: {
  //       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  //     }
  //   };
  //   var map = new google.maps.Map(document.getElementById('map'),
  //     mapOptions);
  //
  //   //Associate the styled map with the MapTypeId and set it to display.
  //   map.mapTypes.set('map_style', styledMap);
  //   map.setMapTypeId('map_style');
  // }

///Mount Tabor
var fact1 = '<div class="content">'+
    '<div id="fact1">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Mount Tabor</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Mount Tabor</b>, is a volcano. Well it was. Portland is just one of two cities in the US that have a dormant volcano found within city limits. While there are no current predictions of it reawakening anytime soon, residents in the area are required by the state to have additional volcano coverage included in their homeowners insurance. Just in case.</p>'+'<button class="btn btn-success answer" value="wrong">True</button><button class="btn btn-danger answer" value="correct">False</button>'+
    '</div>';

var infowindow1 = new google.maps.InfoWindow( {
  content: fact1
});

var marker1 = new google.maps.Marker( {
  position: {lat: 45.517985, lng: -122.594776},
  map: map,
  title: ""
});


///Oregon Humane Society
var fact2 = '<div class="content">'+
    '<div id="fact2">'+
    '</div>'+
    '<h1 id="firstHeading2" class="firstHeading">Oregon Humane Society</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Oregon Humane Society</b>, marks the final resting place of Bobbie the Wonder Dog. Bobbie successfully navigated his way home after getting lost in Indiana! That is a 2800 mile trip!</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+
    '</div>';

var infowindow2 = new google.maps.InfoWindow( {
  content: fact2
});

var marker2 = new google.maps.Marker( {
  position: {lat: 45.579153, lng: -122.652616},
  map: map,
  title: ""
});

///Willamette River
var fact3 = '<div class="content">'+
    '<div id="fact3">'+
    '</div>'+
    '<h1 id="firstHeading3" class="firstHeading">Willamette River</h1>'+
    '<div id="bodyContent3">'+
    '<p><b>The Willamette River</b>, was home to possibly the first river boat brothel madam, Nancy Boggs.  It was said she had easy access to the entire area along the river, with a large client base as Portland did not yet have bridges in the late 1800s. She did not pay any taxes to the city.</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong ">False</button>'+
    '</div>';

var infowindow3 = new google.maps.InfoWindow( {
  content: fact3
});

var marker3 = new google.maps.Marker( {
  position: {lat: 45.525878, lng: -122.667664},
  map: map,
  title: ""
});


///Oaks Park
var fact4 = '<div class="content">'+
    '<div id="fact4">'+
    '</div>'+
    '<h1 id="firstHeading4" class="firstHeading">Oaks Park</h1>'+
    '<div id="bodyContent4">'+
    '<p><b>Oaks Park</b>, has been the "Coney Island of the Northwest" since 1905. A well loved attraction located just south of Portland proper, it is one of the oldest amusement parks in the US. It even has a skating rink! Did you know that it is actually illegal to get married in a skating rink? <a href="HTTP://voodoodoughnut.com/voodoo-doughnut-weddings.php">Donut shop?</a> Totally fine!</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+
    '</div>';

var infowindow4 = new google.maps.InfoWindow( {
  content: fact4
});

var marker4 = new google.maps.Marker( {
  position: {lat: 45.471880, lng: -122.66162},
  map: map,
  title: ""
});

////Forest Park
var fact5 = '<div class="content">'+
    '<div id="fact5">'+
    '</div>'+
    '<h1 id="firstHeading5" class="firstHeading">Forest Park</h1>'+
    '<div id="bodyContent5">'+
    '<p><b>Forest Park</b> is the largest urban forest to be found in the United States. It is struggling with invasive ivy though. As Portland benefits from the beauty of this park, all citizens are charged with the task of removing any invasive ivy found on the trees. Park Rangers are always on hand with chalomine lotion as the invasive ivy and poison ivy look the same.</p>'+'<button class="btn btn-success answer" value="wrong">True</button><button class="btn btn-danger answer" value="correct">False</button>'+
    '</div>';

var infowindow5 = new google.maps.InfoWindow( {
  content: fact5
});

var marker5 = new google.maps.Marker( {
  position: {lat: 45.578244, lng: -122.775006},
  map: map,
  title: ""
});


////Pittock Mansion
var fact6 = '<div class="content">'+
    '<div id="fact6">'+
    '</div>'+
    '<h1 id="firstHeading6" class="firstHeading">Pittock Mansion</h1>'+
    '<div id="bodyContent6">'+
    '<p><b>Pittock Mansion</b> is a French Renaissance-style château in the West Hills of Portland. The mansion was originally built in 1909 as a private home for London-born publisher Henry Pittock and his wife, Georgiana. It is said that the Mansion is haunted by the ghosts of Henry and Georgiana. Visitors have reported hearing mutterings and complaints about the influx of Californians to the city.</p>'+'<button class="btn btn-success answer" value="wrong">True</button><button class="btn btn-danger answer" value="correct">False</button>'+
    '</div>';

var infowindow6 = new google.maps.InfoWindow( {
  content: fact6
});

var marker6 = new google.maps.Marker( {
  position: {lat: 45.525219, lng: -122.716309},
  map: map,
  title: ""
});


////Rain or Shine Coffee
var fact7 = '<div class="content">'+
    '<div id="fact7">'+
    '</div>'+
    '<h1 id="firstHeading7" class="firstHeading">Rain or Shine</h1>'+
    '<div id="bodyContent7">'+
    '<p><b>Rain or Shine</b> coffee is a cute shop neslted in SE off Division. Known for their eclectic variety of drinks, the Lavendar or Cardamom lattes are local favorites. What makes this shop unique though is that in order to qualify to be a barista, you must have at least one visible tattoo.</p>'+'<button class="btn btn-success answer" value="wrong">True</button><button class="btn btn-danger answer" value="correct">False</button>'+
    '</div>';

var infowindow7 = new google.maps.InfoWindow( {
  content: fact7
});

var marker7 = new google.maps.Marker( {
  position: {lat: 45.505491, lng: -122.601835},
  map: map,
  title: ""
});


////Collins Beach
var fact8 = '<div class="content">'+
    '<div id="fact8">'+
    '</div>'+
    '<h1 id="firstHeading8" class="firstHeading">Collins Beach</h1>'+
    '<div id="bodyContent8 response">'+
    '<p><b>Collins Beach</b> is a popular destination for Portlanders in the summer. A little over a mile long many people can be seen playing in the Columbia River, catching some sun, and sometimes they are seen wearing nothing but a pirate hat! Part of Collins Beach is one of two Clothing Optional beachs in the state.</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+
    '</div>';

var infowindow8 = new google.maps.InfoWindow( {
  content: fact8
});

var marker8 = new google.maps.Marker( {
  position: {lat: 45.788729, lng: -122.787344},
  map: map,
  title: ""
});


////Beaverton
var fact9 = '<div class="content">'+
    '<div id="fact9">'+
    '</div>'+
    '<h1 id="firstHeading9" class="firstHeading">Beaverton</h1>'+
    '<div id="bodyContent9">'+
    '<p><b>Beaverton</b> got its name from the large population of beavers in the area. Nike currently employs them for their new Nike+ FuelBand for pets.</p>'+'<button class="btn btn-success answer">True</button><button class="btn btn-danger answer">False</button>'+ '<div class="response">' + '<p></p>' + '</div>' +
    '</div>';

var infowindow9 = new google.maps.InfoWindow( {
  content: fact9
});

var marker9 = new google.maps.Marker( {
  position: {lat: 45.497113, lng: -122.845688},
  map: map,
  title: ""
});

////Lebanon
var fact10 = '<div class="content">'+
    '<div id="fact10">'+
    '</div>'+
    '<h1 id="firstHeading10" class="firstHeading">Lebanon</h1>'+
    '<div id="bodyContent10">'+
    '<p><b>Lebanon</b> can be found south east of Salem. It is home to the world headquarters of <a href="http://entek.com/">ENTEK</a>, and the College of Osteopathic Medicine of the Pacific, Northwest. Interestingly enough, it\'s actually pronounced leb-i-nin. Take that Aloha!</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+ '<div class="response">' + '<p></p>' + '</div>' +
    '</div>';

var infowindow10 = new google.maps.InfoWindow( {
  content: fact10
});

var marker10 = new google.maps.Marker( {
  position: {lat: 44.536512, lng: -122.907034},
  map: map,
  title: ""
});

////Government Island
var fact11 = '<div class="content">'+
    '<div id="fact11">'+
    '</div>'+
    '<h1 id="firstHeading11" class="firstHeading">Government Island</h1>'+
    '<div id="bodyContent11">'+
    '<p><b>Government Island</b> is just about smack dab in the middle of the Columbia River! It is only accessible by boat, or canoe, or kayak, or one very determined person on a inner tube. The military appropriated the island in 1850 and named it. Not sure why it isn\'t Military Island or something, but oh well. Lewis and Clark visited the island in 1805. They decided not to stay.</p>'+'<button class="btn btn-success answer" value="correct">True</button><button class="btn btn-danger answer" value="wrong">False</button>'+ '<div class="response">' + '<p></p>' + '</div>' +
    '</div>';

var infowindow11 = new google.maps.InfoWindow( {
  content: fact11
});

var marker11 = new google.maps.Marker( {
  position: {lat: 45.578514, lng: -122.5120755},
  map: map,
  title: ""
});
//////////END OF MARKER CODE/////////


/////Listeners//////
///Mount Tabor
marker1.addListener('click', function() {
  infowindow1.open(map, marker1);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it! Mount Tabor is a dormant volcano but to our knowledge no additional homeowners insurance is required.");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Oregon Humane Society
marker2.addListener('click', function() {
  infowindow2.open(map, marker2);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Willamette River
marker3.addListener('click', function() {
  infowindow3.open(map, marker3);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Oaks Park
marker4.addListener('click', function() {
  infowindow4.open(map, marker4);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Forest Park
marker5.addListener('click', function() {
  infowindow5.open(map, marker5);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

/////Pittock Mansion
marker6.addListener('click', function() {
  infowindow6.open(map, marker6);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Rain or Shine Cafe
marker7.addListener('click', function() {
  infowindow7.open(map, marker7);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Collins Beach
marker8.addListener('click', function() {
  infowindow8.open(map, marker8);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it! And that one part is totally true. I definitely saw a man wearing nothing but a pirate hat once.");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});


/////Beaverton
marker9.addListener('click', function() {
  infowindow9.open(map, marker9);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

/////Lebanon
marker10.addListener('click', function() {
  infowindow10.open(map, marker10);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});

////Government Island
marker11.addListener('click', function() {
  infowindow11.open(map, marker11);
  $('.answer').click(function(currentButton){
    var answer = currentButton.currentTarget.value;
      if (answer == 'correct'){
        alert("You got it!");
      } else {
        alert("Wah wah. Try again.");
      }
  });
});


};

},{"./../js/map.js":1}]},{},[2]);
