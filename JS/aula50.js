const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btn_reduzir=document.querySelector("#btn_reduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let ant=[]
let atu=[]
let dobro=[]

p_array.innerHTML="[" + elementos_array + "]"

btn_reduzir.addEventListener("click",(evt)=>{
    dobro.push(elementos_array[0] * 2)
    resultado.innerHTML=elementos_array.reduce((anterior,actual,pos)=>{
        ant.push(anterior)
        atu.push(actual)
        dobro.push(actual * 2)
        return actual + anterior
    })
    resultado.innerHTML += "</br> Valor Anterior: " + ant
    resultado.innerHTML += "</br> Valor Actual: " + atu
    resultado.innerHTML += "</br> Valor Dobro: " + dobro
})