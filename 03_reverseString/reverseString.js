const reverseString = function(stringToReverse) {
    let counter = stringToReverse.length -1
    let reversed = ''
    for (let index = 0; index < stringToReverse.length; index++) {
        
        reversed += stringToReverse[counter]
        counter --
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
