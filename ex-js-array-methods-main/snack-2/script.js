const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

//Con il ciclo FOR EACH

const nomi = []
people.forEach((element) => {
  //oppure: console.log(element.name);
  nomi.push(element.name)
})
console.log(nomi);

//Con il ciclo FOR
const names = [];
for (let i = 0; i < people.length; i++) {
  const element = people[i];
  
  // oppure: console.log(element.name);
  names.push(element.name)
  
}
console.log(names);


//Con il metodo MAP
const first_names = people.map((element)=>{
  return element.name
})
console.log(first_names);

// Risultato: 'Paolo', 'Giulia', 'Marco'