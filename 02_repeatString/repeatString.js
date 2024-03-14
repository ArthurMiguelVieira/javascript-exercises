function repeatString(word,times){
    if(times < 0){
        return "ERROR"
    }
    let words = '';
    let i = 0
    while(times > i){
        words = words + word
        i++
    }
    return words
}

// Do not edit below this line
module.exports = repeatString;
