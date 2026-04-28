//SI-unit-functuion-------------------------------

export function up(value, coefficient){
    value = parseFloat(value);
    let result = Number.parseFloat(value).toFixed(2)*coefficient;
    return result;
}
//------------------------------------------------
export function lengthConvert(x,y,value){
    let meter;
    const MILEMETER = 1609.344;
    const YARDMETER = 0.9144;
    const FEETMETER = 0.3048;

    switch(true){
        case(x == "millimeter"):
            meter = value / 1000;
            break;
        case(x == "centimeter"):
            meter = value / 100;
            break;
        case(x == "decimeter"):
            meter = value / 10;
            break;
        case(x == "meter"):
            meter = value;
            break;
        case(x == "decameter"):
            meter = value * 10;
            break;
        case(x == "hectometer"):
            meter = value * 100;
            break;
        case(x == "kilometer"):
            meter = value * 1000;
            break;
        case(x == "mile"):
            meter = value * MILEMETER;
            break;
        case(x == "yard"):
            meter = value * YARDMETER;
            break;
        case(x == "feet"):
            meter = value * FEETMETER;
            break;
        case(x == y):
            meter = value;
            break;
    }
    let result;
    switch(true){
        case(y == "millimeter"):
            result = meter * 1000;
            break;
        case(y == "centimeter"):
            result = meter * 100;
            break;
        case(y == "decimeter"):
            result = meter * 10;
            break;
        case(y == "meter"):
            result = meter;
            break;
        case(y == "decameter"):
            result = meter / 10;
            break;
        case(y == "hectometer"):
            result = meter / 100;
            break;
        case(y == "kilometer"):
            result = meter / 1000;
            break;
        case (y == "mile"):
            result = meter / MILEMETER;
            break;
        case (y == "yard"):
            result = meter / YARDMETER;
            break;
        case (y == "feet"):
            result = meter / FEETMETER;
            break;
        case(x == y):
            meter = value;
            break;
    }
    return result.toFixed(3);
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
    list.add(new Option ('Yard','yard'));
    list.add(new Option ('Feet','feet'));
}
 