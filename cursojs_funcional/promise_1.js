const primeiroElemento =  arrayOuString => arrayOuString[0]
const letraMiniscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
        

})



    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMiniscula)
    .then(console.log)