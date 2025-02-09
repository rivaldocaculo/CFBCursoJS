const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")
const carros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")

let a_carros=[]

const removerCarro=(quem)=>{
    a_carros = a_carros.filter((el)=>{
        return el.nome != quem
    })
}

f_tipoMilitar.addEventListener("click",(evt)=>{
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
})

f_tipoNormal.addEventListener("click",(evt)=>{
    f_blindagem.setAttribute("disabled","disabled")
    f_municao.setAttribute("disabled","disabled")
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
})

btn_addCarro.addEventListener("click",()=>{
    if(f_tipoNormal.checked){
        const c=new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    }else{
        const c=new Militar(f_nome.value, f_portas.value,f_blindagem.value,f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML=""
    a_carros.map((c)=>{
        const div=document.createElement("div")
        const btn=document.createElement("button")
        btn.setAttribute("class","btn1")
        btn.innerHTML="Remover"
        btn.addEventListener("click",(evt)=>{
            const quemRemover=evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        })
        div.setAttribute("class","carro")
        div.setAttribute("data-nome",c.nome)
        div.innerHTML=`Nome: ${c.nome}</br>`
        div.innerHTML+=`Portas: ${c.portas}</br>`
        div.innerHTML+=`Cor: ${c.cor}</br>`
        div.innerHTML+=`Blindagem: ${c.blindagem}</br>`
        div.innerHTML+=`Municao: ${c.municao}</br>`
        div.appendChild(btn)
        carros.appendChild(div)
    })
}

class Carro{ //Class PAI / BASE
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }

    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{ //Classe FILHO
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--
        }else if(this.municao == 0){
            alert("Não há munição, carregue-a")
        }
    }
}

class Utilitario extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares = lugares
    }
}

const c1 = new Carro("Normal",4)
c1.ligar()
c1.setCor("Preto")

const c2 = new Militar("Lutador",1,100,5)
c2.atirar()

const c3 = new Utilitario("Veloz",2,2)


console.log(`Nome......: ${c1.nome}`)
console.log(`Porta.....: ${c1.portas}`)
console.log(`Ligado....: ${(c1.ligado?"SIM":"NÃO")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor.......: ${c1.cor}`)
console.log(`=======================`)

console.log(`Nome......: ${c2.nome}`)
console.log(`Porta.....: ${c2.portas}`)
console.log(`Ligado....: ${(c2.ligado?"SIM":"NÃO")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem.: ${c2.blindagem}`)
console.log(`Munição...: ${c2.municao}`)
console.log(`Cor.......: ${c2.cor}`)
console.log(`=======================`)

console.log(`Nome......: ${c3.nome}`)
console.log(`Porta.....: ${c3.portas}`)
console.log(`Lugares....: ${c3.lugares}`)
console.log(`=======================`)

