const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.querySelector("#ton")
const tlimpar = document.querySelector("#tlimpar")
const tigual = document.getElementById("tigual")
const tcpy = document.getElementById("tcpy")
const teste = document.getElementById("teste")

let sinal = false
let decimal = false

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evt.target.innerHTML
            } 
        }
    })
})

tlimpar.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    display.innerHTML = 0
})

tigual.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML  = res
})

tcpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select()
    // teste.setSelectionRange(0,99999)//Mobile
    // navigator.clipboard.writeText(teste.value)
})





