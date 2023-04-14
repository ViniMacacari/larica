// Retrair login/signup 
const btnMostrarDiv = document.getElementById('inscrever-se')
const minhaDiv = document.getElementById('signup-div')
const divLogin = document.getElementById('login-div')
const btnSignup = document.getElementById('ja-tem-conta')
const cadastrado = document.getElementById('cadastrado')
var donwloadLiberado = 0

btnMostrarDiv.addEventListener('click', function() {
  if (minhaDiv.style.display === 'none') {
    minhaDiv.style.display = 'flex';
    divLogin.style.display = 'none';
  } else {
    minhaDiv.style.display = 'flex';
    divLogin.style.display = 'none';
  }
});

btnSignup.addEventListener('click', function() {
    if (minhaDiv.style.display === 'none') {
      minhaDiv.style.display = 'none';
      divLogin.style.display = 'flex';
    } else {
      minhaDiv.style.display = 'none';
      divLogin.style.display = 'flex';
    }
  });
// Retrair login/signup 

// Verificar e-mail

const botaoEntrar = document.getElementById("botao-entrar");
const inputEmail = document.getElementById("input-email-ver");
const inputSenha = document.getElementById("input-senha-ver");

botaoEntrar.addEventListener("click", function() {
  const email = inputEmail.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se o e-mail é válido
  if (!regex.test(email)) {
    console.log("E-mail inválido");
    return;
  }

  // Verifica se a senha tem 8 caracteres
  const senha = inputSenha.value;
  if (!senha) {
    console.log("Por favor, insira uma senha");
  } else if (senha.length >= 8) {

    //Teste-demonstração (excluir quando db estiver pronta)
    if (email === "vinicius@larica.com" && senha === "vinicius") {
      minhaDiv.style.display = 'none';
      divLogin.style.display = 'none';
      cadastrado.style.display = 'flex';
      donwloadLiberado = 1;
      console.log("Bem vindo vini");
      return;
    }
    //Teste-demonstração (excluir quando db estiver pronta)

    console.log("Senha válida");
  } else {
    console.log("Senha muito curta");
  }
});

// Verificar e-mail

// PopUp Donwnload indisponível

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector("#baixar-windows")
  const modal = document.querySelector("#dialog-download")
  const buttonClose = document.querySelector('#close-popup')

  button.onclick = function () {
    // Remover esse "if" depois caso necessário e mantenha o modal.showModal()
    if (donwloadLiberado === 1) {
      console.log("Donwload Disponível")
    } else {
      modal.showModal()
    }
  }

  // Fechar popup

  buttonClose.onclick = function () {
    modal.close()
  }

})

// PopUp Donwnload indisponível

document.addEventListener('DOMContentLoaded', function() {
  const buttonMac = document.querySelector("#baixar-mac")
  const modalMac = document.querySelector("#dialog-mac")
  const buttonCloseMac = document.querySelector('#close-popupMac')

  buttonMac.onclick = function () {
    // Remover esse "if" depois caso necessário e mantenha o modal.showModal()
    if (donwloadLiberado === 1) {
      modalMac.showModal()
    } else {
      modalMac.showModal()
    }
  }

  // Fechar popup

  buttonCloseMac.onclick = function () {
    modalMac.close()
  }

})

// Verificar tipo de dispositivo

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // redirecionar para a versão móvel do site
  window.location.href = "../mobile/mobile.html";
}

// Verificar tipo de dispositivo