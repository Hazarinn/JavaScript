const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map((el) => {
    return el * 2

})



console.log(numbers, numbersV2)

const students = [

    { name: 'jake', score: 6.4 },
    { name: 'susan', score: 8.6 },
    { name: 'emma', score: 9.4 },
    { name: 'peter', score: 9.1},
]

const getScore = el => el.score



console.log(students.map(getScore).map(Math.ceil))

// O array resultante de uma função map, tem por obrigatoriedade.
// retornar um array do mesmo tamanho do original//
