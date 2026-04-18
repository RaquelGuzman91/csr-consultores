/*script libreria splide SLIDER */

        document.addEventListener('DOMContentLoaded', function () {
            new Splide('.splide', {
                type: 'fade',       // carrusel infinito
                autoplay: true,         // reproducción automática
                interval: 3000,         // tiempo entre slides (ms)
                arrows: false,        // quita flechas de navegación
                pagination: false,        // quita los botones de paginación
                spedd: 900,
            }).mount();
        

        /* segundo slider   ---*/
        new Splide('.splide2', {
                type       : 'loop',
                perPage    : 6,      // número de imágenes visibles al mismo//  tiempo
                perMove    : 1,      // cuántas se mueven por scroll/click
                autoplay   : true,
                arrows     : false,
                pagination : false,
                gap        : '1rem', // espacio entre imágenes
                interval    : 3000,       // tiempo entre cambios (ms)
                pauseOnHover: true,      // no se detiene al pasar el mouse
                breakpoints: {
                890    : { perPage: 4 }, // en pantallas medianas muestra 3
                645 : { perPage: 3 }, // en tablets muestra 2
                480 : { perPage: 2 }, // en móviles muestra 1
            },


            }).mount();

        
        
            new Splide('.splide1', {
                type: 'loop',       // carrusel infinito
                height: '9rem',
                autoplay: true,         // reproducción automática
                interval: 3000,         // tiempo entre slides (ms)
                arrows: false,        // quita flechas de navegación
                pagination: false,        // quita los botones de paginación
                drag: true,       // habilita arrastrar con mouse/touch
                spedd: 900,
            }).mount();
        
        });
   
            
