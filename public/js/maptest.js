var mymap = L.map('mapid', { zoomControl: false }).setView([32.9000, -116.8000], 10);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'aprathna.078og2ep',
    accessToken: 'pk.eyJ1IjoiYXByYXRobmEiLCJhIjoiY2lva3R0dTBkMDAzYXU2bTA3bXVjdXpvZSJ9.vnChROM_wM-N55VCqPJRTg'
}).addTo(mymap);


		var carlsbadMarker = L.marker([33.1581, -117.3506]).on('click', altOnClick).bindLabel('Carlsbad', { noHide: true }).addTo(mymap);
		

		var laJollaMarker = L.marker([32.8328, -117.2713]).on('click', altOnClick).bindLabel('La Jolla', { noHide: true }).addTo(mymap);		
		

        var jamulMarker = L.marker([32.7170, -116.8761]).on('click', altOnClick).bindLabel('Jamul', { noHide: true }).addTo(mymap);        
        

        var kearnyMesaMarker = L.marker([32.8284, -117.1441]).on('click', altOnClick).bindLabel('Kearny Mesa', { noHide: true }).addTo(mymap);        
        

        var laMesalMarker = L.marker([32.7678, -117.0231]).on('click', altOnClick).bindLabel('La Mesa', { noHide: true }).addTo(mymap);        
        

        var lagunaPineValleyMarker = L.marker([32.8949, -116.5609]).on('click', altOnClick).bindLabel('Laguna-Pine Valley', { noHide: true }).addTo(mymap);        
        

        var lakesideMarker = L.marker([32.8573, -116.9222]).on('click', altOnClick).bindLabel('Lakeside', { noHide: true }).addTo(mymap);        
        

        var lemonGroveMarker = L.marker([32.7426, -117.0314]).on('click', altOnClick).bindLabel('Lemon Grove', { noHide: true }).addTo(mymap);        
        

        var miramarMarker = L.marker([32.8746, -117.1399]).on('click', altOnClick).bindLabel('Miramar', { noHide: true }).addTo(mymap);        
        

        var mountainEmpireMarker = L.marker([32.6983, -116.4330]).on('click', altOnClick).bindLabel('Mountain Empire', { noHide: true }).addTo(mymap);        
        

        var nationalCityMarker = L.marker([32.6781, -117.0992]).on('click', altOnClick).bindLabel('National City', { noHide: true }).addTo(mymap);


        var oceansideMarker = L.marker([33.1959, -117.3795]).on('click', altOnClick).bindLabel('Oceanside', { noHide: true }).addTo(mymap);


        var palomarJulianMarker = L.marker([33.14, -116.72]).on('click', altOnClick).bindLabel('Palomar-Julian', { noHide: true }).addTo(mymap);


        var paumaMarker = L.marker([33.3034, -116.9814]).on('click', altOnClick).bindLabel('Pauma', { noHide: true }).addTo(mymap);


        var pendletonMarker = L.marker([33.3178, -117.3205]).on('click', altOnClick).bindLabel('Pendleton', { noHide: true }).addTo(mymap);


        var northCountyMarker = L.marker([33.248, -117.179]).on('click', altOnClick).bindLabel('North San Diego', { noHide: true }).addTo(mymap);


        var peninsulaMarker = L.marker([32.4012, -117.1431]).on('click', altOnClick).bindLabel('Peninsula', { noHide: true }).addTo(mymap);


        var powayMarker = L.marker([32.9628, -117.0359]).on('click', altOnClick).bindLabel('Poway', { noHide: true }).addTo(mymap);

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


        new L.Control.Zoom({ position: 'bottomleft' }).addTo(mymap);

        function markerOnClick(e)
        {
          alert("hi. you clicked the marker at " + e.latlng);
        }
        function altOnClick(e)
        {
            document.getElementById('testText').style = 'position:fixed;z-index:1000;display:inline';
        }