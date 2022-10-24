const counter50 = document.getElementById("counter50")
const counter100 = document.getElementById("counter100")
const counter200 = document.getElementById("counter200")
const counter500 = document.getElementById("counter500")
const counter1000 = document.getElementById("counter1000")
const counter5000 = document.getElementById("counter5000")
const counterBtn = document.querySelectorAll(".btn")
const counterBtnHundred = document.querySelectorAll(".hundred")
const counterBtnTwoHundred = document.querySelectorAll(".twohundred")
const counterBtnFiveHundred = document.querySelectorAll(".fivehundred")
const counterBtnThousand = document.querySelectorAll(".thousand")
const counterBtnFiveThousand = document.querySelectorAll(".fivethousand")

let result50 = 0;
let result100 = 0;
let result200 = 0;
let result500 = 0;
let result1000 = 0;
let result5000 = 0;


counterBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        if(index === 0 && result50 > 0) {
            result50--;
        } else if(index === 1) {
            result50++;
        }
        counter50.textContent = result50;
        total = counter50.textContent * 50;
    });
});

counterBtnHundred.forEach((el, index) => {
    el.addEventListener('click', () => {
        if(index === 0 && result100 > 0) {
            result100--;
        } else if(index === 1) {
            result100++;
        }
        counter100.textContent = result100;
    });
});

counterBtnTwoHundred.forEach((el, index) => {
    el.addEventListener('click', () => {
        if(index === 0 && result200 > 0) {
            result200--;
        } else if(index === 1) {
            result200++;
        }
        counter200.textContent = result200;
    });
});

counterBtnFiveHundred.forEach((el, index) => {
    el.addEventListener('click', () => {
        if(index === 0 && result500 > 0) {
            result500--;
        } else if(index === 1) {
            result500++;
        }
        counter500.textContent = result500;
    });
});

counterBtnThousand.forEach((el, index) => {
    el.addEventListener('click', () => {
        if(index === 0 && result1000 > 0) {
            result1000--;
        } else if(index === 1) {
            result1000++;
        }
        counter1000.textContent = result1000;
    });
});

counterBtnFiveThousand.forEach((el, index) => {
    el.addEventListener('click', () => {
        if(index === 0 && result5000 > 0) {
            result5000--;
        } else if(index === 1) {
            result5000++;
        }
        counter5000.textContent = result5000;
    });
});


function func() {
    resultfifty = parseInt(result50) * 50;
    resulthundred = parseInt(result100) * 100;
    resulttwohundred = parseInt(result200) * 200;
    resultfivehundred = parseInt(result500) * 500;
    resultthousand = parseInt(result1000) * 1000;
    resultfivethousand = parseInt(result5000) * 5000;
    let num1 = Number(document.getElementById("num1").value);
    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(resultfifty) + parseInt(resulthundred) + parseInt(resulttwohundred) + parseInt(resultfivehundred) + parseInt(resultthousand) + parseInt(resultfivethousand);
    let pc = Number(document.getElementById('pc').value);
    document.getElementById("pcresult").innerHTML = "В ПК: " + pc;
    }
