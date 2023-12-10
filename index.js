function arrayOrObj(collection){
    if(collection instanceof Array){
        return collection.slice()
    } else{
       return Object.values(collection)
    }
}

function myEach(collection, callback){
    let newCollection = arrayOrObj(collection);
    for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback){
    let newArray = []
    let newCollection = arrayOrObj(collection)
    for(let i = 0; i < newCollection.length; i++){
        newArray.push(callback(newCollection[i]))
    }
    return newArray;
}

function myReduce(collection, callback, acc){
    let newCollection = arrayOrObj(collection)
    if(!acc){
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for(let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc;
}

function myFind(collection, predicate){
    let newCollection = arrayOrObj(collection)
    for(let i = 0; i < newCollection.length; i++){
        if (predicate(newCollection[i])) return newCollection[i]
    }
    return undefined;
}

function myFilter(collection, predicate){
    let newCollection = arrayOrObj(collection)
    let newArray = [];
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])) newArray.push(newCollection[i]);
    }
    return newArray;
}

function mySize(collection){
    let newCollection = arrayOrObj(collection)
    return newCollection.length;
}

function myFirst(array, stop = false){
    return (stop) ? array.slice(0, stop) : array[0];
}

function myLast(array, start = false){
    return start ? array.slice(array.length - start, array.length) : array[array.length - 1];
}

function myKeys(object){
    let keys = [];
    for(let key in object){
        keys.push(key);
    }
    return keys;
}

function myValues(object){
    let value = [];
    for(let key in object){
        value.push(object[key])
    }
    return value;
}