// This code snippet allows the identify() and speak() functions to be reused
// against multiple context objects (me and you), rather than needing a
// separate version of the function for each object.
function identify() {
  return this.name.toUpperCase();
}

function speak(){
  var greeting = "Hello, I'm " + identify.call( this );
  console.log( greeting );
}

var me = {
  name: "Kyle"
};

var you = {
  name: "Reader"
};

var eu = identify.call( me );
console.log( eu );

var voce = identify.call( you );
console.log( voce );

speak.call( me );
speak.call( you );

//
// N.A.: Funcionou quando eu coloquei o '2' em seguido do nome da função.
// Isso significa que JS não aceita 'sobrecarga' de funções.
function identify2( contexto ) {
  return contexto.name.toUpperCase();
}

//
function speak2( context ) {
  var greeting = "Hello, I'm " + identify2( context );
  console.log( greeting );
}

// 
var novo_eu = identify2( me );
console.log( novo_eu );
//
speak2( me );
