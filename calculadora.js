const E = 2.718281828459045;


const minimoComunMultiplo = ( a, b) => { 
    divisor = _maximoComunDivisor(a, b);
    return parseInt((a*b)/divisor);
}

const maximoComunDivisor = ( a, b) => {
    return _maximoComunDivisor( a, b);
}

const numeroPrimo = ( a ) => {
    for( i=2; i <= a/2; i++){
        if( a % i == 0 ){
            return false;
        }
    }
    return true;
}

const mumerosCoprimos = ( a, b) => {
    res = _maximoComunDivisor(a,b );
    if( res != 1){
        return false;
    }
    
    return true;
}

const sqrt = ( a ) => {
    let lastGuess = 0;
    let guess = a/3;
    
    do{
        lastGuess = guess;
        guess = ( a/ guess + guess )/2;
    } while( _abs(lastGuess - guess) > (5e-15 *1) )

    return guess;
}

const log = ( numero, base ) => {

    return ln(numero)/ln( 10 );
    
}

const ln = ( x ) => {
    old_sum = 0;
    xmlxpl = (x - 1) / (x + 1);
    xmlxpl_2 = xmlxpl * xmlxpl;
    denom = 1;
    frac = xmlxpl;
    term = frac; 
    sum = term;
    while ( sum != old_sum )
    {
        old_sum = sum;
        denom += 2.0;
        frac *= xmlxpl_2;
        sum += frac / denom;
    }
    return 2 * sum;
}

const exponencialBaseE = ( exponente ) => {
    res = 1;
  for( i=0; i < exponente; i++ ){
      res = res* E
  }
  return res;


}

const round = ( number, presicion  ) => {
    presicion++;
    number = number*pow(10,presicion);
    let diff = 0
    let unit = number % 10;
    number = number.toString().split(".")[0];
    if( unit == 5 || unit == 0 ){
        number = number;
    }
    else if( unit > 5 ){
        diff =  10 - unit;
        number =    number + diff; 
    }else if( unit < 5){
        diff =  10 - unit;
        number =    number - diff;
    }
    number = number / pow(10,presicion);
    return number;
}

const pow = ( base, potencia ) =>{
    res = 1;
    for( i=0; i < potencia; i++ ){
        res = base*res;
    }
    return res;
}
module.exports = {
    minimoComunMultiplo,
    maximoComunDivisor,
    mumerosCoprimos,
    numeroPrimo,
    sqrt,
    exponencialBaseE,
    log,
    ln,
    round
}



function _maximoComunDivisor( a, b){
    let divident = b; 
    let divisor = a; 
    res = divident % divisor;
        while( res != 0 ){
            divident = divisor;
            divisor = res;
            res = divident % divisor; 

            }
        if( divisor == 0){
            divisor = 1;
        }
    return divisor;
}

function _abs( a ){
    if( a < 0 ){
        return (a * -1)
    }
    return a;
}



/*Mínimo común múltiplo
- Máximo común divisor
- Número primo
- Números coprimos
- Raíz cuadrada
- Logaritmo (base 10)
- El logaritmo de un producto es igual a la suma de los logaritmos de los factores
- El logaritmo de una raíz es igual al cociente entre el logaritmo del radicando y el
índice de la raíz
- Exponencial (base e)
- Redondeo (con un parámetro para definir el número de decimales)
*/