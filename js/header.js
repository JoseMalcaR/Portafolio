// Header scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let scrollThreshold = 50; // Pixels para activar el efecto
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Si estamos en la parte superior de la página, siempre mostrar el header
        if (scrollTop <= scrollThreshold) {
            header.classList.remove('header--hidden');
            header.classList.add('header--visible');
        }
        // Si scrolleamos hacia abajo, ocultar header
        else if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            header.classList.add('header--hidden');
            header.classList.remove('header--visible');
        }
        // Si scrolleamos hacia arriba, mostrar header
        else if (scrollTop < lastScrollTop) {
            header.classList.remove('header--hidden');
            header.classList.add('header--visible');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Inicializar como visible
    header.classList.add('header--visible');
});
