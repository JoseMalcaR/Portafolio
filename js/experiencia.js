// Datos de experiencia
const experienciaData = {
    utemtx: {
        puesto: "Infraestructure Lead",
        empresa: "@ Utem-Tx",
        fecha: "Marzo 2024 - Julio 2024",
        responsabilidades: [
            "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
            "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
            "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
            "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
        ]
    },
    bobia: {
        puesto: "Desarrollador Backend/ Infrastructure Lead",
        empresa: "@ Bob-Ia",
        fecha: "Agosto 2024 - Diciembre 2024",
        responsabilidades: [
            "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
            "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
            "Architected and implemented the front-end of Apple Music's embeddable web player widget",
            "Contributed extensively to MusicKit.js, Apple's JavaScript SDK"
        ]
    },
    goplicity: {
        puesto: "Desarrollador",
        empresa: "@ Goplicity Spa",
        fecha: "Febrero 2025 - Abril 2025",
        responsabilidades: [
            "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
            "Helped solidify a brand direction for blistabloc that spans both packaging and web",
            "Developed and maintained code standards and documentation for the ongoing project",
            "Interfaced with clients on a weekly basis, providing technological expertise"
        ]
    },
};

document.addEventListener('DOMContentLoaded', function() {
    const empresaItems = document.querySelectorAll('.empresa__item');
    const puestoElement = document.querySelector('.puesto');
    const fechaElement = document.querySelector('.fecha');
    const responsabilidadesList = document.querySelector('.responsabilidades');

    function actualizarContenido(empresaKey) {
        const data = experienciaData[empresaKey];
        
        if (data) {
            // Actualizar contenido
            puestoElement.innerHTML = `${data.puesto} <span class="empresa">${data.empresa}</span>`;
            fechaElement.textContent = data.fecha;
            
            // Limpiar y actualizar responsabilidades
            responsabilidadesList.innerHTML = '';
            data.responsabilidades.forEach(responsabilidad => {
                const li = document.createElement('li');
                li.textContent = responsabilidad;
                responsabilidadesList.appendChild(li);
            });
        }
    }

    function cambiarEmpresaActiva(empresaSeleccionada) {
        // Remover clase activo de todos los items
        empresaItems.forEach(item => item.classList.remove('activo'));
        
        // Agregar clase activo al item seleccionado
        empresaSeleccionada.classList.add('activo');
        
        // Actualizar contenido
        const empresaKey = empresaSeleccionada.getAttribute('data-empresa');
        actualizarContenido(empresaKey);
    }

    // Agregar event listeners a cada empresa
    empresaItems.forEach(item => {
        item.addEventListener('click', function() {
            cambiarEmpresaActiva(this);
        });
    });

    // Inicializar con la primera empresa si existe
    if (empresaItems.length > 0) {
        const primerItem = empresaItems[0];
        const empresaKey = primerItem.getAttribute('data-empresa');
        actualizarContenido(empresaKey);
    }
});
