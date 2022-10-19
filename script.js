let bill = document.getElementById('bill-inp');
let tipBtn = document.querySelectorAll('.tip');
let people = document.getElementById('people-inp');
let custom = document.getElementById('custom');
let reset = document.getElementsByClassName('.reset-btn');
let tipAmount = document.getElementById('tip-amount'); 
let totalTip = document.getElementById('total-tip');

console.log(bill.value);
// bill
bill.value = 0; //default
// bill.addEventListener('input',setBillValue);

bill.addEventListener('input', (e)=> {
    console.log(e.target.value);
})

people.addEventListener('input', (e)=> {
    console.log(e.target.value);
});

// custom.addEventListener('input', (e)=> {
//     console.log(e.target.value);
// });



// function setBillValue(){
//     bill = parseFloat(bill.value);
//     if(bill<0){
//         console.log ("Can't be less than zero")
//     }
  
// }
// get tip value 
// function tipValue(element) {
//     tipBtn = element.value;
//     console.log(tipBtn);
// }
// number of people
// let peopleValue = 0; //default
// people.addEventListener('input', setPeopleValue);
// function setPeopleValue(){
//     peopleValue = parseFloat(people.value)
//     console.log(peopleValue);
// }
//custom tip
// let customValue = 0; //default
// custom.addEventListener('input', setCustomValue);
// function setCustomValue(){
//     customValue = parseFloat(custom.value)
    
// }

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

// let qty = document.querySelector("input[name='number']");
// qty.addEventListener("change", function (event) {
//     if (this.value < 1) this.value = 1; // minimum is 1
//     else this.value = Math.floor(this.value); // only integers allowed
// })



