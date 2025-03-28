document.addEventListener("DOMContentLoaded", function() {
    const fisicos = document.querySelectorAll('.fisico');

    fisicos.forEach(fisico => {
        const seta = fisico.querySelector('.seta');
        const texto = fisico.querySelector('p');

        seta.addEventListener('click', function() {
            texto.classList.toggle('show'); // Mostra ou esconde o texto
        });
    });
});
