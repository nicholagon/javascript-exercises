const removeFromArray = function(...theArgs) {
    let argsArray = theArgs;
    let referenceArray = argsArray.shift();

    for(let i = 0; i <= argsArray.length - 1; i++) {
        if(referenceArray.includes(argsArray[i])) {
            referenceArray.splice(referenceArray.indexOf(argsArray[i]), 1);
        }
        else continue;
    }

    return referenceArray;

}

module.exports = removeFromArray
