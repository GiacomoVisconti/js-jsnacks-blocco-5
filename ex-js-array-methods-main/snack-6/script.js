const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//Con il ciclo FOR EACH
const min_15 = []
const max_15 = []

zucchine.forEach((element)=>{
  if (element.length > 15) {
    min_15.push(element)
    
  }else max_15.push(element)
})

console.log(min_15);
console.log(max_15);


//Con il ciclo FILTER
const zucc_max_15 = zucchine.filter((element) => {
  if (element.length < 15) {
    return element
  } 
})
const zucc_min_15 = zucchine.filter((element) => {
  if (element.length > 15) {
    return element
  } 
})

console.log(zucc_min_15);
console.log(zucc_max_15);

//Con il metodo MAP 
const corte_15 = zucchine.map((element)=> {
  if (element.length < 15) {
    return element
  } 
}) 
const lunghe_15 = zucchine.map((element)=> {
  if (element.length > 15) {
    return elements
  } 
}) 
console.log(corte_15);
console.log(lunghe_15);
