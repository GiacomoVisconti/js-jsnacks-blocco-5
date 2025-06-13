const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2

//Con il metodo FILTER
const result = students.filter((element)=>{
  if (element.id === 2){
    return element
  }
})
console.log(result);

//Con il ciclo FOR EACH
let risultato  = null
students.forEach((element) =>{
  if (element.id === 2){
    risultato = element
  }
})

//Con il metodo MAP 
const result1 = students.map((element)=>{
  if (element.id === 2){
    return element
  }
})
console.log(result1);

console.log(risultato);

// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }