// Bloquear botão direito

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);
}); 

// Bloquear botão direito

// Animação quando rolar a tela vir da esq. para dir.

const observer = new IntersectionObserver(entriers => {
    console.log(entriers)

    Array.from(entriers).forEach(entry => {
        if (entry.intersectionRatio >= 0.1) {
            entry.target.classList.add('init-hidden-off', 'animated-div')
        }
    })
    
}, {
    threshold: [0, .1, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})

// Animação quando rolar a tela vir da esq. para dir.

// Animação quando rolar a tela somente opacidade

const observer2 = new IntersectionObserver(entriers => {
    console.log(entriers)

    Array.from(entriers).forEach(entry => {
        if (entry.intersectionRatio >= 0.2) {
            entry.target.classList.add('init-hidden-opacidade-off')
        }
    })
    
}, {
    threshold: [0, .2, 1]
})

Array.from(document.querySelectorAll('.init-hidden-opacidade')).forEach(element => {
    observer2.observe(element)
})

// Animação quando rolar a tela somente opacidade

// Animação quando rolar a tela vir de baixo para cima

const observer3 = new IntersectionObserver(entriers => {
    console.log(entriers)

    Array.from(entriers).forEach(entry => {
        if (entry.intersectionRatio >= 0.2) {
            entry.target.classList.add('init-hidden-cima-off', 'animated-div2')
        }
    })
    
}, {
    threshold: [0, .2, 1]
})

Array.from(document.querySelectorAll('.init-hidden-cima')).forEach(element => {
    observer3.observe(element)
})

// Animação quando rolar a tela vir de baixo para cima

// PopUp Donwnload indisponível

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector("#navegar")
    const modal = document.querySelector("#dialog-download")
    const buttonClose = document.querySelector('#close-popup')
  
    button.onclick = function () {
        modal.showModal()
    }
  
    // Fechar popup
  
    buttonClose.onclick = function () {
      modal.close()
    }
  
  })

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector("#esquerda-end")
    const modal = document.querySelector("#dialog-download")
    const buttonClose = document.querySelector('#close-popup')
  
    button.onclick = function () {
        modal.showModal()
    }
  
    // Fechar popup
  
    buttonClose.onclick = function () {
      modal.close()
    }
  
  })
  
  // PopUp Donwnload indisponível


// AVISOS DE TAMANHO DE TELA -- REMOVER QUANDO DEIXAR A PÁGINA RESPONSIVA //



// AVISOS DE TAMANHO DE TELA -- REMOVER QUANDO DEIXAR A PÁGINA RESPONSIVA //