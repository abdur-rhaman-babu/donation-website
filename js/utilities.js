// access all input field
function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

// access all innterText
function getTextFieldValueById(id){
    const getInnerText = document.getElementById(id).innerText;
    return getInnerText;
}

// remaing total balance
function getTotalBalanceById (id){
    const getTotalBalance = document.getElementById(id).innerText;
    return getTotalBalance;
}

// show section
function getSectionById(id){
    document.getElementById('donate-history').classList.add('hidden')
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}

