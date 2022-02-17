function getInputValue(inputId){
    const input = document.getElementById(inputId).value;
    const amount = parseFloat(input); 
    return amount;
}
// const incomeAmountInput = document.getElementById('income-input').value;
// const incomeAmount = parseFloat(incomeAmountInput); 
//handle calculation button
document.getElementById('calculate-btn').addEventListener('click', function (){
    const incomeAmount = getInputValue('income-input'); 
    const foodExpense = getInputValue('food-expense'); 
    const rentExpense = getInputValue('rent-expense'); 
    const clothesExpense = getInputValue('clothes-expense'); 
    const expensesAmount = document.getElementById('total-expenses');
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    expensesAmount.innerText = totalExpenses;
   
    const balance = document.getElementById('balance');
    balance.innerText = incomeAmount - totalExpenses;

})
//handle save button
document.getElementById('save-btn').addEventListener('click', function (){
    const incomeAmount = getInputValue();
    const parcentageInput = document.getElementById('save-input');
    const parcentageInputText = parcentageInput.value;
    const parcentageValue = parseFloat(parcentageInputText);
    const parcentageAmount = parcentageValue / 100;
    const savingAmountValue = incomeAmount * parcentageAmount;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = savingAmountValue;
    console.log(savingAmountValue)
    //remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balance.innerText - savingAmount;


})

