function adivinaElNumero() {
  var maximo = 10;
  var minimo = 0;
  var numeroAlAzar = Math.floor(Math.random() * (maximo - minimo)) + 1;
  var numeroDeUsuario = document.getElementById("input-numero").value;

  if (numeroDeUsuario == numeroAlAzar) {
    document.getElementById("marcador").innerHTML =
      "¡Correcto! el número era " + numeroAlAzar;
  } else {
    document.getElementById("marcador").innerHTML =
      "Incorrecto ): el número era " + numeroAlAzar;
  }
}

function siEsNumeroPrimo() {
  var valorUsuario = document.getElementById("input-numero-primo").value;
  var numero = valorUsuario - 1;
  var residuo = 0;

  while (numero > 1) {
    residuo = valorUsuario % numero;

    if (residuo == 0) {
      document.getElementById("resultado-primo").innerHTML =
        "El numero no es primo.";
      break;
    } else {
      document.getElementById("resultado-primo").innerHTML =
        "El numero es primo.";
    }

    numero = numero - 1;
  }
}

function aMayus() {
  var nombre = document.getElementById("usuario-nombre").value;
  var nombreMayus = "";

  for (i of nombre) {
    var letraMayus = i.toUpperCase();
    nombreMayus = nombreMayus + letraMayus;
  }

  document.getElementById("nombre-mayus").innerHTML = nombreMayus;
}
