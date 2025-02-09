import { Cxmsg } from "./cxmsg.js"
const config = {
    cor: "#0f0"
    }

    Cxmsg.config(config)

const timer = document.getElementById("timer")
const btn_iniciar = document.getElementById("btn_iniciar")
const btn_parar = document.getElementById("btn_parar")
const btn_zerar = document.getElementById("btn_zerar")

let intervalo = null
let tmpInicial = null

const contador =()=> {
    const tmpActual = Date.now()
    let cont = tmpActual - tmpInicial
    let seg = Math.floor((tmpActual - tmpInicial) / 1000)
    timer.innerHTML = converter(seg)
}



const converter =(seg)=> {
    const hora = Math.floor(seg / 3600)
    const resto = seg % 3600
    const minuto = Math.floor(resto / 60)
    const segundo = Math.floor(resto % 60)
    const tempoformatado = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) +":" + (segundo < 10 ? "0" + segundo : segundo)
    return tempoformatado
}

btn_iniciar.addEventListener("click",(evt)=>{
    tmpInicial = Date.now()
    intervalo = setInterval(contador,1000)
})

btn_parar.addEventListener("click",(evt)=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click",(evt)=>{
    tmpInicial = Date.now()
    timer.innerHTML = "00:00:00"
    clearInterval(intervalo)
    Cxmsg.mostrar("Cronometro", "O Cronometro foi zerado")
})


