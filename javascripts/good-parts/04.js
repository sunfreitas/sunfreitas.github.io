// Funções
// 15 de maio de 2016

//


// Function calculadora
//
// Assim como objetos são ligados a Object.prototype, a função abaixo é ligada
// a Function.prototype.
var calculadora = function(){
  //
  var expressao = 0;

  return {
    //
    soma : function(){
      for (var i = 0; i < arguments.length; i++) {
        expressao += arguments[i];
      }
    },
    get_value : function(){
      return typeof(expressao) === 'number' ? expressao : 'Não é um número';
    }
  }
}();

// Method Invocation Pattern
// Acontece quando uma função é uma propriedade de um objeto. A chamamos de
// método.
var calculadora_cientifica = {
  // value é um atributo público assim como o método sin() logo abaixo.
  value : 0,
  // sin é um método público, pois ele pega o contexto do objeto através de this.
  sin: function(value){
    //Um método pode utilizar this para acessar o objeto de forma que ele possa
    // recuperar valores ou modificar o objeto.
    this.value = typeof value === 'number' ? value : 0;
  }
}
//
calculadora_cientifica.sin(3);

// Function Invocation Pattern
// Acontece quando uma função não é uma propriedade de um objeto.
var calculadora_binaria = function(){
  //
  var that = this;
  //
  var helper = function(){
    // para utilizar o contexto da função pai tenho que utilizar a variável that.
    that.value = calculadora.soma(that.value + that.value);
  }

  helper();
}
