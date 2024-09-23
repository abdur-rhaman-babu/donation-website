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
    document.getElementById('blog-btn').classList.add('hidden')
    document.getElementById('home-btn').classList.remove('hidden')
    document.getElementById('faq-section').classList.remove('hidden')
    document.getElementById('donate-history').classList.add('hidden')
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('primary-btn').classList.add('hidden')

})

document.getElementById('home-btn').addEventListener('click', function(){
    document.getElementById('blog-btn').classList.remove('hidden')
    document.getElementById('home-btn').classList.add('hidden')
    document.getElementById('faq-section').classList.add('hidden')
    document.getElementById('donate-history').classList.add('hidden')
    document.getElementById('donate-section').classList.remove('hidden')
    document.getElementById('primary-btn').classList.remove('hidden')
})


