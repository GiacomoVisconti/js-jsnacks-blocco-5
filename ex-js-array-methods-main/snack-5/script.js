const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

//Con il metodo FILTER

/* const even = nums.filter((num)=>{
    if (num % 2 ===0) {
        return true
    }
    return false
})

console.log(even); */
           //oppure
const even = nums.filter( num => num % 2 === 0)
console.log(even);


//Con il ciclo FOR EACH

const pari = []
nums.forEach((num)=>{
    if (num % 2 ===0) {
        pari.push(num)
    }
})
console.log(pari);


//Con il metodo MAP
const solo_pari = nums.map((num)=>{
    if (num % 2 === 0) {
        return num
    } 
    

})
console.log(solo_pari);

//Con il ciclo FOR

const even_nums = []

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (element % 2 ===0) {
        even_nums.push(element)
    }
    
}
console.log(even_nums);


// Risultato: [2, 8, 4, 12]