import { data } from "./data.js";

function crearIcono (){
    const icono = document.getElementById("floating-icon");
    icono.innerHTML = `
        <a href="${data.redes.whatssapp}" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
    `;
}
crearIcono();               