// setTimeout(function(){
//     console.log('Executando callback...')

//     setTimeout(function(){
//         console.log('callback dois')

//         setTimeout(function(){
//             console.log('executando a terceira e ultima')
//         }, 5000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('executando promise')
            resolve()
        }, tempo)
    })
}

  esperarPor()
  .then(()=> esperarPor(3000))
  . then(esperarPor)