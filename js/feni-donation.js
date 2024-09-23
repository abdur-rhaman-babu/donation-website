//feni donate access
document.getElementById('feni-donate-btn').addEventListener('click', function(e){
    e.preventDefault()

    const inputValue = getInputFieldById("feni-input-field")
    const getInnerText = getTextFieldValueById('feni-donate-text')
    const getTotalBalance = getTotalBalanceById('total-balance')
    
    const totalBalance = parseFloat(getTotalBalance)
    const currentValue = parseFloat(inputValue);
    const balance = parseFloat(getInnerText)

    const newBalnce = balance + currentValue;
    
    if ( (currentValue > 0 && currentValue <= totalBalance) && !isNaN(currentValue)){
        alert('donate successfully added')
        document.getElementById('feni-donate-text').innerText = newBalnce;
        document.getElementById('total-balance').innerText = totalBalance - currentValue;

        donationHistory(currentValue, "Tk. Donate for Flood Relief in Feni,Bangladesh")
    }else{
        alert('Something is worng went, please try agin')
    }

    document.getElementById('feni-input-field').value = '';
})