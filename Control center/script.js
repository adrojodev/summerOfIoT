// Funciones LED
function controlLEDEncender() {
  var ref = firebase
    .database()
    .ref()
    .child("LED");

  document.getElementById("botonEncender").style.backgroundColor = "#F4D450";
  document.getElementById("botonEncender").style.color = "white";
  document.getElementById("botonApagar").style.backgroundColor = "white";
  document.getElementById("botonApagar").style.color = "black";
  document.getElementById("cardLEDTitle").innerHTML = "ON";
  ref.set("ON");
}
function controlLEDApagar() {
  var ref = firebase
    .database()
    .ref()
    .child("LED");

  document.getElementById("botonEncender").style.backgroundColor = "white";
  document.getElementById("botonEncender").style.color = "black";
  document.getElementById("botonApagar").style.backgroundColor = "#3B008D";
  document.getElementById("botonApagar").style.color = "white";
  document.getElementById("cardLEDTitle").innerHTML = "OFF";
  ref.set("OFF");
}
//Funciones Servo
function controlServo(val) {
  document.getElementById("valorAnguloServo").innerHTML = val + "&deg;";
}
function controlServoVariable(val) {
  var ref = firebase
    .database()
    .ref()
    .child("anguloServo");

  ref.set(val);
}

// Funciones agua

var ref = firebase
  .database()
  .ref()
  .child("valorAgua");

ref.on("value", function(snapshot) {
  document.getElementById("waterTitle").innerHTML = snapshot.val();
  if (document.getElementById("waterTitle").innerHTML == "Hay agua") {
    document.getElementById("waterTitle").innerHTML = "Hay agua";
    document.getElementById("cardWater").style.gridTemplateRows =
      "1fr 0fr 10fr";
  } else {
    document.getElementById("waterTitle").innerHTML = "No hay agua";
    document.getElementById("cardWater").style.gridTemplateRows =
      "1fr 10fr 1fr";
  }
});

//Funciones boton

var ref = firebase
  .database()
  .ref()
  .child("valorBoton");

ref.on("value", function(snapshot) {
  document.getElementById("cardBotonTitle").innerHTML = snapshot.val();

  if (document.getElementById("cardBotonTitle").innerHTML == "Unpushed") {
    document.getElementById("botonImage").style.backgroundImage =
      "url('images/boton1.png')";
  } else {
    document.getElementById("botonImage").style.backgroundImage =
      "url('images/boton2.png')";
  }
});
