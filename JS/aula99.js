class jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new jogador("Lamine"), new jogador("Gavi"), new jogador("Pedri"), new jogador("Olmo"), new jogador("Lamine"), new jogador("Pedri")]

let s1=[]

let s_jogadores=jogadores.filter((jogador)=>{
    return jogador.nome=="Lamine"
})

s=s_jogadores.map((jogador)=>{
    return jogador.id
})

console.log(s_jogadores)
console.log(s)