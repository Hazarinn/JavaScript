const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0
const greaterThanThen = el => el > 10
const even =  el => el % 2 === 0 

console.log(numbers.filter(el => el > 0))
console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanThen))
console.log(numbers.filter(even))

const students = [

    { name: 'jake', score: 6.4 },
    { name: 'susan', score: 8.6 },
    { name: 'emma', score: 9.4 },
    { name: 'peter', score: 9.1},
]

const greatStudent =  student => student.score >= 9

console.log(students.filter(greatStudent))
console.log(students)