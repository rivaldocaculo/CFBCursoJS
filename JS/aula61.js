const Pessoa = {
    nome:"",
    idade:"",
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    },
    getIdade:function(){
        return this.idade
    },
    setIdade:function(idade){
        this.idade=idade
    }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = "Caculo"
p2["nome"] = "Manuela"
Pessoa.setNome("Ageu")


console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)

const addPessoa=()=>{
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML = `Nome: ${p.getNome()}</br> Idade: ${p.getIdade()}}`
        res.appendChild(div)
    })
}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

btn_add.addEventListener("click",()=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("f_idade")
    const p = Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    console.log(pessoas)
    addPessoa()
})