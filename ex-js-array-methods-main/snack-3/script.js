const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

//Col ciclo FOR EACH

const incremented =[]
numbers.forEach((numb)=>{
    incremented.push(numb + 1)
})

console.log(incremented);


//Con il metodo MAP
const numbers_plus1 = numbers.map((numb)=>{
    return numb + 1
})

console.log(numbers_plus1);


//Con il ciclo FOR

const aggiungo_1 = []
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    aggiungo_1.push(element + 1)
    
}

console.log(aggiungo_1);

// Risultato: [3, 9, 5, 8, 3, 88]