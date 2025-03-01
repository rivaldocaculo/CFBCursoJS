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
c2.atirar()
c2.atirar()
c2.atirar()
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

