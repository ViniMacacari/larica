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