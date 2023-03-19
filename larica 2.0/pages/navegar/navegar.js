// Verificar tipo de dispositivo

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // redirecionar para a versão móvel do site
    window.location.href = "../mobile/mobile.html";
  }

// Verificar tipo de dispositivo