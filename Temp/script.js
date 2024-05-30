function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("tempUnit").value;
    let result = document.getElementById("result");

    if (isNaN(inputTemp)) {
        result.innerText = "Please enter a valid temperature.";
        return;
    }

    if (unit === "celsius") {
        result.innerText = `Fahrenheit: ${(inputTemp * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(inputTemp + 273.15).toFixed(2)}K`;
    } else if (unit === "fahrenheit") {
        result.innerText = `Celsius: ${((inputTemp - 32) * 5/9).toFixed(2)}°C, Kelvin: ${((inputTemp - 32) * 5/9 + 273.15).toFixed(2)}K`;
    } else if (unit === "kelvin") {
        result.innerText = `Celsius: ${(inputTemp - 273.15).toFixed(2)}°C, Fahrenheit: ${((inputTemp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }
}
