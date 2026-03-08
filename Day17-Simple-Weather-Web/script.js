async function getWeather() {

    let city = document.getElementById("city").value;

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=720a22fbd4ff6ddef09ab916e0da7f62=metric`;

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