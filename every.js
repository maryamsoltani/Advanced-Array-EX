function hasOddNnumber (arr){
    return arr.some(function (val){
        return val %2 !==0;
    });

}

function hasOddNnumber (arr){
    return arr.evry(function (val){
        return val %2 !==0;
    });

}

const arr = [0, 0, 0];
const isNotZero = arr.some(i => i !==0);
const isAllZero = !isNotZero;

