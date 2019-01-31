module.exports = {
    success,
    fail,
    repair
};



function success(item){
    const newItem = Object.assign({}, item);
    const topFiveEnhanced = {
        'PRI': 16,
        'DUO': 17,
        'TRI': 18,
        'TET': 19
    };

    if(newItem.enhancement === 'PEN'){
        return newItem;
    }

    let enhancementValue;
    if(typeof newItem.enhancement === 'string'){
        enhancementValue = topFiveEnhanced[newItem.enhancement];
    }
    else{
        enhancementValue = newItem.enhancement;
    }

    enhancementValue++;
    if(enhancementValue > 15){
        newItem.enhancement = Object.keys(topFiveEnhanced).find(key=>topFiveEnhanced[key] === enhancementValue);
        const startIndex = newItem.name.indexOf(']') + 1;
        newItem.name = '[' + newItem.enhancement + ']' +  newItem.name.slice(startIndex);
    }
    else{
        newItem.enhancement = enhancementValue;
        if(newItem.enhancement === 1){
            newItem.name = '[+1] ' +  newItem.name;
        }
        else{
            const startIndex = newItem.name.indexOf(']') + 1;
            newItem.name = '[+' + newItem.enhancement + ']' +  newItem.name.slice(startIndex);
        }
    }
    
    return newItem;
}

function repair(item){
    const newItem = Object.assign({}, item);
    newItem.durability = 100;
    return newItem;
}

function fail(item){
    const newItem = Object.assign({}, item);
    const topFiveEnhanced = {
        'PRI': 16,
        'DUO': 17,
        'TRI': 18,
        'TET': 19,
        'PEN': 20
    };

    if(newItem.enhancement < 15){
        newItem.durability -= 5;
        if(newItem.durability < 20){
            newItem.durability = 20;
        }
    }
    else{
        newItem.durability -= 10;
        if(newItem.durability < 0){
            newItem.durability = 0;
        }
    }
    
    if(typeof newItem.enhancement === 'string'){
        let enhancementValue = topFiveEnhanced[newItem.enhancement];
        if(enhancementValue > 16){
            enhancementValue--;
            newItem.enhancement = Object.keys(topFiveEnhanced).find(key=>topFiveEnhanced[key] === enhancementValue);
            const startIndex = newItem.name.indexOf(']') + 1;
            newItem.name = '[' + newItem.enhancement + ']' +  newItem.name.slice(startIndex);
        }
    }

    return newItem;
}