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

function convert(){
    const Xunit = getValue("Xunit");
    const Yunit = getValue("Yunit");
    const unit = getValue("unit");
    const value = document.getElementById("x").value;

    switch(true){
        case(unit=="temperature"):
        setText("y",temperature.temperatureConvert(Xunit,Yunit,value));
        break;
        case(unit=="length"):
        setText("y",length.lengthConvert(Xunit,Yunit,value));
        break;
    } 
}


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

//event listener on number field, when user types a key
document.getElementById("x").addEventListener("keyup", ()=>{ 
    convert();
});
//event listener on number field when user clicks on up / down arrow
document.getElementById('x').addEventListener('change',()=> {
    convert();
});
//event listener on first menu
document.getElementById('Xunit').addEventListener('change', ()=>{ 
    convert();
});
//event listener on second menu
document.getElementById('Yunit').addEventListener('change', ()=>{ 
    convert();
});