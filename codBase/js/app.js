var termino=0;
var termino2=0;
var termino3=0;
var presionoSuma=false;
var presionoResta=false;
var presionoMultiplica=false;
var presionoDivide=false;
var resultado=0;

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
//aumento y reducion de tamño de la teclas al precionar.
  animarTecla: function(num){
    var doc = document.getElementById(num);
    doc.addEventListener('mousedown', function () {
      doc.setAttribute("style", "transform:scale(0.95,0.95)");
    })
    doc.addEventListener('mouseup', function () {
      doc.setAttribute("style", "transform:scale(1,1)");
    })
  },

  //agrgar todos los numeros.
  eventos: function() {

  Calculadora.animarTecla("0");
  this.cero.addEventListener("click", function() {
  Calculadora.mostrar("0")
  })
  Calculadora.animarTecla("1");
  this.uno.addEventListener("click", function(){
  Calculadora.mostrar("1")
  })
  Calculadora.animarTecla("2");
  this.dos.addEventListener("click", function(){
  Calculadora.mostrar("2")
  })
  Calculadora.animarTecla("3");
  this.tres.addEventListener("click", function() {
  Calculadora.mostrar("3")
  })
  Calculadora.animarTecla("4");
  this.cuatro.addEventListener("click", function() {
  Calculadora.mostrar("4")
  })
  Calculadora.animarTecla("5");
  this.cinco.addEventListener("click", function() {
  Calculadora.mostrar("5")
  })
  Calculadora.animarTecla("6");
  this.seis.addEventListener("click", function() {
  Calculadora.mostrar("6")
  })
  Calculadora.animarTecla("7");
  this.siete.addEventListener("click", function() {
  Calculadora.mostrar("7")
  })
  Calculadora.animarTecla("8");
  this.ocho.addEventListener("click", function() {
  Calculadora.mostrar("8")
  })
  Calculadora.animarTecla("9");
  this.nueve.addEventListener("click", function() {
  Calculadora.mostrar("9");
  })
  Calculadora.animarTecla("punto");
  this.punto.addEventListener("click", function() {
  var valor = display.textContent;
  if (valor.indexOf(".") == -1) {
  display.textContent += ".";
  }
  })
  Calculadora.animarTecla("sign");
  this.sign.addEventListener("click", function() {
  var valor = (display.textContent)*-1
  display.textContent=valor
  }),
  //reiniciar display.
  Calculadora.animarTecla("on");
  this.on.addEventListener("click",function(){
  display.innerHTML=0
  termino=0;
  termino2=0;
  termino3=0;
  presionoSuma=false;
  presionoResta=false;
  presionoMultiplica=false;
  presionoDivide=false;
  resultado=0;
  aux = 0
})
  //operaciones matematicas.
  Calculadora.animarTecla("mas");
  this.mas.addEventListener("click",function(){
  Calculadora.sumar();
})
  Calculadora.animarTecla("menos");
  this.mas.addEventListener("click",function(){
  Calculadora.restar();
})
  Calculadora.animarTecla("por");
  this.mas.addEventListener("click",function(){
  Calculadora.multiplicar();
})
  Calculadora.animarTecla("dividido");
  this.mas.addEventListener("click",function(){
  Calculadora.dividir();
}),
// condiciones para el igual
Calculadora.animarTecla("igual");
this.igual.addEventListener('click', function(){
  if (presionoSuma==true){
    Calculadora.resultadoSuma();
  }
  if (presionoResta==true){
    Calculadora.resultadoResta();
  }
  if (presionoMultiplica==true){
    Calculadora.resultadoMultiplica();
  }
  if (presionoDivide==true){
    Calculadora.resultadoDivide();
  }
  })
},

}
Calculadora.init()
