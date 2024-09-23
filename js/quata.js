//quata-donate access
document.getElementById('quata-donate-btn').addEventListener('click', function(e){
    e.preventDefault()

    const inputValue = getInputFieldById("quata-input-field")
    const getInnerText = getTextFieldValueById('quata-donate-text')
    const getTotalBalance = getTotalBalanceById('total-balance')
    
    const totalBalance = parseFloat(getTotalBalance)
    const currentValue = parseFloat(inputValue);
    const balance = parseFloat(getInnerText)

    const newBalnce = balance + currentValue;
    
    if ( (currentValue > 0 && currentValue <= totalBalance) && !isNaN(currentValue)){
        alert('donate successfully added')
        document.getElementById('quata-donate-text').innerText = newBalnce;
        document.getElementById('total-balance').innerText = totalBalance - currentValue;
    }else{
        alert('Something is worng went, please try agin')
    }

    document.getElementById('quata-input-field').value = '';
})