function setItem(name,key){   
    if(localStorage[name] === undefined){
        localStorage[name] = key;
        return key;
    } else {
        return localStorage[name];
    }
}
