module.exports = function toReadable(number) {
    let hundreds = getHundreds(number);
    if (!number) {
        return 'zero'
    }
    if (!isHundredsHasReminder(number)) {
        return hundreds;
    } 
    if (hundreds) {
        return hundreds +  ' ' + getDozensAndUnits(number);
    } else {
        return getDozensAndUnits(number);
    }   
}

const units = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
}
const dozens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

function getHundreds(number) {
    const numberString = number.toString();
    if (numberString.length < 3) {
        return ''
    }
        return units[numberString[0]] + ' hundred' ;
}

function isHundredsHasReminder(number) {
    return number % 100 == 0 ? false:true
}

function getDozensAndUnits(number) {
    const numberString = +number.toString().slice(-2);
    if (units[numberString]) {
        return units[numberString]
    }
    if (dozens[numberString]) {
        return dozens[numberString]
    }
        return dozens[Math.floor(numberString/10)*10] + ' ' + units[numberString%10];
}