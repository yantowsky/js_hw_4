//HomeWork_4.1
let userName = prompt("Enter your name:");

alert(`Hello, ${userName}! How are you?`);

//HomeWork_4.2
let num,
    arrNum,
    res;

do {
    num = +prompt("Введіть тризначне число:");
} while (num < 100 || num > 999 || isNaN(num));

res = num / 111;
arrNum = num.toString().split('');

if (Number.isInteger(res)) {
    console.log(`${num} - в цьому тризначному числі всі цифри однакові і це ${res}`);
} else if (arrNum[0] === arrNum[1] || arrNum[0] === arrNum[2]) {
    console.log(`${num} - в цьому тризначному числі дві цифри однакові і це ${arrNum[0]}`);
} else if (arrNum[1] === arrNum[2]) {
    console.log(`${num} - в цьому тризначному числі дві цифри однакові і це ${arrNum[1]}`);
} else {
    console.log(`${num} - в цьому тризначному числі немає однакових цифр`);
}

//HomeWork_4.4
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case (numOrStr === null):
        console.log('ви скасували');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr)):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}