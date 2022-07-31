// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('What is the number?');
// if (x != 0) {
//     console.log('True');
// } else {
//     console.log('False');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let time = prompt('what is the quarter ?')
// if (time >= 1 && time <= 15) {
//     console.log('1st quarter');
// }else if (time > 15 && time <= 30) {
//     console.log('2nd quarter');
// }else if (time > 30 && time <= 45) {
//     console.log('3rd quarter');
// }else if (time > 45 && time <= 60) {
//     console.log('4th quarter');
// } else {
//     console.log('??????????????????????????????');
// }


// let day = prompt('What day is it today?');
// if (day >= 1 && day <= 10) {
//     console.log('it is first decade');
// }else if (day > 10 && day <= 20) {
//     console.log('it is second decade');
// }else if (day > 20 && day <= 31) {
//     console.log('it is third decade');
// } else {
//     console.log('Get the fuck out of here you bitch');
// }





// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = prompt('Enter the day please, sir ');
//
// switch (day) {
//     case "Sunday" :
//         console.log('You just play around the whole day');
//         break;
//     case "Monday" :
//         console.log('Gotta go to the job');
//         break;
//     case "Tuesday":
//         console.log('Playing basketball');
//         break;
//     case "Wednesday":
//         console.log('Party-day');
//         break;
//     case "Thursday":
//         console.log('Day of fun ');
//         break;
//     case "Friday":
//         console.log('Thank god it is Friday ');
//         break;
//     case "Saturday":
//         console.log('Picture me rollin in my 500 benz');
//         break;
//     default:
//         console.log('???????????????????????????????????????');
// }






//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let a = prompt('enter the number');
let b = prompt('enter the number');

if (a > b) {
    console.log(a);
}else if (b > a) {
    console.log(b);
}else if (a === b) {
    console.log('draw');
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt('meaning') || 'default';
// console.log(x)