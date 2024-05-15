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

//HomeWork_4.3
let yearOfBirth,
    thisYear,
    userAge,
    userCity,
    userFavoriteSport;

do {
    yearOfBirth = prompt("Рік Вашого народження? (Приклад: 1979)");
} while (yearOfBirth === '' || (yearOfBirth + '').length !== 4 || isNaN(yearOfBirth));
!yearOfBirth ? alert("Шкода, що Ви не захотіли ввести свій рік народження.") :
    (
        thisYear = new Date().getFullYear(),
        userAge = thisYear - yearOfBirth
    );

do {
    userCity = prompt("У якому місті Ви проживаєте? (Приклад: Дніпро)");
} while (userCity === '');

if (!userCity) {
    alert("Шкода, що Ви не захотіли ввести своє місце проживання.");
} else {
    switch (userCity) {
        case 'Київ':
            alert("Ти живеш у столиці України.");
            break;
        case 'Вашингтон':
            alert("Ти живеш у столиці США.");
            break;
        case 'Лондон':
            alert("Ти живеш у столиці Англії.");
            break;
        default:
            alert(`Ти живеш у місті ${userCity}.`);
    }
}

do {
    userFavoriteSport = prompt("Ваш улюбленний  вид спорту? (Приклад: тенніс)");
} while (userFavoriteSport === '');

if (!userFavoriteSport) {
    alert("Шкода, що Ви не захотіли ввести своє місце проживання.");
} else {
    userFavoriteSport = userFavoriteSport.toLowerCase();
    switch (userFavoriteSport) {
        case 'бокс':
            alert("Круто! Хочеш стати Мухаммедом Алі?");
            break;
        case 'футбол':
            alert("Круто! Хочеш стати Пеле?");
            break;
        case 'баскетбол':
            alert("Круто! Хочеш стати Кобі Браянт?");
            break;
    }
}

const alertAge = () => {
    return !yearOfBirth ? "Ви не ввели рік народження\n" : `Вам ${userAge} років.\n`;
}
const alertCity = () => {
    return !userCity ? "Ви не ввели місце проживання\n" : `Вашe місце проживання: ${userCity}.\n`;
}
const alertSport = () => {
    return !userFavoriteSport ? "Ви не ввели свій улюбленний вид спору\n" : `Ваш улюбленний вид спорту: ${userFavoriteSport}.\n`
}

alert(alertAge() + alertCity() + alertSport());

//HomeWork_4.4
let numOrStr = prompt('input number or string');
console.log(numOrStr);

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