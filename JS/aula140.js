const tmp = document.querySelector("#tmp")
const nvl = document.querySelector("#nvl")
const prs = document.querySelector("#prs")

let dados = {
    _temperatura:0,
    _pressao:0,
    _nivel:0,
    set valores(val){
        this._temperatura = val.temperatura
        this._pressao = val.pressao 
        this._nivel = val.nivel
        tmp.innerHTML = this._temperatura
        nvl.innerHTML = this._nivel
        prs.innerHTML = this._pressao
    },
    get valores(){
        return [this._temperatura,this._pressao,this._nivel]
    }
}

const buscarDados=()=>{
    const endpoint = "https://d1172feb-3702-4e98-8dab-aca0f17c1b8a-00-3mk34cyqhn7bm.janeway.replit.dev/"
    fetch(endpoint)
    .then(res => res.json())
    .then(res =>{
        dados.valores = res
    })
}

let intervalo = setInterval(buscarDados,1000)

console.log(dados.valores)


