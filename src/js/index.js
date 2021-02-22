import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')





let number = 0;

const add = () => {
    number++;
    document.body.textContent = `Aktualny stan licznika to ${number}`;
}
document.addEventListener('click', add);

function x() {
    let digit = 0;
    function y() {
        console.log(`%c Wyświetlam: ${digit}`, "color: red;");
    }
    return y;
}
const example = x();
example();



