const tipBtns = document.querySelectorAll('.tipBtn');
const billValue = document.querySelector('#bill');
const numPerson = document.querySelector('#num-people');
const btCustom = document.querySelector('#bt-custom');

let tipValue = 15; //default

function calculateTip(){
    let bill = Number(billValue.value)
    let num = Number(numPerson.value);
    let tipAmount = (bill*(tipValue/100))/num
    return Number(tipAmount.toFixed(2));
}

function calculateBill(){
    let bill = Number(billValue.value)
    let num = Number(numPerson.value);
    let total = (bill / num) 
    return Number(total.toFixed(2))
}

function updateTip() {
    document.querySelector('#tip-amount-person').innerText = `$${calculateTip()}`
}

function billAmountPerson(){
    document.querySelector('#bill-amount-person').innerText = '$'+ (calculateBill() + calculateTip()).toFixed(2);
}

function calculateTotal(){
    updateTip();
    billAmountPerson();
}

function reset(){
    document.querySelector('#bill-amount-person').innerText = '$0.00'
    document.querySelector('#tip-amount-person').innerText = '$0.00'
    document.querySelector('.price-box').value = 0;
    document.querySelector('#num-people').value = 0;
    document.querySelector('.btn-active').classList.remove('btn-active');
    document.querySelector('#bt-custom').value = 0;
}

tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick)
    btn.addEventListener('click', calculateTotal)
})

function handleClick(event){
    event.preventDefault();

    tipBtns.forEach(btn => {

        //Clear input custom
        btCustom.value = '';
        //remove active state
        btn.classList.remove('btn-active');

        //set active state
        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btn-active');

                if( btCustom.value != 0 ){
                    tipValue = parseFloat(btn.innerHTML).toFixed(2) // Caso o bt custom não esteva zerado
            
                }else
                    tipValue = parseFloat(btn.innerHTML).toFixed(2); // transforma os 15% em número retirando o %
                

        }
    })
    
}

