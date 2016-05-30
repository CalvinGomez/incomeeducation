var mymap = L.map('mapid', { zoomControl: false }).setView([32.7157, -117.1611], 10);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'aprathna.078og2ep',
    accessToken: 'pk.eyJ1IjoiYXByYXRobmEiLCJhIjoiY2lva3R0dTBkMDAzYXU2bTA3bXVjdXpvZSJ9.vnChROM_wM-N55VCqPJRTg'
}).addTo(mymap);

		var carslbadMarker = L.marker([33.1581, -117.3506]).on('click', altOnClick).addTo(mymap);
		carslbadMarker.bindPopup("Carlsbad").openPopup();

		var laJollaMarker = L.marker([32.8328, -117.2713]).on('click', altOnClick).addTo(mymap);		
		laJollaMarker.bindPopup("La Jolla").openPopup();

        new L.Control.Zoom({ position: 'bottomleft' }).addTo(mymap);

        function markerOnClick(e)
        {
          alert("hi. you clicked the marker at " + e.latlng);
        }
        function altOnClick(e)
        {
            document.getElementById('testText').style = 'position:fixed;z-index:1000;display:inline';
        }