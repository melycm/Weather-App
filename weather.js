$(document).ready(function(){
    
    $('#submit-button').click(function(e){
       
  
    var city = document.getElementById("search_box").value;
    var city = $('#search_box').val();
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city
    var apiKey = "26a3e08a14a8b0a62e45a779e7f267d8"; // Replace "APIKEY" with your own API key;
	

    $.get(url + '&appid=' + apiKey)
    .done(function(response) {

		console.log(response);
        updateUISuccess(response)
		
    })
    .fail(function(error) {
        console.log(error);
        
        updateUIError()
			
	});

	//handle XHR success
	function updateUISuccess(response) {
        var condition = response.weather[0].main;
        console.log(condition);

        var name = response.name;
        console.log(name);
        
        var degC = response.main.temp - 273.15;
        console.log(degC);

        var humidity = response.main.humidity;
        console.log(humidity);

        var pressure = response.main.pressure;
        console.log(pressure);

        var maxTemp = response.main.temp_max - 273.15;
        console.log(maxTemp);

        var degF2 = maxTemp * 1.8 + 32;
        console.log(degF2);

        var degCInt2 = Math.floor(maxTemp);
        console.log(degCInt2);

        var degFInt2 = Math.floor(degF2);
        console.log(degFInt2);
        
        var minTemp = response.main.temp_min - 273.15;
        console.log(minTemp);

        var degF3 = minTemp * 1.8 + 32;
        console.log(degF3);

        var degCInt3 = Math.floor(minTemp);
        console.log(degCInt3);

        var degFInt3 = Math.floor(degF3);
        console.log(degFInt3);

        var degCInt = Math.floor(degC);
        console.log(degCInt);

        var degF = degC * 1.8 + 32;
        console.log(degF);

        var degFInt = Math.floor(degF);
        console.log(degFInt);
        
        //var weatherBox = document.getElementById("weather");
		//weatherBox.innerHTML = "<p><b>Weather: </b> " + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
        var $weatherBox = $('#weather');
        $weatherBox.append("<h3>Weather in: " + name + "</h3>");
        $weatherBox.append("<p>Currently: " + condition + "</p>");
        $weatherBox.append("<p>Humidity: " + humidity + " %" + "</p>");
        $weatherBox.append("<p>Weather: " + degCInt + "&#176; C / " + degFInt + "&#176; F</p>");
        $weatherBox.append("<p>Max Temp: " + degCInt2 + "&#176; C / " + degF2 + "&#176; F</p>");
        $weatherBox.append("<p>Min Temp: " + degCInt3 + "&#176; C / " + degF3 + "&#176; F</p>");
        $weatherBox.append("<p>Pressure:  " + pressure + " hpa" + "</p>");
        // var $weatherBox = $('#weather');
        
	}

	// handle XHR error
	function updateUIError() {
		var weatherBox = document.getElementById("weather");
		weatherBox.className = "hidden";
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}

})
})