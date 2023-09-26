const btn = document.getElementById('button1An');
let formulario = document.getElementById('formAn');


 formulario.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando denuncia...';

   const serviceID = 'service_fgrhn3w';
   const templateID = 'template_e4k06ll';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar denuncia';
      alert('Denuncia enviada con éxito');
    }, (err) => {
      btn.value = 'Enviar denuncia';
      alert(JSON.stringify(err));
    });

    formulario.reset();
});