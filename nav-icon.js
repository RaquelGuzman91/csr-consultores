/*se manda a llamar al contenedor padre y el contenedor hijo el hijo contiene los links*/
const headerBg = document.querySelector(".headerNAV");
const panelIsActive = document.querySelector(".nav-panel");
const overlay = document.querySelector(".nav-overlay");
const btn = document.getElementById("menu-btn");
const link = document.getAnimations(".menu_link")


export default function menuHamburger(btnHamburger, panel, menuLink){
    document.addEventListener("click", (e)=> {
        if(e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`) ){
            document.querySelector(panel).classList.toggle("is-active");
            document.querySelector(btnHamburger).classList.toggle("is-active");
            overlay.classList.toggle("is-active"); // activa/desactiva overlay
            btn.classList.toggle('fixed');     // alterna entre normal y fixed

        }
        if(e.target.matches(menuLink)){
             //evita el comportamiento de los enlaces por defecto
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(btnHamburger).classList.remove("is-active");
            overlay.classList.remove("is-active"); // oculta overlay
            btn.classList.toggle('static');     // alterna entre normal y fixed
            btn.classList.remove('fixed');
            //evita el 
            e.preventDefault();
            setTimeout(() => {
                window.location.href = e.target.href;
            }, 400);
        }
        if(e.target.matches(".nav-overlay")){ 
            // si clicas fuera del menú, también se cierra
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(btnHamburger).classList.remove("is-active");
            overlay.classList.remove("is-active");
            btn.classList.remove('fixed');

            /*tiempo*/
            
        }

    });
}

