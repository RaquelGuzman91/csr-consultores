const scriptUrl = 'https://script.google.com/macros/s/AKfycbx9m59V3_UUyVZ37NzbNtfznHEQ1PWVhnolHQ6q7Kn7Y7vieC-qts1KuDTynkP4AGd4/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
            .then(response => Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Envíado",
        icon: "success"}))
            .then( () => { window.location.reload() } )
            .catch(error => console.error('Error', error.message))
})



