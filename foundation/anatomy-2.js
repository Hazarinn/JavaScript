//Anonymus function

(function(a, b, c){
    return a + b + c
})


// Function expression

var sum = function(a, b){
    return a + b
}
const result = sum(10,5)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9))

x = sum
console.log(x(10,10))