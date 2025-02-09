const caixa=document.querySelector("#caixa")
let cores=["azul","vermelho","amarelo",["claro","escuro","médio"]]
let cursos=["HTML","CSS","Javascript",cores]

//cursos.push("C++")
//cursos.unshift("PHP")
//cursos.shift()

console.log(cursos[3][3][1])

cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})

