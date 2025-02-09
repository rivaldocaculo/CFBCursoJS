let nome1 = new String("Rivaldo Manuel Caculo")
let nome2 = new String("Rivaldo Manuel Cacul")

console.log(nome1)
console.log(nome1.charAt(0))

console.log(nome1.charCodeAt(0))

console.log(nome1.concat(nome2))
console.log(nome1)

console.log(nome1.indexOf("u"))

console.log(nome1.lastIndexOf("a"))

console.log(nome1.localeCompare(nome2))

console.log(nome1.replace("Rivaldo","Henriques"))

console.log(nome1.search("Manuel"))

let sobrenome=(nome1.slice(8,15))

console.log(sobrenome)

let arr_nome=nome1.split("o")
console.log(arr_nome)