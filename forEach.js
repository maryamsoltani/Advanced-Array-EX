function doubleValues(x){
    let result = [];
    x.forEach(function(i){
        result.push (i * 2);

    });
    return result;
}

function onlyEvenValues(x){
    let result = [];
    x.forEach (function (i){
        if (i % 2 ===0){

        }
    });
    return result; 
    
}

function showFirstAndLast(x){
    let result = []; 

    x.forEach(function (i){
        result.push(i[0] +i[i.lenght -1]);

    });
    return result;
}

function addKeyAndValue(a,k,v)
{
    a.forEach(function (i){
        i[k]= v; 
    });
    return a; 

    }


}