// Bloquear botão direito

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);
}); 

// Bloquear botão direito

// Verificar tipo de dispositivo

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = "../mobile/mobile.html";
  }

// Verificar tipo de dispositivo

//GitHub e Linkedin Vini
document.getElementById("gitvini").addEventListener("click", function(){
    window.open("https://github.com/ViniMacacari", "_blank");
})
document.getElementById("linkedinvini").addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/vinicius-macacari-de-almeida-bb7855243/", "_blank");
});

//GitHub Thiago
document.getElementById("gitrizzato").addEventListener("click", function(){
    window.open("https://github.com/ThiagoRizzato", "_blank")
})

//GitHub Lucas
document.getElementById("gitlucas").addEventListener("click", function(){
    window.open("https://github.com/Lucascarvalho2503", "_blank");
});


// Exibir dialogo

// PopUp Sobre indisponível

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector("#dialog-sobre")
    var sobre = document.querySelector(".aviso-popup")
    const lucas = document.querySelector("#img-lucas")
    const thiago = document.querySelector("#img-rizzato")
    const vinicius = document.querySelector("#img-vinicius")
    const buttonClose = document.querySelector('#close-popup')
  
    lucas.onclick = function () {
        sobre.innerHTML = "Modelista: Criação de Interfaces (Aplicativo). <br> Desenvolvedor Back-end: Desenvolvimento utilizando Java.";
        modal.showModal()
    }

    thiago.onclick = function () {
        sobre.innerHTML = "Analista de Processos: <br> Cria, analisa e finaliza os processos do projeto.";
        modal.showModal()
    }

    vinicius.onclick = function () {
        sobre.innerHTML = "Desenvolvedor Front-end: <br> Desenvolvimento utilizando HTML, CSS e JavaScript. <br> Desenvolvedor Back-end: Desenvolvimento utilizando Java.";
        modal.showModal()
    }
  
    // Fechar popup
  
    buttonClose.onclick = function () {
      modal.close()
    }
  
  })
