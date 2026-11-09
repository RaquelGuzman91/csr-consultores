import { data } from "./data.js";

function crearFooter (){
    const footer = document.getElementById("footer");
    footer.innerHTML = `
         <article class="contaier-footer">
            <div class="footer-header">
                <div class="img">
                    <a href="${data.estructura.img}"><img src="${data.estructura.img}" alt="csr consultores"></a>
                </div>
                <h2>¿Deseas iniciar tu empresa, nosotros te apoyamos con lo administrativo <span>${data.info.telefono}</span></h2>
            </div>
            <div class="footer-nav">
                <article class="footer-card"><a href="">&copy;2025 Copyrights by diseño web Guatemala</a></article>
                <article class="footer-networks">
                    <a class="networks" href="${data.redes.facebook}" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a class="networks" href="${data.redes.location}" target="_blank"><i class="fa-solid fa-location-dot"></i></a>
                    <a class="networks" href="${data.redes.correo}" target="_blank"><i class="fa-regular fa-envelope"></i></a>
                    <a class="networks" href="${data.redes.whatssapp}" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                </article>
                <article class="footer-card-im">
                    <a href="${data.estructura.img}"><img src="${data.estructura.img}" alt="csr consultores"></a>
                </article>
            </div>
        </article>
    `; 
}
crearFooter();