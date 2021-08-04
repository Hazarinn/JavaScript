// Explicações sobre arrow function

const felizNatal = () => console.log('Feliz natal')
felizNatal()

const saudacao = nome => `Fala ${nome}, beleza?!!!`

console.log(saudacao("maria"))

const somar = (...numeros) => {
    
    let total =  0
    for(let n of numeros){
        total += n
    }
    return total
    }

    console.log(somar(1,2,3,4,5,6,7,8,9,10))

    const potencia = (base) => {
        return (exp) => {
            return Math.pow(base, exp)
        }
    }

    console.log(potencia(2)(10))

    // this

    Array.prototype.ultimo = function (){
        console.log(this[this.length - 1])
    }

    const numeros = [1, 2, 3, 500]

    numeros.ultimo()

    

  


