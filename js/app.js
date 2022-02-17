function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const amount = parseFloat(inputText); 
    return amount;
}

//subtract function

function calcExpenses(){
    
    const foodExpense = getInputValue('food-expense'); 
    const rentExpense = getInputValue('rent-expense'); 
    const clothesExpense = getInputValue('clothes-expense');
    if(foodExpense > 0 && foodExpense != isNaN && rentExpense > 0 && rentExpense != isNaN && clothesExpense > 0 && clothesExpense != isNaN){
        const totalExpenses = foodExpense + rentExpense + clothesExpense;
        return totalExpenses;
    } 
    else{
        alert('Please eneter a valid number');
    }
    
}

function remaining(){
    const incomeAmount = getInputValue('income-input');  
    const remainingValue = incomeAmount - calcExpenses();
    return remainingValue;
}

document.getElementById('calculate-btn').addEventListener('click', function (){
    
    const expensesAmount = document.getElementById('total-expenses');
    const totalExpenses = calcExpenses()
    expensesAmount.innerText = totalExpenses;
    //balance calculation
    const incomeAmount = getInputValue('income-input');  
    const balance = document.getElementById('balance');
    if(incomeAmount > 0 && incomeAmount != isNaN && incomeAmount > totalExpenses){
        const remainingValue = remaining(incomeAmount, totalExpenses);
        balance.innerText = remainingValue
    }
    else{
        if(incomeAmount < 0 && incomeAmount != isNaN){
            alert('Please enter a valid number')
        }
        else{
            alert('Your expenses is higher than income')
        }
    }
})
//handle save button
document.getElementById('save-btn').addEventListener('click', function (){
    const incomeAmount = getInputValue('income-input');
    const parcentageInput = getInputValue('save-input')
    if(parcentageInput > 0 && parcentageInput != isNaN){
        const savingAmountValue = (parcentageInput / 100) * incomeAmount; 
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = savingAmountValue;
        //remaining balance
        const remainingBalance = document.getElementById('ramaining-balance');
        const remainingValue = remaining(incomeAmount, calcExpenses());
        if(remainingValue >= savingAmountValue){
        remainingBalance.innerText = remainingValue - savingAmountValue;
        }
        else{
        alert('your savings amount can not exceed your balance');
        }
        }
    else{
        alert('Please enter a valid number')
    }
    
    
})

