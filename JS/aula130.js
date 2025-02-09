const timer = document.getElementById("timer")

const tmpInicial = Date.now()

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
    const formatado = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) +":" + (segundo < 10 ? "0" + segundo : segundo)
    return formatado
}

setInterval(contador,1000)


