var mymap = L.map('mapid', { zoomControl: false }).setView([32.9000, -116.8000], 10);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'aprathna.078og2ep',
    accessToken: 'pk.eyJ1IjoiYXByYXRobmEiLCJhIjoiY2lva3R0dTBkMDAzYXU2bTA3bXVjdXpvZSJ9.vnChROM_wM-N55VCqPJRTg'
}).addTo(mymap);

<<<<<<< HEAD
		var carslbadMarker = L.marker([33.1581, -117.3506]).on('click', altOnClick).bindLabel('Carlsbad', { noHide: true }).addTo(mymap);

		var laJollaMarker = L.marker([32.8328, -117.2713]).on('click', altOnClick).bindLabel('La Jolla', { noHide: true }).addTo(mymap);

        var ramonaMarker = L.marker([33.0414, -116.8793]).on('click', altOnClick).bindLabel('Ramona', { noHide: true }).addTo(mymap);

        var sanDieguitoMarker = L.marker([32.9990, -117.2338]).on('click', altOnClick).bindLabel('San Dieguito', { noHide: true }).addTo(mymap);

        var sanMarcosMarker = L.marker([33.1434, -117.1661]).on('click', altOnClick).bindLabel('San Marcos', { noHide: true }).addTo(mymap);

        var santeeMarker = L.marker([32.8384, -116.9739]).on('click', altOnClick).bindLabel('Santee', { noHide: true }).addTo(mymap);

        var southBayMarker = L.marker([32.5549, -117.044306]).on('click', altOnClick).bindLabel('South Bay', { noHide: true }).addTo(mymap);

        var southEasternSanDiegoMarker = L.marker([32.7004, -117.1432]).on('click', altOnClick).bindLabel('South Eastern San Diego', { noHide: true }).addTo(mymap);

        var springValleyMarker = L.marker([32.444, -116.5853]).on('click', altOnClick).bindLabel('Spring Valley', { noHide: true }).addTo(mymap);

        var sweetwaterMarker = L.marker([32.4149, -116.5914]).on('click', altOnClick).bindLabel('Sweetwater', { noHide: true }).addTo(mymap);

        var universityCityMarker = L.marker([33.87, -117.21]).on('click', altOnClick).bindLabel('University City', { noHide: true }).addTo(mymap);

        var valleyCenterMarker = L.marker([33.1426, -117.051]).on('click', altOnClick).bindLabel('Valley Center', { noHide: true }).addTo(mymap);

        var vistaMarker = L.marker([33.1137, -117.1428]).on('click', altOnClick).bindLabel('Vista', { noHide: true }).addTo(mymap);
=======
        var alpineMarker = L.marker([32.8351, -116.7664]).on('click', altOnClick).bindLabel('Alpine', { noHide: true }).addTo(mymap);

        var anzaBorregoMarker = L.marker([33.1005, -116.3013]).on('click', altOnClick).bindLabel('Anza-Borrego', { noHide: true }).addTo(mymap);        

        var carslbadMarker = L.marker([33.1581, -117.3506]).on('click', altOnClick).bindLabel('Carlsbad', { noHide: true }).addTo(mymap);

        var centralSDMarker = L.marker([32.7206, -117.1544]).on('click', altOnClick).bindLabel('Central San Diego', { noHide: true }).addTo(mymap);

        var chulaVistaMarker = L.marker([32.6401, -117.0842]).on('click', altOnClick).bindLabel('Chula Vista', { noHide: true }).addTo(mymap);

        var coronadoMarker = L.marker([32.6859, -117.1831]).on('click', altOnClick).bindLabel('Coronado', { noHide: true }).addTo(mymap);

        var delMarMarker = L.marker([32.9595, -117.2653]).on('click', altOnClick).bindLabel('Del Mar-Mira Mesa', { noHide: true }).addTo(mymap);        

		var elCajonMarker = L.marker([32.7948, -116.9625]).on('click', altOnClick).bindLabel('El Cajon', { noHide: true }).addTo(mymap);

        var elliottNavajoMarker = L.marker([32.7915, -117.0758]).on('click', altOnClick).bindLabel('Elliott-Navajo', { noHide: true }).addTo(mymap);

        var escondidoMarker = L.marker([33.1192, -117.0864]).on('click', altOnClick).bindLabel('Escondido', { noHide: true }).addTo(mymap);

        var fallbrookMarker = L.marker([33.3768, -117.2511]).on('click', altOnClick).bindLabel('Fallbrook', { noHide: true }).addTo(mymap);        

        var harbisonCrestMarker = L.marker([32.8203, -116.8300]).on('click', altOnClick).bindLabel('Harbison-Crest', { noHide: true }).addTo(mymap);
>>>>>>> 27ae1d3b23efeed2eeaecac0b61b8a5a2ce3e6e7

        new L.Control.Zoom({ position: 'bottomleft' }).addTo(mymap);

        function markerOnClick(e)
        {
          alert("hi. you clicked the marker at " + e.latlng);
        }
        function altOnClick(e)
        {
            document.getElementById('testText').style = 'position:fixed;z-index:1000;display:inline';
        }