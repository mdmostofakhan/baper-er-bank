// stop-1: add event listener to the deposit
document.getElementById('btn-deposit').addEventListener('click', function () {
// step-2: get the amount frim the doposit input field (24)
// For input field use .value to the value insite the input field
    const dopositeField = document.getElementById('deposit-field');
    const newdopositeAmoutString = dopositeField.value;
    const newDopositeAmout = parseFloat(newdopositeAmoutString);
    
// step-3: get the courrent doposit total (23)
// for non-input (element other then input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('doposit-total');
    const previousDopositTotalString = depositTotalElement.innerText;
    const previousDopositTotal = parseFloat(previousDopositTotalString);

// step-4: add numbers to set the total deposite
    const curretDopositTotal = previousDopositTotal + newDopositeAmout;
// set the deposit total
    depositTotalElement.innerText = curretDopositTotal;

// step - 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-6: calculate current total balance
    const courrentBalanceTotal = previousBalanceTotal + newDopositeAmout;
    // set the deposit total
    balanceTotalElement.innerText = courrentBalanceTotal;

    // step-7: clear the deposit field
    dopositeField.value = '';
})