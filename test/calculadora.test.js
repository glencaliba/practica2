const assert =  require ("assert");
const op = require( "../calculadora");
const lcm = require('@fav/math.lcm');
const gcd = require( 'compute-gcd' );
const isCoprime = require('is-coprime');
const isNumberPrime = require('is-number-prime');
let a = 0;
let b = 0;

describe( 'Operations', () => {

    beforeEach( ()=>{
        a = getIntRandom( 1, 1000);
        b = getIntRandom ( 1000, 2000 );
    });

    it( "Test  maximo comun divisor", () =>{
        let res = op.maximoComunDivisor( a, b );
        assert.ok( res > 0 );
        assert.equal( gcd(a, b), res );
    })

    it( "Test minimo comun multiplo", () =>{
        let res = op.minimoComunMultiplo( a, b );
        assert.ok(  res > 0 );
        assert.equal( lcm( a, b ), res );


    })

    it( "Test minimo comun multiplo y maximo comun divisor ", () =>{
        

        const mcm = op.minimoComunMultiplo( a, b );
        const mcd = op.maximoComunDivisor( a, b );
        assert.ok( mcm > 0 );
        assert.ok( mcd > 0 );

        assert.equal( a*b, mcm*mcd );
    })


    it( "Test numero primo", ()=> {
        const res = op.numeroPrimo( a );
        assert.equal( res, isNumberPrime(a));
        
    });

    it( "Test numeros coprimo que tienen un dividenco en comun", () =>{
        b = a * getIntRandom( 1, 10 );
        const res = op.mumerosCoprimos( a, b );
        assert.equal( res, false );
    });

    it( "Test numeros coprimo si son consecuticos", () =>{
        b = a+1;
        const res = op.mumerosCoprimos( a, b );
        assert.equal( res, true );
    });

    it( "Test raiz cuadrada ", () =>{
        res = op.sqrt( a );
        assert.equal(  Math.sqrt(a).toFixed(4), res.toFixed(4) ); 
    });

    it( "Test exponencial base E", ()=>{
        const expected = op.exponencialBaseE(a);
        assert.equal( expected.toPrecision(4), Math.exp( a ).toPrecision(4));
    })

    it( "Test logaritmo", ()=>{
        const expected = op.log(a);
        assert.equal( expected.toPrecision(4), Math.log10( a ).toPrecision(4));
    })


    it( "Test logaritmo propiedad de suma", ()=>{
        const res1 = op.log(a*b);
        const res2 = op.log(a) + op.log(b);
        
        assert.equal( res1.toPrecision(4), res2.toPrecision(4));
    })

    it( "Test logaritmo propiedad de resta", ()=>{
        const res1 = op.log(a/b);
        const res2 = op.log(a) - op.log(b);
        
        assert.equal( res1.toPrecision(4), res2.toPrecision(4));
    })

    it( "Test Round", ()=>{
        number = a/10000;
        presision = 4;
        res = op.round(  number, presision);
        
        expected = Math.round( (number * Math.pow( 10, presision)));
        expected = expected /  Math.pow( 10, presision);
        assert.equal(res, expected );
    })

    it( "Test Neperiano", ()=>{
        const res = op.ln( a);
        assert.equal(  Math.log( a ).toPrecision(4), res.toPrecision(4) );
    })

})


function getIntRandom( min, max ){
    return Math.floor( Math.random() * ( max - min + 1)) + min;
}
