function findUserByUsername(arr, str){
    return arr.find(function(user){
        return user.stry === str;

    } );
}


for (var i = 0; i < arrayOfObjects.length; i++) {
    var obj = arrayOfObjects[i];

    if (listToDelete.indexOf(obj.id) !== -1) {
        arrayOfObjects.splice(i, 1);
    }
}