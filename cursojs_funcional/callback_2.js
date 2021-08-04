const fs = require ('fs') // fs significa file sistem 
const path = require ('path')

const caminho = path.join(__dirname, 'dados.txt') 

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}
console.log('inicio...')
fs.readFile(caminho, exibirConteudo )
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()) )

console.log('fim...')


console.log('inicio sync')
const conteudo = fs.readFileSync(caminho)
console.log('fim sync')