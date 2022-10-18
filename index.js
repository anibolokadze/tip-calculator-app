let bill = document.getElementById('bill-inp');
let tipBtn = document.querySelectorAll('.tip');
let people = document.getElementById('people-inp');

// bill
let billValue = 0.0; //default
bill.addEventListener('input',setBillValue);

function setBillValue(){
    billValue = parseFloat(bill.value);
    if(billValue<0){
        console.log ("Can't be less than zero")
    }
    console.log(billValue)
}

// tip btns
console.log(tipBtn[0].innerHTML);

// number of people
let peopleValue = 0; //default
people.addEventListener('input', setPeopleValue);
function setPeopleValue(){
    peopleValue = parseFloat(people.value)
    console.log(peopleValue);
}


// let qty = document.querySelector("input[name='number']");
// qty.addEventListener("change", function (event) {
//     if (this.value < 1) this.value = 1; // minimum is 1
//     else this.value = Math.floor(this.value); // only integers allowed
// })
