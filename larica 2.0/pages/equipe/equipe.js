// Bloquear botão direito

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);
}); 

// Bloquear botão direito