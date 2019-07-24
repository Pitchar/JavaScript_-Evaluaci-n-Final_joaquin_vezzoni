var Calculadora = {
  display: document.getElementById('display'),
  cero: document.getElementById('0'),
  uno: document.getElementById('1'),
  dos: document.getElementById('2'),
  tres: document.getElementById('3'),
  cuatro: document.getElementById('4'),
  cinco: document.getElementById('5'),
  seis: document.getElementById('6'),
  siete: document.getElementById('7'),
  ocho: document.getElementById('8'),
  nueve: document.getElementById('9'),
  punto: document.getElementById('punto'),
  on: document.getElementById('on'),
  mas: document.getElementById('mas'),
  menos: document.getElementById('menos'),
  por: document.getElementById('por'),
  dividido: document.getElementById('dividido'),
  igual: document.getElementById('igual'),
  sign: document.getElementById('sign'),
  init: function() {
  this.eventos()
},
  //agrgar todos los numeros.
  eventos: function() {

  Calculadora.animarTecla("0")
  this.uno.addEventListener("click", function() {
  Calculadora.mostrar("0")
  })
  Calculadora.animarTecla("1")
  this.dos.addEventListener("click", function(){
  Calculadora.mostrar("1")
  })
  Calculadora.animarTecla("2")
  this.tres.addEventListener("click", function(){
  Calculadora.mostrar("2")
  })
  Calculadora.animarTecla("3")
  this.uno.addEventListener("click", function() {
  Calculadora.mostrar("3")
  })
  Calculadora.animarTecla("4")
  this.uno.addEventListener("click", function() {
  Calculadora.mostrar("4")
  })
  Calculadora.animarTecla("5")
  this.uno.addEventListener("click", function() {
  Calculadora.mostrar("5")
  })
  Calculadora.animarTecla("6")
  this.uno.addEventListener("click", function() {
  Calculadora.mostrar("6")
  })
  Calculadora.animarTecla("7")
  this.uno.addEventListener("click", function() {
  Calculadora.mostrar("7")
  })
  Calculadora.animarTecla("8")
  this.uno.addEventListener("click", function() {
  Calculadora.mostrar("8")
  })
  Calculadora.animarTecla("9")
  this.uno.addEventListener("click", function() {
  Calculadora.mostrar("9")
  })
  Calculadora.animarTecla("punto")
  this.uno.addEventListener("click", function() {
  var valor = display.textContent
  if (valor.indexOf(".") == -1) {
  display.textContent += "."  
  }
  })






}
