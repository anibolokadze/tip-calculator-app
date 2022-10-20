let bill = document.getElementById('bill-inp');
let tipBtn = document.querySelectorAll('.tip');
let btnContainer = document.getElementsByClassName('.tips-wrapper');
let currentBtn = document.getElementsByClassName("active");

let people = document.getElementById('people-inp');
let custom = document.getElementById('custom');
let reset = document.getElementsByClassName('.reset-btn');
let tipAmount = document.getElementById('tip-amount'); 
let totalTip = document.getElementById('total-tip');


bill.value = 0; //default
bill.addEventListener('input', (e)=> {
    console.log(e.target.value);
})

people.addEventListener('input', (e)=> {
    console.log(e.target.value);
});


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
function resetColors() {
    let j = 0;
    for (j = 0; j < currentBtn.length - 1; j++) {
      if (currentBtn[j].style.backgroundColor = "var(--strong-cyan)") {
        currentBtn[j].style.backgroundColor = "var(--very-dark-cyan)";
      }
    }
}
function resetAll(resetButton) {
    tipAmount.textContent = "$0.00";
    totalTip.textContent = "$0.00";
    bill.value = 0;
    people.value = 0;
    custom.value = 'Custom';
    resetColors();
};
resetAll();















// add active class to current btn elements
for (let i = 0; i < tipBtn.length; i++) {
    tipBtn[i].addEventListener("click", function() {
    // If there's no active class
    if (currentBtn.length > 0) {
      currentBtn[0].className = currentBtn[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
};








// let qty = document.querySelector("input[name='number']");
// qty.addEventListener("change", function (event) {
//     if (this.value < 1) this.value = 1; // minimum is 1
//     else this.value = Math.floor(this.value); // only integers allowed
// })



