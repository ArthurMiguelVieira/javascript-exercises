const removeFromArray = function(array, ...numbers) {
    for (let index = 0; index < numbers.length; index++) {
        if(!isNaN(numbers[index])){
            numbers[index] += 0
        }
    }
    let condicoes = 'array[index] != numbers[0]';

    for (let index = 1; index < numbers.length; index++) {
        condicoes += ' && array[index] != numbers[' + index + ']';
    }

    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (eval(condicoes)) {
            newArray.push(array[index]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
