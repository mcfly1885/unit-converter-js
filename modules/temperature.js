function celsiusTokelvin(celsius){
    celsius = parseFloat(celsius);
    let result = Number.parseFloat(celsius + 273.15).toFixed(2);
    return result;
}

function celsiusTofahrenheit(celsius){
    celsius = parseFloat(celsius);
    let result = Number.parseFloat(celsius*9/5+32).toFixed(2);
    return result;
}

//kelvin-------------------------
function kelvinTocelsius(kelvin){
    kelvin = parseFloat(kelvin);
    let result = Number.parseFloat(kelvin-273.15).toFixed(2);
    return result;
}

function kelvinTofahrenheit(kelvin){
    kelvin = parseFloat(kelvin);
    let result = Number.parseFloat((kelvin-273.15)*9/5+32).toFixed(2);
    return result;
}
//fahrenheit-----------------------------
function fahrenheitTocelsius(fahrenheit){
    fahrenheit = parseFloat(fahrenheit);
    let result = Number.parseFloat((fahrenheit-32)*5/9).toFixed(2);
    return result;
}

function fahrenheitTokelvin(fahrenheit){
    fahrenheit = parseFloat(fahrenheit);
     let result = Number.parseFloat(fahrenheit*5/9+255.37).toFixed(2);
    return result;
}


export function temperatureConvert(Xunit, Yunit,value){
    let result;
        switch(true){
            case (Xunit == "celsius" && Yunit == "kelvin"):
                result = celsiusTokelvin(value);
                break;
            case (Xunit == "celsius" && Yunit == "fahrenheit"):
                result=celsiusTofahrenheit(value);
                break;//-------------------------------------------------------------
            case (Xunit == "fahrenheit" && Yunit == "celsius"):
                 result = fahrenheitTocelsius(value);
                break;
            case (Xunit == "fahrenheit" && Yunit == "kelvin"):
                 result = fahrenheitTokelvin(value);
                break;//-------------------------------------------------------------
            case (Xunit == "kelvin" && Yunit == "celsius"):
                 result=kelvinTocelsius(value);
                break;
            case (Xunit == "kelvin" && Yunit == "fahrenheit"):
                 result=kelvinTofahrenheit(value); 
                break;
            case (Xunit == Yunit):
                 result = value;
                break;    
         }
         return result;
}

export function temperatureList(list){
    list.options.length = 0;
    list.add(new Option ('Celsius','celsius'));
    list.add(new Option ('Fahrenheit','fahrenheit'));
    list.add(new Option ('Kelvin','kelvin'));

}