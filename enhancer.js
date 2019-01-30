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

    if(newItem.enhancment >= 0 ){

    }

    

    if(newItem.enhancment === 'PEN'){
        return newItem;
    }

    return newItem;
}

function fail(item){
    const newItem = Object.assign({}, item);;
    return newItem;
}

function repair(item){
    const newItem = Object.assign({}, item);
    newItem.durablilty = 100;
    return newItem;
}