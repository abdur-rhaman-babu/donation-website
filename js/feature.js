// history 
document.getElementById('history-btn').addEventListener('click', function(){
    getSectionById('donate-history')
    document.getElementById('history-btn').classList.add('bg-[#B4F461]')
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]')
})

// donate-section
document.getElementById('donation-btn').addEventListener('click', function(){
    getSectionById('donate-section')
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]')
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
})

// faq section
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = '/faq.html';
})




