// Para minimizar a utilização de variáveis globais é aconselhável utilizar uma
// única variável global para a minha aplicação.

// A variável $Noudi é um objeto vazio por enquanto.

// By reducing your global to a single name, you significantly reduce
// the chance of bad interactions with other applications, widgets, or libraries
// JS - The Good Parts, p.25
var $Noudi = {}

// Retorna o valor de um número ou objeto que não seja uma função ou vetor.
// A função abaixo é um exemplo de função anônima.
$Noudi.GetValueOfDefault = function(value){
  if (typeof(value) !== 'function') {
    return value;
  }
  return 0;
}

// Uma função pode ser declarada dentro de outra função.
// O código abaixo representa a utilização de closures para a criação de herança
// no JavaScript.
// @params: object - Um objeto existente para a criação de um novo objeto que
// herda suas características.
// @return object - Um novo objeto instanciado e do mesmo tipo do parâmetro
// recebido na função.
$Noudi.new = function(object){
  // Adicionamos a Object a função create(), que é uma closure.
  Object.create = function(object){

    // Dentro de create criamos a função anônima F.
    var F = function(){};

    // Na propriedade prototype atribuímos o objeto recebido como parâmetro.
    // Isso só é possível porque uma closure tem acesso ao context da sua função
    // pai.
    F.prototype = object;

    // Retorna a nova função, agora tento como pai, prototype, o objeto recebido
    // como parâmetro na função create.
    return new F();
  }
}

// Method Invocation Pattern
//
$Noudi.carro = {
  speed : 0,
  speedUp : function(){
    speed += 5;
  }
}
// Podemos chamar o método speedUp (na realidade é uma função atribuida a um atributo) da seguinte forma.
