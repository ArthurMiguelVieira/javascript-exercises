const sumAll = function(...numbers) {
    for (let index = 0; index < numbers.length; index++) {
        if (isNaN(numbers[index]) || numbers[index] < 0 || !Number.isInteger(numbers[index]) || typeof numbers[index] === 'string') {
            return 'ERROR';
        }
    }
    let resultado =0
    if (numbers[0] < numbers[1]) {
        for (let index = numbers[0] ; index <= numbers[1]; index++) {
            
            resultado += index
        }
    }else{
        for (let index = numbers[1] ; index <= numbers[0]; index++) {
            
            resultado += index
        }
        
        
    }
    return resultado
};

// Do not edit below this line
module.exports = sumAll;
