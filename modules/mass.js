export function convert(x,y,value){
    let gram;
    const togram = {
        pound: 453.5924,
        ounce: 28.34952
    };

    switch(true){
        case(x == "milligram"):
            gram = value / 1000;
            break;
        case(x == "centigram"):
            gram = value / 100;
            break;
        case(x == "decigram"):
            gram = value / 10;
            break;
        case(x == "gram"):
            gram = value;
            break;
        case(x == "dekagram"):
            gram = value * 10;
            break;
        case(x == "hectogram"):
            gram = value * 100;
            break;
        case(x == "kilogram"):
            gram = value * 1000;
            break;
        case(x == "pound"):
            gram = value * togram.pound;
            break;
        case(x == "ounce"):
            gram = value * togram.ounce;
            break;
        case(x == y):
            gram = value;
            break;
    }
    let result;
    switch(true){
        case(y == "milligram"):
            result = gram * 1000;
            break;
        case(y == "centigram"):
            result = gram * 100;
            break;
        case(y == "decigram"):
            result = gram * 10;
            break;
        case(y == "gram"):
            result = gram;
            break;
        case(y == "dekagram"):
            result = gram / 10;
            break;
        case(y == "hectogram"):
            result = gram / 100;
            break;
        case(y == "kilogram"):
            result = gram / 1000;
            break;
        case (y == "pound"):
            result = gram / togram.pound;
            break;
        case(y == "ounce"):
            result = gram / togram.ounce;
            break;
        case(x == y):
            result = value;
            break;
    }

    return Number.parseFloat(result.toPrecision(5));
}


export function massList(list){
    list.options.length = 0;
    list.add(new Option ('Milligram','milligram'));
    list.add(new Option ('Centigram','centigram'));
    list.add(new Option ('Decigram','decigram'));
    list.add(new Option ('Gram','gram'));
    list.add(new Option ('Dekagram','dekagram'));
    list.add(new Option ('Hectogram','hectogram'));
    list.add(new Option ('Kilogram','kilogram'));
    list.add(new Option ('Pound','pound'));
    list.add(new Option ('Ounce','ounce'));

}
 