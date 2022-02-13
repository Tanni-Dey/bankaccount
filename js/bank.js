document.getElementById('user-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userPass = document.getElementById('user-password');
    if (userEmail.value == 'paromita@email.com' && userPass.value == 'paromita') {
        window.location.href = 'bank.html'
        // console.log("dfgh");
    }
    else {
        alert('Invalid Email and Password');
    }
})


//bank.html
/* function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputText = parseFloat(input.value);
    input.value = '';
    return inputText;
}
function balanceF() {


}
function updateBalance(field, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    if (isAdd == true) {
        balanceTotal.innerText = field + parseFloat(balanceTotal.innerText);
    }
    else {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - field;
    }
}
function totalValue(totalFieldId, totalInput) {
    const depositValue = document.getElementById(totalFieldId);
    depositValue.innerText = parseFloat(depositValue.innerText) + totalInput;
}

document.getElementById('deposit-submit').addEventListener('click', function () {
    const depositField = getInput('deposit');
    if (depositField > 0) {
        totalValue('deposit-value', depositField);
        updateBalance(depositField, true);
    }
    //const balanceTotal = document.getElementById('balance-total');
    //depositValue.innerText = depositField.value;
    // depositValue.innerText = parseFloat(depositValue.innerText) + parseFloat(depositField.value);
    //depositValue.innerText = parseFloat(depositValue.innerText) + depositField;
    // balanceTotal.innerText = depositField + parseFloat(balanceTotal.innerText);

    // depositField.value = '';
    // console.log('first')
})
document.getElementById('withdraw-submit').addEventListener('click', function () {
    //const withdrawField = document.getElementById('withdraw');
    const withdraw = getInput('withdraw');
    const balance = parseFloat(document.getElementById('balance-total').innerText);
    if (withdraw > 0 && balance > withdraw) {
        totalValue('withdraw-total', withdraw);
        updateBalance(withdraw, false);
    }
    else {
        console.log('yt');
    }
    // const withdrawValue = document.getElementById('withdraw-total');
    //depositValue.innerText = depositField.value;
    // withdrawValue.innerText = parseFloat(withdrawValue.innerText) + withdraw;
    //balanceTotal.innerText = parseFloat(balanceTotal.innerText) - withdraw;

    // withdrawField.value = '';
    // console.log('first')
}) */