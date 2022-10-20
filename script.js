let bill = document.getElementById('bill-inp');
let tipBtn = document.querySelectorAll('.tip');
let currentBtn = document.getElementsByClassName("active");
let people = document.getElementById('people-inp');
let custom = document.getElementById('custom');
let reset = document.getElementsByClassName('.reset-btn');
let tipAmount = document.getElementById('tip-amount'); 
let totalTip = document.getElementById('total-tip');

let peopleErrorBlock = document.getElementById('error-people');
let peopleErrorBorder = document.getElementById('people-inp');

let billErrorBlock = document.getElementById('error-bill');
let billErrorBorder = document.getElementById('bill-inp');

let customErrorBlock = document.getElementById('error-custom');
let customErrorBorder = document.getElementById('custom');
 //default
bill.addEventListener('input', (e)=> {
    console.log(e.target.value);
    billLessThenZero();
});
people.addEventListener('input', (e)=> {
    console.log(e.target.value);
    peopleLessThenZero();
});
custom.addEventListener('input',(e)=>{
    customLessThenZero();
})


function RestrictFirstZero(e) {
    if (e.srcElement.value.length == 0 && e.which == 48) {
        e.preventDefault();
        return false;
    }
};




function peopleLessThenZero(){
    if (+people.value === 0) {
        peopleErrorBlock.textContent = "Can't be zero";
        peopleErrorBorder.style.border = "2px solid red";
        peopleErrorBlock.style.color = "red";
        totalTip.textContent = "$0.00";
        tipAmount.textContent = "$0.00";
        people.value = "";
    } else {
        peopleErrorBlock.textContent = "";
        peopleErrorBorder.style.border = "none";
    }
}

function billLessThenZero(){
    if (+bill.value === 0) {
        billErrorBlock.textContent = "Can't be zero";
        billErrorBorder.style.border = "2px solid red";
        billErrorBlock.style.color = "red";
        totalTip.textContent = "$0.00";
        tipAmount.textContent = "$0.00";
        bill.value = "";
    } else {
        billErrorBlock.textContent = "";
        billErrorBorder.style.border = "none";
    }
}

function customLessThenZero(){
    if (+custom.value === 0) {
        customErrorBlock.textContent = "Can't be zero";
        customErrorBorder.style.border = "2px solid red";
        customErrorBlock.style.color = "red";
        totalTip.textContent = "$0.00";
        tipAmount.textContent = "$0.00";
        bill.value = "";
    } else {
        customErrorBlock.textContent = "";
        customErrorBorder.style.border = "none";
    }
}





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
    
    peopleErrorBlock.textContent = "";
    peopleErrorBorder.style.border = "none";

    billErrorBlock.textContent = "";
    billErrorBorder.style.border = "none";


}
resetAll();