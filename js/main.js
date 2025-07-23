const accordions = document.querySelectorAll('.accordion');

accordions.forEach(element => {
    element.addEventListener('click', function(){

        accordions.forEach(other => {
            if (other !== element) {
                other.classList.remove('active');
                other.nextElementSibling.classList.remove('show');
            }
        })

        element.classList.toggle('active');
        const panel = element.nextElementSibling;
        panel.classList.toggle('show');
    });
});