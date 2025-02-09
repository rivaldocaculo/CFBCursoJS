const nome=Symbol("nome")
const numero=Symbol("nome")
const corUniforme=Symbol("nome")

const Jogador={
    nome:"Lamine",
    
}

Jogador[numero]=19,
Jogador[corUniforme]="Azul"

for(p in Jogador){
    console.log(p)
}

console.log(`Nome.......: ` + Jogador.nome)
console.log(`Número.....: ` + Jogador[numero])
console.log(`CorUniforme: ` + Jogador[corUniforme])
