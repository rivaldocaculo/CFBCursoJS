let numeros=[10,20,30,40,50,60,70,80,90]
let[a,b,c,...d]=numeros
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let obj={nome:"Rivaldo",curso:"CursoJS"}
let {nome,curso}=obj
console.log(nome)
console.log(curso)

const cores=()=>{
    return ["verde","amarelo","azul","branco"]
}

let [c1,c2,,c3]=cores()
console.log("======================")
console.log(c1)
console.log(c2)
console.log(c3)

let texto="Curso de Javascript"
let[...t]=texto.split(" ")
console.log(t)

