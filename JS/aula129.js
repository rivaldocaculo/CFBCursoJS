const timer = document.getElementById("timer")

const tmpInicial = Date.now()
console.log(tmpInicial)

const contador =()=> {
    const tmpActual = Date.now()
    let cont = tmpActual - tmpInicial
    let seg = Math.floor((tmpActual - tmpInicial) / 1000)
    console.log(seg)
}


setInterval(contador,1000)


