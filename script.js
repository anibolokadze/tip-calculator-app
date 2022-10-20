let bill = document.getElementById('bill-inp');
let tipBtn = document.querySelectorAll('.tip');
let currentBtn = document.getElementsByClassName("active");
let people = document.getElementById('people-inp');
let custom = document.getElementById('custom');
let reset = document.getElementsByClassName('.reset-btn');
let tipAmount = document.getElementById('tip-amount'); 
let totalTip = document.getElementById('total-tip');

let errorBlock = document.getElementById('error');
let errorBorder = document.getElementById('people-inp')
 //default
bill.addEventListener('input', (e)=> {
    console.log(e.target.value);
});
people.addEventListener('input', (e)=> {
    console.log(e.target.value);
    lessThenZero();
});



const lessThenZero = () => {
    if (+people.value === 0) {
        errorBlock.textContent = "Can't be zero";
        errorBorder.style.border = "2px solid red";
        errorBlock.style.color = "red";
        totalTip.textContent = "$0.00";
        tipAmount.textContent = "$0.00";
        people.value = "";
    } else {
        errorBlock.textContent = "";
        errorBorder.style.border = "none";
    }
};

function calculate(percent){
    if(people.value>0 && bill.value>0){
        const percentCheck = percent.value / 100;
        const tip = bill.value*percentCheck;
        const totalBill = Number(bill.value) + tip;
        tipAmount.innerHTML = ("$" + (tip / people.value).toFixed(2));
        totalTip.innerHTML = ("$" + (totalBill / people.value).toFixed(2));
    }   
}
calculate();

function customCalculate(customPercent){
    if(people.value>0 && bill.value>0){
        const percentCheck = customPercent.value / 100;
        const tip = bill.value*percentCheck;
        const totalBill = Number(bill.value) + tip;
        tipAmount.innerHTML = ("$" + (tip / people.value).toFixed(2));
        totalTip.innerHTML = ("$" + (totalBill / people.value).toFixed(2));
    }
}
customCalculate();

// reset
function resetAll() {
    bill.value = 0;
    people.value = 0;
    custom.value = 'Custom';
    tipAmount.textContent = "$0.00";
    totalTip.textContent = "$0.00";
}
resetAll();