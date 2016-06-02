// Minion
// Dave version
// author: Freitas

var $dave = $minion = {
  // @method isNull
  isNull : function ( value ) {
    return value === null;
  },

  // @method: isNumber
  // Este método retorna false caso o valor de value seja uma string, NaN,
  isNumber : function ( value ) {
    return typeof value === 'number' && isFinite(value);
  },

  // @method: isString
  isString : function( value ) {
    return typeof value === 'string';
  },

  // @method: isArray
  // Temos um bug aqui! Caso seja atrubuído NaN a value a função retorna NaN...
  isArray : function ( value ) {
    return value && typeof value === 'object' && value.constructor === Array;
  },

  //
  sumDecimalFraction : function ( value1, value2 ) {
    value1 = value1 * 100;
    value2 = value2 * 100;
    var sum = value1 + value2;
    return sum / 100;
  },

  //

}
