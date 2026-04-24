function getValue(id){
    return document.getElementById(id).value;
}
function setValue(id,value){
    document.getElementById(id).value=value;
}
function setText(id,text){
    document.getElementById(id).innerText=text;
}

//Temperature Functions
//celsius------------------------
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
//Convert-function
function convert(id,target){
    const value = getValue(id);
    if(value==""){
        return;
    }
    const Xunit = getValue("Xunit");
    const Yunit = getValue("Yunit");
    switch(true){
        case (Xunit == "celsius" && Yunit == "kelvin"):
            setText(target,celsiusTokelvin(value)+"K");
            break;
        case (Xunit == "celsius" && Yunit == "fahrenheit"):
            setText(target,celsiusTofahrenheit(value)+"°F");
            break;//-------------------------------------------------------------
        case (Xunit == "fahrenheit" && Yunit == "celsius"):
            setText(target,fahrenheitTocelsius(value)+"°C");
            break;
        case (Xunit == "fahrenheit" && Yunit == "kelvin"):
            setText(target,fahrenheitTokelvin(value)+"K");
            break;//-------------------------------------------------------------
        case (Xunit == "kelvin" && Yunit == "celsius"):
            setText(target,kelvinTocelsius(value)+"°C");
            break;
        case (Xunit == "kelvin" && Yunit == "fahrenheit"):
            setText(target,kelvinTofahrenheit(value)+"°F"); 
            break;//-------------------------------------------------------------

        case (Xunit == Yunit):
            if(Xunit =="celsius"){
             setText(target,getValue(id)+"°C");   
            }
            if(Xunit =="fahrenheit"){
             setText(target,getValue(id)+"°F");   
            }
            if(Xunit =="kelvin"){
             setText(target,getValue(id)+"K");   
            }
            break;    
     }
}
//-----------------------------------------------------------------------------------
//Script start

//init value
setValue("x","0");

const Xunit = getValue("Xunit");

//event listener on number field, when user types a key
document.getElementById("x").addEventListener("keyup", ()=>{ 
    convert("x","y");
});
//event listener on number field when user clicks on up / down arrow
document.getElementById('x').addEventListener('change',()=> {
    convert("x","y");
});



//event listener on first menu
document.getElementById('Xunit').addEventListener('change', ()=>{ 
            if(getValue("Xunit") == "celsius"){
                setText("selected-unit","°C");
            }
            if(getValue("Xunit") == "fahrenheit"){
                setText("selected-unit","°F");
             }
            if(getValue("Xunit") == "kelvin"){
                setText("selected-unit","K");
            }
       convert("x","y");
});
//event listener on second menu
document.getElementById('Yunit').addEventListener('change', ()=>{ 
            if(getValue("Xunit") == "celsius"){
            setText("selected-unit","°C");
            }
            if(getValue("Xunit") == "fahrenheit"){
            setText("selected-unit","°F");
             }
            if(getValue("Xunit") == "kelvin"){
            setText("selected-unit","K");
             }
       convert("x","y");
});