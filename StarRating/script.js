document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star')
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const  index = star.getAttribute('data-index');
            for(i=0; i<stars.length; i++) {
                console.log('hi', index)
                if(i < index) {
                    stars[i].classList.add('active');
                } else {
                    stars[i].classList.remove('active')
                }
            }
        })
    })
})

