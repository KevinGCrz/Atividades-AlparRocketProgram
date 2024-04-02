const title = document.querySelector('.back-video')

document.addEventListener('scroll', function(){
    let value = window.scrollY

        title.style.marginTop = value + 'px'

})