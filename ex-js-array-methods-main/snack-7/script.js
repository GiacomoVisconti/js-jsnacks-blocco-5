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
console.log(risultato);

//Con il metodo MAP 
const result1 = students.map((element)=>{
  if (element.id === 2){
    return element
  }
})
console.log(result1);

//Con il metodo FIND
const risultato1  = students.find((element) =>{
  if (element.id === 2){
    return element
  }
})
console.log(risultato1);


// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }