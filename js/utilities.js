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


// donation history
function donationHistory (currentValue, paragraph){
    const p = document.createElement('p')
        p.innerHTML = `<p class= "text-3xl font-bold my-4">${currentValue} ${paragraph} </p>`
        document.getElementById('history').appendChild(p)
        
        // history date
        const para = document.createElement('p')
        const d = new Date()
        para.innerHTML = `<p class ="text-2xl font-bold mb-10">${d}</p>`
        document.getElementById('history').appendChild(para)
}