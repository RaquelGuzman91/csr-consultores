function crearSliders () {
    const sliders = document.getElementById("customers-slider");
    sliders.innerHTML = `
         <section id="image-carousel" class="splide splide2" id="splide" aria-label="Beautiful Images">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <img src="img/logo1-bi-banco.png" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo2-cultura-digital.png" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo3-guatemala-antigua.webp" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo4-aceite-ideal.webp" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo5-samboro.jpg" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo6-altamira.png" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo7-byb.png" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo8-ECOMA-LOGO.webp" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo9-made-in-guatemala.webp" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo10-inmobilidaria.png" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo11-isopan.png" alt="">
                    </li>
                    <li class="splide__slide">
                        <img src="img/logo12-cbc.png" alt="">
                    </li>
                </ul>
            </div>
        </section>
    `;
}
crearSliders();