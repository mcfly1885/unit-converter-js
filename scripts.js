import * as temperature from "./modules/temperature.js";
import * as length from "./modules/length.js";

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
            setText(target,temperature.celsiusTokelvin(value));
            break;
        case (Xunit == "celsius" && Yunit == "fahrenheit"):
            setText(target,temperature.celsiusTofahrenheit(value));
            break;//-------------------------------------------------------------
        case (Xunit == "fahrenheit" && Yunit == "celsius"):
            setText(target,temperature.fahrenheitTocelsius(value));
            break;
        case (Xunit == "fahrenheit" && Yunit == "kelvin"):
            setText(target,temperature.fahrenheitTokelvin(value));
            break;//-------------------------------------------------------------
        case (Xunit == "kelvin" && Yunit == "celsius"):
            setText(target,temperature.kelvinTocelsius(value));
            break;
        case (Xunit == "kelvin" && Yunit == "fahrenheit"):
            setText(target,temperature.kelvinTofahrenheit(value)); 
            break;//-------------------------------------------------------------
        //---------------MM--------------------------------------------------
        case (Xunit == "millimeter" && Yunit == "centimeter"):
            setText(target,length.up(value,0.1));
            break;
        case (Xunit == "millimeter" && Yunit == "decimeter"):
            setText(target,length.up(value,0.01));
            break;
        case (Xunit == "millimeter" && Yunit == "meter"):
            setText(target,length.up(value,0.001));
            break;
        case (Xunit == "millimeter" && Yunit == "decameter"):
            setText(target,length.up(value,0.0001));
            break;
        case (Xunit == "millimeter" && Yunit == "hectometer"):
            setText(target,length.up(value,0.00001));
            break;
        case (Xunit == "millimeter" && Yunit == "kilometer"):
            setText(target,length.up(value,0.000001));
            break;
        //-----------------CM-------------------------------------------
        case (Xunit == "centimeter" && Yunit == "millimeter"):
            setText(target,length.up(value,10));
            break;
        case (Xunit == "centimeter" && Yunit == "decimeter"):
            setText(target,length.up(value,0.1));
            break;
        case (Xunit == "centimeter" && Yunit == "meter"):
            setText(target,length.up(value,0.01));
            break;    
        case (Xunit == "centimeter" && Yunit == "decameter"):
            setText(target,length.up(value,0.001));
            break;
        case (Xunit == "centimeter" && Yunit == "hectometer"):
            setText(target,length.up(value,0.0001));
            break;
        case (Xunit == "centimeter" && Yunit == "kilometer"):
            setText(target,length.up(value,0.00001));
            break; 
 
        //-----------------DM-------------------------------------------
        case (Xunit == "decimeter" && Yunit == "millimeter"):
            setText(target,length.up(value,100));
            break;
        case (Xunit == "decimeter" && Yunit == "centimeter"):
            setText(target,length.up(value,10));
            break;
        case (Xunit == "decimeter" && Yunit == "meter"):
            setText(target,length.up(value,0.1));
            break;    
        case (Xunit == "decimeter" && Yunit == "decameter"):
            setText(target,length.up(value,0.01));
            break;
        case (Xunit == "decimeter" && Yunit == "hectometer"):
            setText(target,length.up(value,0.001));
            break;
        case (Xunit == "decimeter" && Yunit == "kilometer"):
            setText(target,length.up(value,0.0001));
            break; 
  
        //------------------M-------------------------------------------
        case (Xunit == "meter" && Yunit == "millimeter"):
            setText(target,length.up(value,1000));
            break;  
        case (Xunit == "meter" && Yunit == "centimeter"):
            setText(target,length.up(value,100));
            break;
        case (Xunit == "meter" && Yunit == "decimeter"):
            setText(target,length.up(value,10));
            break;
        case (Xunit == "meter" && Yunit == "decameter"):
            setText(target,length.up(value,0.1));
            break; 
        case (Xunit == "meter" && Yunit == "hectometer"):
            setText(target,length.up(value,0.01));
            break; 
        case (Xunit == "meter" && Yunit == "kilometer"):
            setText(target,length.up(value,0.001));
            break; 

        //------------------DecM-----------------------------------------
        case (Xunit == "decameter" && Yunit == "millimeter"):
            setText(target,length.up(value,10000));
            break;  
        case (Xunit == "decameter" && Yunit == "centimeter"):
            setText(target,length.up(value,1000));
            break;
        case (Xunit == "decameter" && Yunit == "decimeter"):
            setText(target,length.up(value,100));
            break;
        case (Xunit == "decameter" && Yunit == "meter"):
            setText(target,length.up(value,10));
            break;
        case (Xunit == "decameter" && Yunit == "hectometer"):
            setText(target,length.up(value,0.1));
            break; 
        case (Xunit == "decameter" && Yunit == "kilometer"):
            setText(target,length.up(value,0.01));
            break; 
        case (Xunit == "decameter" && Yunit == "mile"):
            value = value/10;
            setText(target,length.meterTomile(value));
            break
        //------------------HM-------------------------------------------
        case (Xunit == "hectometer" && Yunit == "millimeter"):
            setText(target,length.up(value,100000));
            break;  
        case (Xunit == "hectometer" && Yunit == "centimeter"):
            setText(target,length.up(value,10000));
            break;
        case (Xunit == "hectometer" && Yunit == "decimeter"):
            setText(target,length.up(value,1000));
            break;
        case (Xunit == "hectometer" && Yunit == "meter"):
            setText(target,length.up(value,100));
            break;
        case (Xunit == "hectometer" && Yunit == "decameter"):
            setText(target,length.up(value,10));
            break; 
        case (Xunit == "hectometer" && Yunit == "kilometer"):
            setText(target,length.up(value,0.1));
            break; 
        case (Xunit == "hectometer" && Yunit == "mile"):
            value = value/10;
            setText(target,length.meterTomile(value));
            break
        //------------------KM-------------------------------------------
        case (Xunit == "kilometer" && Yunit == "millimeter"):
            setText(target,length.up(value,1000000));
            break;
        case (Xunit == "kilometer" && Yunit == "centimeter"):
            setText(target,length.up(value,100000));
            break;
        case (Xunit == "kilometer" && Yunit == "decimeter"):
            setText(target,length.up(value,10000));
            break;         
        case (Xunit == "kilometer" && Yunit == "meter"):
            setText(target,length.up(value,1000));
            break;
        case (Xunit == "kilometer" && Yunit == "decameter"):
            setText(target,length.up(value,100));
            break;
        case (Xunit == "kilometer" && Yunit == "hectometer"):
            setText(target,length.up(value,10));
            break;        
        case (Xunit == "kilometer" && Yunit == "mile"):
            setText(target,length.kilometersTomiles(value));
            break;   
        //------------------mile------------------------------------------   
        
        case (Xunit == "centimeter" && Yunit == "mile"):
            setText(target,length.centimeterTomile(value));
            break; 
        case (Xunit == "decimeter" && Yunit == "mile"):
            setText(target,length.centimeterTomile(value));
            break;
        case (Xunit == "meter" && Yunit == "mile"):
            setText(target,length.meterTomile(value));
            break;   

        case (Xunit == "mile" && Yunit == "kilometer"):
            setText(target,length.milesTokilometers(value));
            break;          
        case (Xunit == "mile" && Yunit == "meter"):
            setText(target,length.mileTometer(value));
            break; 
        case (Xunit == "mile" && Yunit == "centimeter"):
            setText(target,length.mileTocentimeter(value));
            break 
        //----------------------------------------------------------------
        case (Xunit == Yunit):
            setText(target,getValue(id));
            break;    
     }
}
//-----------------------------------------------------------------------------------
//Script start
//Select List of physical quantities
document.getElementById('unit').addEventListener('change', ()=>{ 
    const unit = getValue("unit");
    setValue("x",0);
    setText("y","0");
    switch(true){
        case (unit == "length"):
            length.lengthList(document.getElementById("Xunit"));
            length.lengthList(document.getElementById("Yunit"));
            break;
        case (unit == "temperature"):
            temperature.temperatureList(document.getElementById("Xunit"));
            temperature.temperatureList(document.getElementById("Yunit"));
            break;
    }
});

//init value
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
       convert("x","y");
});
//event listener on second menu
document.getElementById('Yunit').addEventListener('change', ()=>{ 
       convert("x","y");
});