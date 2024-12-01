document.querySelector('#toggle').addEventListener('click', event => {
    document.querySelector('#mobile-menu nav').classList.toggle('active')
    // <nav class="active"></nav>
    document.querySelector('#toggle').classList.toggle('active')
})

const upArrow = document.getElementById('up-arrow-img');

window.addEventListener('scroll',() => {
    if (window.scrollY > 200)
    {
        upArrow.classList.add('visible')
    }
    else{
        upArrow.classList.remove('visible')
    }
});

upArrow.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})