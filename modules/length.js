export function lengthConvert(x,y,value){
    let meter;
    const tometer = {
        mile:  1609.344,
        yard:  0.9144,
        feet:  0.3048
    };

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
            meter = value * tometer.mile;
            break;
        case(x == "yard"):
            meter = value * tometer.yard;
            break;
        case(x == "feet"):
            meter = value * tometer.feet;
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
            result = meter / tometer.mile;
            break;
        case (y == "yard"):
            result = meter / tometer.yard;
            break;
        case (y == "feet"):
            result = meter / tometer.feet;
            break;
        case(x == y):
            meter = value;
            break;
    }
    return Number.parseFloat(result.toPrecision(5));

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
 