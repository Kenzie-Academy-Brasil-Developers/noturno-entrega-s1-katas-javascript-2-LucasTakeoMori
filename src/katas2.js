//função add
function add(num1, num2) {
    return num1 + num2
}
console.log(add(2,4 ))

//---------------------------
//função multiply
function multiply(num1, num2) {
    let result = 0
    for (let contador = 0; contador < num1; contador++) {
        result = add(num2,result)
    }
    return result
}

console.log(multiply(2, 8))

//---------------------------
//função power
function power(num1, num2) {
 let result = 1
 for(let contador = 0; contador < num2; contador++)
    {
    result = multiply(num1,result)
    }
    return result
}

console.log(power(2, 8))
//---------------------------
//função factorial
function factorial(num) {
    let result = 1
    for (let contador = num ; contador >= 1; contador--) {
        result = multiply(contador,result)
    }
    return result
}

console.log(factorial(4))
//---------------------------
//função fibonacci
function fibonacci(num) {





    
}
