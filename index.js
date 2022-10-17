let bill = document.getElementById('bill-inp');
let tipBtn = document.querySelectorAll('.tip');

let billValue = 0.0 //default

bill.addEventListener('input',setBillValue);

function setBillValue(){
    billValue = parseFloat(bill.value);
    if(billValue<0){
        console.log ("Can't be less than zero")
    }
    console.log(billValue)
}

console.log(tipBtn[0].innerHTML);