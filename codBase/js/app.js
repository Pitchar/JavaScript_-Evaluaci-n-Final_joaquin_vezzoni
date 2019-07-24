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
  eventos: function() {
  //agrgar todos los numeros.
  Calculadora.animarTecla("1");
  this.uno.addEventListener('click', function() {
    Calculadora.mostrar("1")
  })
