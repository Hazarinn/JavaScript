
function calcular (a){
    return function (b){
        return function(fn){
            return fn(a, b)

        }
    }
}

function somar (a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b


}

const r1 = calcular(2)(2)(multiplicar)

console.log(r1)