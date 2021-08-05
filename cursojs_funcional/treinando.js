const nums =  [1,2,3,4,5]

const { get } = require("http")

const dobro = (n) => n * 2 

console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']

const primeiraLetra = texto => texto[0]

const letras = nomes.map(primeiraLetra)

console.log(nomes, letras)

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},

]

const getNome = (item) => item.nome

console.log(carrinho.map(getNome))


const getTotal = item => item.qtde * item.preco

const totais = carrinho.map(getTotal)

console.log(totais)



//const getPreco = price => price.preco
//console.log(carrinho.map(getPreco))


Array.prototype.meuMap = function(fn){
    const novoArray = []

    for (let i = 0;  i < this.length; i++){
        
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    

    }
    return novoArray




    
    
}

const getNome = (item) => item.nome

console.log(carrinho.meuMap(getNome))


const getTotal = item => item.qtde * item.preco

const totais = carrinho.meuMap(getTotal)

console.log(totais)



const teste = [
    {carro: 'palio', ano: 2001, motor: 2.0},
    {carro: 'celta', ano: 2003, motor: 1.4},
    {carro: 'amarok', ano: 2010, motor: 1.0},
    {carro: 'fusion', ano: 2021, motor: 1.8},
]

 getAno = function (anos) {
     return anos.ano
 }

 console.log(teste.map(getAno))

 getNome = carroNome => carroNome.carro

 function novosCarros(anos){
     if(anos.ano > 2003){
         return anos
     }
 }

 const carros = teste.filter(novosCarros)

 console.log(carros)

 
const getPotencia = (potencia) => {

    if(potencia.motor < 2.0)
    return potencia.motor
}



console.log(teste.map(getPotencia))

