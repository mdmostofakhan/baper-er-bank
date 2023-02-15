/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5 also make sure to convert the input into a number by suing parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.5 set total withdraw amount
5.get the previous balance total
6. calculate new balance total
6.5; set the new balance total


7. clear the input fiekd

*/


// step - 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('withdrae-field');
    const withdrawAmountTotalString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountTotalString);

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithrawTotalString = withdrawTotalElement.innerText;
    const previousWithrawTotal = parseFloat(previousWithrawTotalString);
   
    // step-4 
    const currentWithdrawTotal = previousWithrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step -5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    // step - 7
    withdrawField.value = '';
})