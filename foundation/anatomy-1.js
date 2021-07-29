// Function declaration

function sayHello(){
    console.log('hello')


}
sayHello()

function sayHello(name){
    console.log(`hello ${name}`)
}

sayHello('rubens')

function returnHi(){
    return 'Hi'
}
const greeting = returnHi()

console.log(greeting)

function returnHiTo(name){
    return `Hi ${name}`
}

console.log(returnHiTo('rubens diego'))