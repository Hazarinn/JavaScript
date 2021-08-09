function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject)=> {
        try{

            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('ocorreu um erro!')
            } else {
                resolve(valor)
            }

        } catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.5)
.then(v =>  `valor: ${v}`)
.then(v => consol.log(v),
err => console.log(`erro esp: ${err}`)
)
.then(() => console.log('quase fim!'))
.catch(err => console.log(`Erro geral: ${err}`))
.then(() => console.log('fim'))