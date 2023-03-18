function getValueFromInputField(id) {
    const inputFieldElement = document.getElementById(id);
    const inputFieldString = inputFieldElement.value;
    const inputFieldNumeric = parseFloat(inputFieldString);
    if (isNaN(inputFieldNumeric)) {
        return;
    }
    return inputFieldNumeric;
}

function getValueFromElement(id) {
    const element = document.getElementById(id);
    const elementString = element.innerText;
    const elementNumeric = parseFloat(elementString);
    if (isNaN(elementNumeric)) {
        return;
    }
    return elementNumeric;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const salaryNumeric = getValueFromInputField('salary');
    const foodNumeric = getValueFromInputField('food');
    const rentNumeric = getValueFromInputField('rent');
    const clothesNumeric = getValueFromInputField('clothes');
    if (salaryNumeric < 0 || foodNumeric < 0 || rentNumeric < 0 || clothesNumeric < 0) {
        alert('Please provide a positive integer number.');
        return;
    }
    else if (typeof salaryNumeric !== 'number' || typeof foodNumeric !== 'number' || typeof rentNumeric !== 'number' || typeof clothesNumeric !== 'number') {
        alert('Please provide a numeric value.');
        return;
    }
    const totalExpense = foodNumeric + rentNumeric + clothesNumeric;
    if (totalExpense > salaryNumeric) {
        alert('Your expense has exceeded your salary!');
        return;
    }
    if (isNaN(totalExpense)) {
        return;
    }

    const remainingBalance = salaryNumeric - totalExpense;
    if (isNaN(remainingBalance)) {
        return;
    }

    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.innerText = totalExpense;
    const remainingBalanceElement = document.getElementById('balance-left');
    remainingBalanceElement.innerText = remainingBalance;
})

document.getElementById('btn-save').addEventListener('click', function () {
    const saveNumeric = getValueFromInputField('save');
    const saveNumericPercent = parseFloat(saveNumeric / 100);
    const salaryNumeric = getValueFromInputField('salary');
    const remainingAfterSaving = (parseFloat(salaryNumeric * saveNumericPercent)).toFixed(2);

    const totalSaving = document.getElementById('saving-amount');
    totalSaving.innerText = remainingAfterSaving;

    const remainingNumeric = getValueFromElement('balance-left');
    const remainingBalanceAfterSaving = remainingNumeric - remainingAfterSaving;
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingBalanceAfterSaving;
})