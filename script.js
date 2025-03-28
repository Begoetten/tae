document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fisico").forEach(fisico => {
        let toggleButton = fisico.querySelector(".toggle-info");
        let info = fisico.querySelector(".info");
        
        // Esconde o texto inicialmente
        info.style.display = "none";

        toggleButton.addEventListener("click", function () {
            // Alterna a visibilidade do texto
            if (info.style.display === "none") {
                info.style.display = "block";
            } else {
                info.style.display = "none";
                .hidden {
                    display: none;
                }
                
            }
        });
    });
});