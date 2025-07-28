// Datos de experiencia
const experienciaData = {
    utemtx: {
        puesto: "Infraestructure Lead & DevOps -",
        empresa: "@ Utem-Tx",
        fecha: "Marzo 2024 - Julio 2024",
        responsabilidades: [
"En el proyecto Utemtx desarrollamos una aplicación móvil y una página web de trading. Me desempeñé como líder de infraestructura y DevOps, siendo responsable de:" ,
"Administrar la infraestructura en Google Cloud Platform (GCP)." ,
"Implementar y mantener un entorno de microservicios en Kubernetes, utilizando GitHub Actions (Workflows) para la automatización del despliegue. ",
"Dockerizar los microservicios, gestionando sus imágenes a través de Artifactory Registry.",
" Hostear la página web en Firebase Hosting.",
" Diseñar e implementar el flujo CI/CD asegurando integraciones y despliegues automatizados y eficientes.",
" Este rol me permitió aplicar buenas prácticas de DevOps y escalar la infraestructura de forma segura y automatizada para un producto en constante desarrollo."
        ]
    },
    bobia: {
        puesto: "Desarrollador Backend/ Infrastructure Lead - ",
        empresa: "@ Bob-Ia",
        fecha: "Agosto 2024 - Diciembre 2024",
        responsabilidades: [
            "En Bob IA(Prueba de concepto / trabajo de titulo), un motor de busqueda para Sodimac Argentina, desempeñé múltiples roles clave en el desarrollo de la solución:",

            "Lideré la infraestructura del proyecto utilizando Google Cloud Platform (GCP).",

            "Desarrollé e implementé microservicios backend en Python, los cuales fueron dockerizados y desplegados en Kubernetes.",

            "Automatización del flujo de integración y despliegue continuo (CI/CD) mediante GitHub Actions, con almacenamiento de imágenes en Artifactory Registry.",

            "Hosteamos el frontend del proyecto en Firebase Hosting.",

            "Implementé e integré un modelo de inteligencia artificial de la familia Gemini a través de Model Garden en Vertex AI, permitiendo capacidades avanzadas de procesamiento del lenguaje natural.",

            "Esta experiencia me permitió combinar habilidades de desarrollo backend, DevOps e inteligencia artificial en un entorno cloud escalable y automatizado."
        ]
    },
    goplicity: {
        puesto: "Desarrollador",
        empresa: "@ Goplicity Spa",
        fecha: "Febrero 2025 - Abril 2025",
        responsabilidades: [
            "Durante mi práctica profesional en Goplicity SpA, trabajé como desarrollador fullstack, contribuyendo tanto en el backend como en el frontend de la plataforma de la empresa:.",

            "Desarrollé APIs REST en Java 18 con Spring Boot, trabajando en la lógica de negocio y manejo de datos.",

            "Realicé mantenimiento y corrección de bugs en módulos del frontend desarrollados con AngularJS.",

            "Utilicé herramientas como Wrike para la gestión de tareas, y Postman para pruebas de APIs.",

            "Aprendí y apliqué nuevas tecnologías y buenas prácticas en un entorno profesional, colaborando con equipos multidisciplinarios.",

            "Esta experiencia me permitió afianzar mis conocimientos en desarrollo backend, resolver problemas reales en producción y mejorar mi capacidad para trabajar con tecnologías modernas en proyectos reales."
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
