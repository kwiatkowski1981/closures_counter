import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const timer = document.querySelector('.timer');

const countSecs = () => {
    let number = 0;

    function counter(){
        number++;
        console.log(number);
        timer.textContent = `${number < 10 ? '0'+ number: number} sekund`;

    }
    return counter;
}
const count = countSecs();
setInterval(count, 1000);


// let counter = 0;
// const startCounter = () => {
//     counter++
//     console.log(counter);
//     document.body.textContent = ` ${counter} sekund`;
// }
//
// setInterval(startCounter, 1000);


// const user = (name ="", age) => {
//
// let userName = name;
// let userAge = age;
//
// function showName()  {
//     console.log(` Cześć %c${userName}%c, ${userAge >= 18 ? 'Możesz sobie kupić piwko' : 'Nie możesz kupić jeszcze browarka hyh'}`, "color: red", "");
//     }
//     return showName;
// }
// const mieszko = user("Mieszko", 20);
// const jagienka = user("Jagienka", 16);
// mieszko();
// jagienka();
// const noName = user();
// noName();
// został przekazany pusty string jako imie i undefined jako wiek. undefined jako false ma 0 a 0 nie jest większe od 18 i zwracamy odpowiedz drugą.

// const add = (start = 0) => {
//
//     let number = start;
//     return ()=> {
//         number++;
//         document.body.textContent = `Aktualny stan licznika to kliknięć to ${number}`;
//     }
// }
// const counter = add();
//
// document.addEventListener('click', counter);



// let number = 0;
//
// const add = () => {
//     number++;
//     document.body.textContent = `Aktualny stan licznika to ${number}`;
// }
// document.addEventListener('click', add);

function x() {
    let digit = 0;
    function y() {
        console.log(`%c Wyświetlam: ${digit}`, "color: red;");
    }
    return y;
}
const example = x();
example();



