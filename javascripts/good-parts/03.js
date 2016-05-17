//
Object.getValueOrDefault = function(value, standard){
  return value || standard;
}

//
if(typeof Object.extends !== 'function'){
  Object.extends = function(o){
    var F = function(){
      F.prototype = o;
      return new F();
    }
  }
}
