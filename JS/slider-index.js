function crearSliderIndex(){
    const sliderIndex = document.getElementById("image-carousel");
    sliderIndex.innerHTML = `
        <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <img src="./img/banner-contabilidad1.jpg" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="./img/banner-contabilidad5.jpg" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="./img/banner-contabilidad4.avif" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="./img/ContabilidadTablet.jpg" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="./img/juntaContadores.jpg" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="./img/slider-index3.jpg" alt="">
                    </li>
                </ul>
            </div>
    `;
}
crearSliderIndex();