let bill = document.getElementById('bill-inp');
let people = document.getElementById('people-inp');
let custom = document.getElementById('custom');
let reset = document.getElementsByClassName('.reset-btn');
let tipAmount = document.getElementById('tip-amount'); 
let totalTip = document.getElementById('total-tip');

let peopleErrorBlock = document.getElementById('error-people');
let peopleErrorBorder = document.getElementById('people-inp');
let billErrorBlock = document.getElementById('error-bill');
let billErrorBorder = document.getElementById('bill-inp');
let customErrorBorder = document.getElementById('custom');
let customErrorBlock = document.getElementById('error-custom');

bill.addEventListener('input', (e)=> {
    billLessThenZero();
});
people.addEventListener('input', (e)=> {
    peopleLessThenZero();
});
custom.addEventListener('input',(e)=>{
    customLessThenZero();
});

// tip reset
let tipReset = () => {
    totalTip.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
};

function peopleLessThenZero(){
    if (+people.value === 0) {
        peopleErrorBlock.textContent = "Can't be zero";
        peopleErrorBorder.style.border = "2px solid red";
        peopleErrorBlock.style.color = "red";
        tipReset();
        people.value = "";
    } else {
        peopleErrorBlock.textContent = "";
        peopleErrorBorder.style.border = "none";
    }
};

function billLessThenZero(){
    if (+bill.value === 0) {
        billErrorBlock.textContent = "Can't be zero";
        billErrorBorder.style.border = "2px solid red";
        billErrorBlock.style.color = "red";
        tipReset();
    } else {
        billErrorBlock.textContent = "";
        billErrorBorder.style.border = "none";
    }
};

function customLessThenZero(){
    if (+custom.value === 0) {
        customErrorBlock.textContent = "Can't be zero";
        customErrorBlock.style.color = 'red';
        customErrorBorder.style.border = "2px solid red";
        tipReset();
    } else {
        customErrorBlock.textContent = "";
        customErrorBorder.style.border = "none";
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
};
calculate();

function customCalculate(customPercent){
    if(people.value>0 && bill.value>0){
        const percentCheck = customPercent.value / 100;
        const tip = bill.value*percentCheck;
        const totalBill = Number(bill.value) + tip;
        tipAmount.innerHTML = ("$" + (tip / people.value).toFixed(2));
        totalTip.innerHTML = ("$" + (totalBill / people.value).toFixed(2));
    }
};
customCalculate();

function resetAll() {
    bill.value = 0;
    people.value = 0;
    custom.value = 'Custom';
    tipReset();
    
    peopleErrorBlock.textContent = "";
    peopleErrorBorder.style.border = "none";

    billErrorBlock.textContent = "";
    billErrorBorder.style.border = "none";

    customErrorBlock.textContent = "";
    customErrorBorder.style.border = "none";
};
resetAll();