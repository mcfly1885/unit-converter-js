export function celsiusTokelvin(celsius){
    celsius = parseFloat(celsius);
    let result = Number.parseFloat(celsius + 273.15).toFixed(2);
    return result;
}

export function celsiusTofahrenheit(celsius){
    celsius = parseFloat(celsius);
    let result = Number.parseFloat(celsius*9/5+32).toFixed(2);
    return result;
}

//kelvin-------------------------
export function kelvinTocelsius(kelvin){
    kelvin = parseFloat(kelvin);
    let result = Number.parseFloat(kelvin-273.15).toFixed(2);
    return result;
}

export function kelvinTofahrenheit(kelvin){
    kelvin = parseFloat(kelvin);
    let result = Number.parseFloat((kelvin-273.15)*9/5+32).toFixed(2);
    return result;
}
//fahrenheit-----------------------------
export function fahrenheitTocelsius(fahrenheit){
    fahrenheit = parseFloat(fahrenheit);
    let result = Number.parseFloat((fahrenheit-32)*5/9).toFixed(2);
    return result;
}

export function fahrenheitTokelvin(fahrenheit){
    fahrenheit = parseFloat(fahrenheit);
     let result = Number.parseFloat(fahrenheit*5/9+255.37).toFixed(2);
    return result;
}


export function temperatureList(list){
    list.options.length = 0;
    list.add(new Option ('Celsius','celsius'));
    list.add(new Option ('Fahrenheit','fahrenheit'));
    list.add(new Option ('Kelvin','kelvin'));

}