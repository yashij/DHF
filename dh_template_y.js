//add your token here
mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaGlqYWluIiwiYSI6ImNqZ2MzYXR0YzFqdHkyd3MwaDZwaGZhb2oifQ.6BdCpy4E2rbrmccctqjs8w';
var chapters = {
    'part-1': {
        center: [76.544,22.658],
        zoom: 4.2,
        bearing: 0,
        pitch: 0,
    },
    'part-2': {
        center: [77.174,28.615],
        zoom:10.8,
        bearing: 0,
        pitch: 0,
    },
    'part-3': {
        center: [77.174,28.615],
        zoom: 10.8,
        bearing: 0,
        pitch: 0,
      },
    'part-4': {
        center: [73.190,30.409],
        zoom: 5.4,
        bearing: 0,
        pitch: 0,
    },
    'part-5': {
        center: [73.190,30.409],
        zoom: 5.4,
        bearing: 0,
        pitch: 0,
    },
     'part-6': {
         center: [77.174,28.615],
         zoom: 10.8,
         bearing: 30,
         pitch: 0,
     },
     'part-7': {
         center: [77.100,28.643],
         zoom: 10,
         bearing: 0.26,
         pitch: 0,
     },
     'part-8': {
         center: [77.100,28.643],
         zoom: 10,
         bearing: 0.26,
         pitch: 0,
     }
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/yashijain/cjg21x08t16n92rrmqf7vhfzc', // change this to your style
        center: [76.544,22.658],
        zoom: 4.2,
        bearing: 0, //direction
        pitch: 0, // angle
    });

    var slider1 = document.getElementById('slider1');
    var sliderValue = document.getElementById('slider-value');


//TOGGLE BOXES, LEGEND, INFOBOX, POPUP BOX, CODE START -----------------------------------------------
//This will launch the code for the INFOBOX and the LEGEND once the map is done loading

    map.on('load', function() {

      map.addSource('seenplaces', {
          type: 'vector',
          url: 'MAPBOX_SpecificPlaceSeenTotal-d5kmgn' // edit to tileset id
      });
      map.addSource('seen_total', {
          type: 'vector',
          url: 'MAPBOX_PlaceSeenOutDelhiTotal-0mxdjv'
      });
      map.addLayer({
        id: 'seen_total',
        type: 'circle',
        source: 'seen_total',
        paint: {
          'circle-radius': 5,
          'circle-color': '#2DC4B2',
          'circle-opacity': 0.8
        },'source-layer':'Mapbox_SeenTotal-3xxp5c',
        'filter': ['==', ['number', ['get', 'NarYear']], 1990]
    });
//add the 1st toggle here
var toggleableLayerIds1 = ['Places Seen In Delhi'];
var link = document.createElement('a');
link.href = '#';
//link.className = 'active';
link.textContent = "Places Seen In Delhi";
link.onclick = function (e) {
for(var index in toggleableLayerIds1) {
  var clickedLayer = toggleableLayerIds1[index];
  e.preventDefault();
  e.stopPropagation();
  var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
  if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      }
    }
  };
  var layers = document.getElementById('menu');
  layers.appendChild(link);
//second toggle
var toggleableLayerIds2 = ['Convex Hull- FEMALE', 'Convex Hull- MALE'];
var link = document.createElement('a');
link.href = '#';
//link.className = 'active';
link.textContent = "Area Spanned";
link.onclick = function (e) {
for(var index in toggleableLayerIds2) {
  var clickedLayer = toggleableLayerIds2[index];
  e.preventDefault();
  e.stopPropagation();
  var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
  if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      }
    }
  };
  var layers = document.getElementById('menu');
  layers.appendChild(link);





      var toggleableLayerIds = ['Places Seen Outside Delhi', 'Places Mentioned Outside Delhi', 'Places Mentioned In Delhi'];

      for (var i = 0; i < toggleableLayerIds.length; i++) {
          var id = toggleableLayerIds[i];

          var link = document.createElement('a');
          link.href = '#';
          //link.className = 'active';
          link.textContent = id;

          link.onclick = function (e) {
              var clickedLayer = this.textContent;
              e.preventDefault();
              e.stopPropagation();

              var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

              if (visibility === 'visible') {
                  map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                  this.className = '';
              } else {
                  this.className = 'active';
                  map.setLayoutProperty(clickedLayer, 'visibility', 'visible');

              }
          };

          var layers = document.getElementById('menu');
          layers.appendChild(link);
      };

//START LEGEND CODE ===========================================================

//LEGEND TEXT
//the var layers array sets the text that will show up in the legend.
//you can enter any value here it is just text. Make sure that the Legend
//values correspond to the ones you set in Mapbox.
  var layers = ['Female', 'Male'];

//LEGEND COLORS
//Set the corresponding LEGEND colors using HEX the easiest way to do this is by
//setting your mapcolors in Mapbox using ColorBrewer (colorbrewer2.org). Then
//copy the exact same hex value to the array below. Remember that each label
//above should correspond to a color. If the number of items in layers does not
//match the number of values in colors you will get an error.


  var colors = ['hsl(116, 77%, 47%)', 'hsl(278, 42%, 51%)'];

//YOU DO NOT NEED TO CHANGE ANY OF THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }
//LEGEND CODE FINISHED======================================================
//---------------------------------------------------------------------------

//POPUP CODE BEGIN========================================================
//CONTEXT
//The code below creates a pop-up box when you float over an area of the mapbox
//because the popup box is pretty limited it will just contain text, but cannot
//be formatted in any special way. The popup box is good if you only want to show
//one or two data points. If you don't plan on using it comment everything out.


// var popup = new mapboxgl.Popup({
//        closeButton: false,
//        closeOnClick: false,
//
//    });
//
// //CHANGE -------------------------------------------------------------
//
// map.on('mouseenter', 'Places seen outside Delhi', function (e) { //REPLACE 'mapbox-specificplaceseentotal-d5kmgn copy' with the name of your layer.
//       map.getCanvas().style.cursor = 'pointer';
//
// //MAKE CUSTOMIZATION
//       var name = '<br><strong>Name: </strong>' + e.features[0].properties.Name + '</br>';
//       var story ='<br><strong>StoryName: </strong>' + e.features[0].properties.StoryName + '</br>';
//
//       var descriptionarray = [name, story];
//       var description= descriptionarray.join("");
//
//         popup.setLngLat(e.lngLat)
//             .setHTML(description)
//             .addTo(map);
//     });
//     map.on('mouseleave', 'mapbox-specificplaceseentotal-d5kmgn copy', function() { //REPLACE 'mapbox-specificplaceseentotal-d5kmgn copy' with the name of your layer.
//         map.getCanvas().style.cursor = '';
//         popup.remove();
//     });
//POPUP CODE END ============================================================




//START INFOBOX CODE =======================================================

//CONTEXT----------------------------------------------------------------
//The infobox is "triggered" by the mousemove function. That is, when your mouse
//moves over a certain area the function activates. It then pulls information
//from the layer in order to display it.
//The two things you will set here are the layer you are pulling information
//and the information you are going to display.

map.on('mousemove', function(e) {

//CONTEXT-------------------------------------------------
// This makes a temporary version of the layer from which we will pull data based
//on the area the mouse cursor is pointing over (e.point). So if we are hovering
//over CP it will pull up the information on CP. In order, to be able to do this
//the computer needs to know where to find this information.
//In this case, the layer is mapbox-specificplaceseentotal-d5kmgn copy. Just so the script grabs the most
//up to date layer please publish your project.
//Now go to mapbox figure out what layer you want info for and copy the name exactly
//and replace mapbox-specificplaceseentotal-d5kmgn copy.

//MAKE CHANGE-----------------------------------------------------------------
  var info = map.queryRenderedFeatures(e.point, {
   layers: ['Places Seen In Delhi', 'Places Seen Outside Delhi', 'Places Mentioned In Delhi', 'Places Mentioned Outside Delhi'] //REPLACE mapbox-specificplaceseentotal-d5kmgn copy with the Name
                                  //of your layer
    });

//CONTEXT -----------------------------------------------------------------
//The code below looks a bit overwhelming! Essentially, what we will be doing
//is telling the computer what information about what features we want to display.
//The code below produces the name of the location, the name of the story, the Quote
// and the page number.
//Since, these values are going to change depending on where I scroll I want to
//get these pieces of information based on variables and not absolute values.
//I do this by looking at the Info variable I greated earlier. Since, this variable
//contains all the values of the area my mouse is currently over, I can display whatever
//values I want: Name, NarYear, BirCntry, etc. I access these values by saying
//info[0].properties.NarYear. That is, give me the current value of the NarYear column.
//Whatever attributes are part of the layer can be accessed. So, info[0].properities.Note
//is an option if you really want to display that. So really, the only thing you
//are changing here is the value after the properities. to match with what you want to show.
//You'll also notice that there are pieces in double quotes like "Name: ".
//This is constant and Name: will always show on a scroll over. You'll note that
//this text is connected with the variable info[0].properties.Name through a
//plus sign ( + ). If computers want to add text together they need to concatenate.
//If I write "Programming " + "is " + "fun.", the output will be Programming is fun.
//Thus if you want to change the labels of the text before the variable this is
//what you change.



//MAKE CHANGE---------------------------------------------------------------
    if (info.length > 0) {
      document.getElementById('pd').innerHTML = '<h5>' + "Name: " + info[0].properties.Name + '</h5> <h5>' + "Narrative Year: " + info[0].properties.NarYear + '</h5> <h5>' + "Quote: "+ info[0].properties.Quote + '</h5>';
      //Depending on what you want to show you can add more variable and more text
      //The stub above generates the StoryName, The quote, and the page number in parenthesis.
      //in order to use it delete the following text after </h5> (';//)
    } else {
    document.getElementById('pd').innerHTML = '<p>Hover over a circle to see the names of the location, the narrative year, and the quote associated with it.</p>';
    }


  });


    slider1.addEventListener('input', function(e) {
            // Adjust the layers opacity. layer here is arbitrary - this could
            // be another layer name found in your style or a custom layer
            // added on the fly using `addSource`.
            map.setPaintProperty('mapbox-specificplaceseentotal-d5kmgn copy', 'fill-opacity', parseInt(e.target.value, 10) / 100);

            // Value indicator
            sliderValue.textContent = e.target.value + '%';
        });

});
//TIME SLIDER
document.getElementById('slider2').addEventListener('input', function(e) {
var hour = parseInt(e.target.value);
// update the map
map.setFilter('Places Seen In Delhi', ['<=', ['number', ['get', 'NarYear']], hour]);
// converting 0-23 hour to AMPM format
//var ampm = hour >= 12 ? 'PM' : 'AM';
var hour12 = hour

// update text in the UI
document.getElementById('active-hour').innerText = hour12 //+ ampm;
});
}

//SLIDESHOW CODE DO NOT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
