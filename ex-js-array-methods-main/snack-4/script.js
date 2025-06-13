const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

//Con il ciclo FOR EACH

const authors = []
posts.forEach((element)=>{
  authors.push(element.author)
})

console.log(authors);

//Con il metodo MAP

const name_author = posts.map((element)=>{
  return element.author
})

console.log(name_author);

//Con il ciclo FOR
const names = []
for (let i = 0; i < posts.length; i++) {
  const element = posts[i];
  names.push(element.author)
}
console.log(names);


// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']