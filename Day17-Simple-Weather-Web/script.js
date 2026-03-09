async function getWeather() {

    let city = document.getElementById("city").value;

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1956cfdf943c5838254d569d32a63de0=metric`;

    try {

        let response = await fetch(api);
        let data = await response.json();

        if (data.cod == "404") {
            alert("City not found");
            return;
        }

        document.getElementById("temp").innerText =
            "Temperature: " + data.main.temp + "°C";

        document.getElementById("weather").innerText =
            "Weather: " + data.weather[0].main;

    }

    catch (error) {
        console.log(error);
        alert("Something went wrong");
    }

}