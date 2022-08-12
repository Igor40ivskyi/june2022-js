// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareCount(a, b) {
//     return a * b;
// }
// console.log(squareCount(5, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleSquareCount(r) {
//     return 3.14 * (r * r);
// }
// console.log(circleSquareCount(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylindrSquareCounting(h, r) {
//     return 2 * 3.14 * (r * r) + 2 * 3.14 * r * h;
// }
// console.log(cylindrSquareCounting(2, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let gangsters = [
//     {name: 'Vasya', age: 31, status: false},
//     {name: 'Lesyk', age: 33, status: true},
//     {name: 'Tiutya', age: 34, status: false},
//     {name: 'Petya', age: 22, status: true},
//     {name: 'Oleg', age: 44, status: false},
//     {name: 'Marty', age: 66, status: true},
//     {name: 'Darly', age: 20, status: true},
//     {name: 'Sara', age: 35, status: false},
//     {name: 'Bewerley', age: 58, status: false},
//     {name: 'Alex', age: 64, status: true},
// ];
// function arrayThrower(array) {
//     for (let item of array) {
//         console.log(item);
//     }
// }
// arrayThrower(gangsters);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function textCreator(text) {
//     document.write(`<p>${text}</p>`);
// }
// let textt = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolores ducimus excepturi molestias natus nesciunt porro, quo reprehenderit sed. Cum delectus inventore labore molestias odit porro quia repellat saepe.</p>`
// textCreator('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// foo('Pacany zdorov');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulCreate(text, count) {
//     document.write(`<ul>`)
//     for (i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulCreate('text', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let a = [12, 'Vasya', 44, true, 'Mars'];
//
// function arrayLister(array) {
//     document.write(`<ol>`)
//     for (let item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ol>`)
// }
// arrayLister(a);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arra = [
//     {id:3,name:'Javelin',age:5},
//     {id:4,name:'Lurry',age:6},
//     {id:5,name:'Grey',age:7},
// ]
// function arrayThrower(array) {
//     for (let item of array) {
//         document.write(`<div>${item.id} ${item.name} - ${item.age}</div>`)
//     }
// }
// arrayThrower(arra);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [111, 28, 35, 43, 51, 65, 7, 81, 90];
// function minFinder(array) {
//     let min = array[0];
//     for (let item of array) {
//         if (min > item) {
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(minFinder(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [111, 28, 35, 43, 51, 65, 7, 81, 90];
// const sumDigits = array => {
//     let sum = 0;
//     for (let item of array) {
//         sum = sum + item;
//     }
//     return sum;
// };
// console.log(sumDigits(arr));