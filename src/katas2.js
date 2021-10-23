//função add
function add(num1, num2) {
    let result = num1 + num2

    return result
}
console.assert(add(num1, num2))

//---------------------------
//função multiply
function multiply(num1, num2) {
    let result = num1 * num2

    return result
}

console.log(multiply(num1, num2))

//---------------------------
//função power
function power(num1, num2) {
    let result = num1 ** num2

    return result
}

console.log(power(num1, num2))
//---------------------------
//função factorial
function factorial(num)
{
    let numero = num
    let resultado = numero
    for (var contador = 1; contador < numero; contador++) {
        resultado *= contador;
    }
    return resultado
}

console.log(factorial(num));
//---------------------------