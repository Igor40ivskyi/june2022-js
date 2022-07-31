// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hello = 'hello';
// console.log(hello);
// document.write(hello);
// alert(hello);
//
// let number = 12;
// console.log(number);
// document.write(number);
// alert(number);
//
// let boolean = true;
// console.log(boolean);
// document.write(boolean);
// alert(boolean);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let firstName = 'Igor';
// let middleName = 'Levovych';
// let lastName = 'Sorokivskyi';
// let res = `${firstName} ${middleName} ${lastName}`;
// let res = firstName + ' ' + middleName+' '+lastName
// console.log(res);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter name');
let middleName = prompt('Enter middleName');
let age = +prompt('Enter age');
console.log(name);
console.log(middleName);
console.log(age);
