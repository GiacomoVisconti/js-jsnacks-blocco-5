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

// Recupera la classe dello studente 'Marco Lanci'
const to_search = 'Marco Lanci'

//Con il metodo FIND
const result = students.find((element) =>{
  const classe = element.class

  if (element.name === to_search) {
    return classe
  }
})
console.log(result);

//con il ciclo FOR EACH

let risultato = null

students.forEach((element) => {
  if (element.name === to_search) {
    risultato = element.class
  }
})
console.log(risultato);


//Con Il metodo FIRLTER 
const result1 = students.filter((element) =>{
  const classe = element.class

  if (element.name === to_search) {
    return classe
  }
})
console.log(result1);



// Risultato: '3C'