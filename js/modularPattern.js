//console.log('hi pape');

//OBJETO LITERAL
var objetoLiteral = {
    saludo: 'hola mundo',
    miFuncion: function(){
        console.log('miFuncion mensaje')
    }
}
//objetoLiteral.miFuncion()
var persona = {
    edad: 33,
    nombre: 'Luis Perez',
    comer: function() {
        console.log(this.nombre + ' esta comiendo, con la edad de ' + this.edad + ' aNos');
    }
}
//persona.comer()

//MODULOS
var automovil = (function(color){
    //---
    var mColor = color;

    return {
        avanzar: function(){
            console.log('el auto ' + mColor + ' esta avanzando')
        },
        retroceder: function(){
            console.log('el auto ' + mColor + ' esta retrocediendo')
        }
    }
})('rojo')

//automovil.retroceder()
//automovil.avanzar();

//FUNCIONES ANONIMAS
var funcionAnonima = function() { 
    console.log('funcion anonima mensaje') 
};
//funcionAnonima();

//FUNCIONES AUTOEJECUTABLES
//#1
/*(function() { 
    console.log('funcion autoejecutable #1') 
})()*/
//#2
/*var functionAutoejecutable = (function(mensaje) {
    console.log(mensaje)
})('hola funcion autoejec')*/

//CLOSURES
function ejemploCLosure(arg1, arg2) {
    var localVar = 10;
    function multiplicador(interArg) {
        return arg1 + arg2 + interArg + localVar;
    }

    return multiplicador;
}

var globalVar = ejemploCLosure(2, 4);

//console.log(globalVar(8));

//METODOS PRIVADOS/PUBLICOS
var modulo = (function(){
    var metodoPublico = function(mensaje1) {
        metodoPrivado(mensaje1);
        console.log('publico ' + mensaje1);
    }
    var metodoPrivado = function(mensaje2) {
        console.log('privado ' + mensaje2);
    }

    return {
        metodoPublico: metodoPublico
    }
})();
modulo.metodoPublico('publico')

//RETURN 
var modulo = (function(){
    var metodoPrivado = function(){
        console.log('soy un metodo privado')
    }

    return {
        metodoPublico : function() {
            metodoPrivado();
            console.log('soy un metodo publico')
        }
    }
})();
modulo.metodoPublico();