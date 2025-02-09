let nome = new String("Bruno Pinho Campos 2002")
let email = "caculom09@gmail.com"
let numeros = "1, 10, 100, 1000"
console.log(nome)

console.log(nome.search(/pinho/i))

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig,"Rivas"))

console.log(nome.match(/[a-g|h-z|0-9]/ig))

console.log(nome.match(/\d/ig))
console.log(nome.match(/\s/ig))
console.log(nome.match(/\bP/ig))

//Quantificadores
console.log(numeros)
console.log(nome.match(/o+|s+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))




