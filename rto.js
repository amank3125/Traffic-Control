let waitTill = 0;
let timer = document.querySelector('.timer');
let currentLight = 'red';
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
timer.innerHTML = waitTill;
red.style.backgroundColor = 'red';


let stopL = setInterval(stop,1000);
let haltL;
let goL;

console.log('%c Created by Aman', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

function stop(){

    if(waitTill!=0){
    timer.innerHTML = --waitTill;
    } else {
        clearInterval(stopL)
        red.style.backgroundColor = 'red';
        yellow.style.backgroundColor = 'black';
        green.style.backgroundColor = 'black';
        currentLight = 'red'
        waitTill = 11;
        haltL = setInterval(halt,1000);
    }
}
function halt(){

    if(waitTill!=0){
    timer.innerHTML = --waitTill;
    } else {
        clearInterval(haltL)
        red.style.backgroundColor = 'black';
        yellow.style.backgroundColor = 'yellow';
        green.style.backgroundColor = 'black';
        currentLight = 'yellow'
        waitTill = 6;
        goL = setInterval(go,1000);
    }
}
function go(){

    if(waitTill!=0){
    timer.innerHTML = --waitTill;
    } else {
        clearInterval(goL)
        red.style.backgroundColor = 'black';
        yellow.style.backgroundColor = 'black';
        green.style.backgroundColor = 'green';
        currentLight = 'green'
        waitTill = 11;
        stopL = setInterval(stop,1000);
    }
}

