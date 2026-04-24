import * as temperature from "./modules/temperature.js";

function getValue(id){
    return document.getElementById(id).value;
}
function setValue(id,value){
    document.getElementById(id).value=value;
}
function setText(id,text){
    document.getElementById(id).innerText=text;
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
            setText(target,temperature.celsiusTokelvin(value)+"K");
            break;
        case (Xunit == "celsius" && Yunit == "fahrenheit"):
            setText(target,temperature.celsiusTofahrenheit(value)+"°F");
            break;//-------------------------------------------------------------
        case (Xunit == "fahrenheit" && Yunit == "celsius"):
            setText(target,temperature.fahrenheitTocelsius(value)+"°C");
            break;
        case (Xunit == "fahrenheit" && Yunit == "kelvin"):
            setText(target,temperature.fahrenheitTokelvin(value)+"K");
            break;//-------------------------------------------------------------
        case (Xunit == "kelvin" && Yunit == "celsius"):
            setText(target,temperature.kelvinTocelsius(value)+"°C");
            break;
        case (Xunit == "kelvin" && Yunit == "fahrenheit"):
            setText(target,temperature.kelvinTofahrenheit(value)+"°F"); 
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