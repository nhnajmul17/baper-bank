
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const newAmountText = inputField.value;
    const newAmount = parseFloat(newAmountText);
    //clear the input field
    inputField.value = '';
    return newAmount;

}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousAmount = parseFloat(totalText);

    const newTotal = (previousAmount) + (amount);
    totalElement.innerText = newTotal;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;

}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    /*   const previousBalanceText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceText); */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = (previousBalanceTotal) + (amount);
        balanceTotal.innerText = newBalanceTotal;

    }
    else {
        const newBalanceTotal = (previousBalanceTotal) - (amount);
        balanceTotal.innerText = newBalanceTotal;
    }


}

// handle deposit button event 

document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposited

    /*     const depositInput = document.getElementById('deposit-amount');
        const newDepositText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositText); */

    //current get and update deposit total

    /*  const depositTotal = document.getElementById('deposit-total');
     const previousDepositText = depositTotal.innerText;
     const previousDepositAmount = parseFloat(previousDepositText);
 
     const newDepositTotal = (previousDepositAmount) + (newDepositAmount);
     depositTotal.innerText = newDepositTotal; */



    //update Account balance

    /* const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = (previousBalanceTotal) + (newDepositAmount);
    balanceTotal.innerText = newBalanceTotal; */

    //clear the deposit input field
    // depositInput.value = '';

    const newDepositAmount = getInputValue('deposit-amount');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);

    }


});


//handle withdraw button event

document.getElementById('withdraw-btn').addEventListener('click', function () {

    /*  const withdrawInput = document.getElementById('withdraw-amount');
     const newWithdrawText = withdrawInput.value;
     const newWithdrawAmount = parseFloat(newWithdrawText); */


    // get and update withdraw Total
    /*   const withdrawTotal = document.getElementById('withdraw-total');
       const previousWithdrawText = withdrawTotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawText);
      const newWithdrawTotal = (previousWithdrawTotal) + (newWithdrawAmount);
      withdrawTotal.innerText = newWithdrawTotal; */



    //update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = (previousBalanceTotal) - (newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal; */


    // withdrawInput.value = '';

    const newWithdrawAmount = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance()
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);

        updateBalance(newWithdrawAmount, false);

    }




})