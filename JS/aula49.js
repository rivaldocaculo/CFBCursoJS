const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btn_verificar=document.querySelector("#btn_verificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[16,12,10,17,15,13,11,19]
p_array.innerHTML="[" + elementos_array + "]"

btn_verificar.addEventListener("click",(evt)=>{
    const ret= elementos_array.some((ele,ind)=>{
        if(ele < 18){
            resultado.innerHTML="Array Não Conforme Na Posição " + ind
        }
        return ele >= 18
    })
    if(ret){
        resultado.innerHTML="OK!"
    }
    //console.log(ret)
})