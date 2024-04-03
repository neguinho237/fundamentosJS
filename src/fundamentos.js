 //consoles 
 console.log('Esse é o método log')

 console.warn ('Eesse é o método warn')
//para avisos
 console.error ('Quebrou a aplicação')
 //para erro
 console.table('coloque um array aqui')
 //para tabelas 
 console.info("essa é uma informação ")


 //variaveis
 var banana = 10
 let maçã = 15
 //var e let tem a mesma funcionalidade
 const uva = 20
 //cria uma variavel constante que nao pode ser alterada 

 console.log(banana)
 console.log(maçã)
 console.log(uva)

 // tipos de dados
const name = 'Bruno de São Paulo'
let qtd = 5
const  isApproved = false
let lastName = null
let age 
const languages = ['javaScript', 'PHP', 'Python']
const user = {email: 'bruno@teste.com', password: 'teste123'}

console.log(name)
console.log(qtd)
console.log(isApproved)
console.log(lastName)
console.log(age)
console.log(languages)
console.log(user)

let number = [1, 2, 3] 
console.log (number)

let object = [{email:'lalal@.com'}, 
{senha: 'pppao123'}, 
{camisetas: 'vans,dickies,converse'}, 
{shapes: 'baker,deathWish,Jart,future'}
]
console.log(object)

//métodos de String
//split
const fullName = 'brunoxmiguelxsartixmiranda'

console.log(fullName, 'nome completo')

const stringToArray = fullName.split('x')
console.table(stringToArray)

const nome = 'brunoxmiguel'
const huf = nome.split('x')
console.log(huf)



// o toLowercase deixa tudo em caixa baixa ou seja tudo em letras minusculas
//toLowerCase
const palavra = 'O RATO ROEU A ROUPA DO REI DE ROMA'
console.log(palavra.toLowerCase())

//toUppercase ao contrario do toLoweCase deixa tudo em letras maiusculas
//toUpperCase
const palavras = 'tres pratos de trigo para tres tigres tristes'
console.log(palavras.toUpperCase())


//.length
// ele retorna quantos caracteres tem, traz o tamanho da string
const studentName ='joaozinho'
console.log(studentName.length)


//indexOff 
//retorna o primeiro índice em que o elemento pode ser encontrado 
//no array, retorna -1 caso o mesmo não esteja presente.

const nelson = 'Nelson Pereira Santos Moraes'
console.log(nelson.indexOf("Santos"))


//O .slice ele elimina as letras a partir de numeros q vc quer exemplo:
const nomeral = 'Pedro Chagas Jungle '
console.log(nomeral.slice(6,12))

//métodos array

//método .unshift adiciona um novo elemento no começo do array

//método .push adiciona um novo elemento no final do array 

//shift remove o primeiro item do array


// Objetos

const product = {
    name: 'camiseta',
    price: 120,
    inStock: true,
    sizes: ['p','m','g']
}

console.log(product.name)
console.log(product.price)
console.log(product.inStock)
console.log(product.sizes)

//destructing
const {inStock, price} = product
console.log(price)
console.log(inStock)

//JSON 
const dog = {
    name:'rex',
    age: 3,
    breed: 'black'
}
//const jpsonP = JSON.parse(dog)
//stringify formata 
const jsonSt = JSON.stringify(dog)
//parse reseta 
const jsonReset = JSON.parse(jsonSt)
console.log(jsonSt)
console.log(jsonReset)



//number
const moeda = 10.4567
console.log(moeda.toFixed(1))


//Data
const date = new Date()
console.log(date)

//operadores
const a = 10
const b = 20

//aritimedicos
const soma = a + b
const subt = a - b
const mult = a * b
const div = a / b
const por = a % b
console.log(soma,subt, mult,div,por, 'ari')

//incremento e decremento
