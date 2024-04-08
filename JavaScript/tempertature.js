function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  let celsiusTemperature = 25;
  let fahrenheitTemperature = 70;
  
  console.log(celsiusTemperature + "°C is equal to " + celsiusToFahrenheit(celsiusTemperature) + "°F");
  console.log(fahrenheitTemperature + "°F is equal to " + fahrenheitToCelsius(fahrenheitTemperature) + "°C");
  