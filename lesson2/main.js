// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let playersNumbers = [10,11,12,1,4,3,2,6,7,5,];
// console.log(playersNumbers[0]);
// console.log(playersNumbers[1]);
// console.log(playersNumbers[2]);
// console.log(playersNumbers[3]);
// console.log(playersNumbers[4]);
// console.log(playersNumbers[5]);
// console.log(playersNumbers[6]);
// console.log(playersNumbers[7]);
// console.log(playersNumbers[8]);
// console.log(playersNumbers[9]);

// let array = [];
// array[0] = 'Odin';
// array[1] = 7;
// array[2] = true;
// array[3] = {name: 'Vasya'};
// array[4] = [1, 2, 3, 4, 5];
// array[5] = 12;
// array[6] = false;
// array[7] = 'Thor';
// array[8] = ['dasd', 'asdasd', 'asdasdsd'];
// array[9] = true;
//
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9]);
// console.log(array[3]['name']);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'nature',
//     pageCount:88,
//     genre: 'documentary'
// }
//
// let book2 = {
//     title: 'Robinzon Cruzoe',
//     pageCount: 195,
//     genre: 'adventure'
// }
//
// let book3 = {
//     title: 'One and only',
//     pageCount: 130,
//     genre: 'biography'
// }
// console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// let bookNature = {
//     title: 'nature',
//     pageCount:88,
//     genre: 'documentary',
//     author: [
//         {name: 'Jakie',
//         age:44}
//     ]
// }
//
// let bookRobinzone = {
//     title: 'Robinzon Cruzoe',
//     pageCount: 195,
//     genre: 'adventure',
//     author: [
//         {name: 'Albert',
//         age:66}
//     ]
// }
//
// let bookOne = {
//     title: 'One and only',
//     pageCount: 130,
//     genre: 'biography',
//     author: [
//         {
//             name: 'Riki',
//             age: 46
//         }
//     ]
// }

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let arrayFacilities = [
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 1111,
//     },
//     {
//         name: 'Petya',
//         username: 'RainMan',
//         password: 12311,
//     },
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 1234111,
//     },
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 11324211,
//     },
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 11345411,
//     },
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 117780011,
//     },
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 1119800901,
//     },
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 11000000011,
//     },
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 110009999911,
//     },
//     {
//         name: 'Vasya',
//         username: 'RainMan',
//         password: 111,
//     }
// ];
// console.log(arrayFacilities[0]['password']);
// console.log(arrayFacilities[1]['password']);
// console.log(arrayFacilities[2]['password']);
// console.log(arrayFacilities[3]['password']);
// console.log(arrayFacilities[4]['password']);
// console.log(arrayFacilities[5]['password']);
// console.log(arrayFacilities[6]['password']);
// console.log(arrayFacilities[7]['password']);
// console.log(arrayFacilities[8]['password']);
// console.log(arrayFacilities[9]['password']);

let array = ['Vasya', 123, true, [false, 23],{name:'Svjat',team:'Real',car:'Bentley'}];
console.log(array[4]['team']);