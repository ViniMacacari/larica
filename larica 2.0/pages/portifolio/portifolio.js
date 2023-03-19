// 1º Semestre

const mostrar = document.querySelector(".pointer")
const modalS1 = document.querySelector(".caixa-baixar")
const closeDialog = document.querySelector(".close")

mostrar.onclick = function() {
    modalS1.showModal()
}

closeDialog.onclick = function () {
    modalS1.close()
  }

// 1º Semestre

// 2º Semestre

const mostrarS2 = document.querySelector("#semestre2")
const modalS2 = document.querySelector("#dialog-download2")
const closeDialogS2 = document.querySelector("#close-dialogS2")

mostrarS2.onclick = function() {
    modalS2.showModal()
}

closeDialogS2.onclick = function () {
    modalS2.close()
  }

  //Download .zip
    function donwloadZipBim2() {
        var url = '../../archives/portifolio/bimestre2/2 Bimestre.zip';
        var a = document.createElement('a');
        a.href = url;
        a.download = '2 Bimestre.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
  //Download .zip

// 2º Semestre

// Verificar tipo de dispositivo

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // redirecionar para a versão móvel do site
  window.location.href = "../mobile/mobile.html";
}

// Verificar tipo de dispositivo