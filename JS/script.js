function calcular() {
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;
  var magreza = document.getElementById("magreza")
  var normal = document.getElementById("normal")
  var sobrepeso = document.getElementById("sobrepeso")
  var obesidade = document.getElementById("obesidade")
  var obesidadeGrave = document.getElementById("obesidade-grave")

  imc = peso / (altura * altura);
  document.getElementById("result").innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;

  if (imc < 18.5) {magreza.style.color = "red"}
  if (imc > 18.5 && imc < 24.9) {normal.style.color = "red"}
  if (imc > 25 && imc < 29.9) {sobrepeso.style.color = "red"}
  if (imc > 30 && imc < 39.9) {obesidade.style.color = "red"}
  if (imc > 40) {obesidadeGrave.style.color = "red"}
}

