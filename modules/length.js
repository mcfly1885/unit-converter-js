//SI-unit-functuion-------------------------------

export function up(value, coefficient){
    value = parseFloat(value);
    let result = Number.parseFloat(value).toFixed(2)*coefficient;
    return result;
}
//------------------------------------------------
export function kilometersTomiles(kilometers){
    kilometers = parseFloat(kilometers);
    let result = Number.parseFloat(kilometers)/1.60934;
    return result.toFixed(3);
}

export function milesTokilometers(miles){
    miles = parseFloat(miles);
    let result = Number.parseFloat(miles)*1.60934;
    return result.toFixed(3);  
}

export function meterTomile(miles){
    miles = parseFloat(miles);
    let result = Number.parseFloat(miles)/1609;
    return result.toFixed(9);  
}

export function mileTometer(miles){
    miles = parseFloat(miles);
    let result = Number.parseFloat(miles)*1609;
    return result.toFixed(2);  
}

export function centimeterTomile(miles){
    miles = parseFloat(miles);
    let result = Number.parseFloat(miles)/160934;
    return result.toFixed(9);  
}
export function mileTocentimeter(miles){
    miles = parseFloat(miles);
    let result = Number.parseFloat(miles)*160934;
    return result.toFixed(9);  
}




export function lengthList(list){
    list.options.length = 0;
    list.add(new Option ('Millimeter','millimeter'));
    list.add(new Option ('Centimeter','centimeter'));
    list.add(new Option ('Decimeter','decimeter'));
    list.add(new Option ('Meter','meter'));
    list.add(new Option ('Decameter','decameter'));
    list.add(new Option ('Hectometre','hectometer'));
    list.add(new Option ('Kilometer','kilometer'));
    list.add(new Option ('Mile','mile'));
}
 