const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btn_verificar=document.querySelector("#btn_verificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[21,19,19,18,21,18,22]
p_array.innerHTML="[" + elementos_array + "]"

btn_verificar.addEventListener("click",(evt)=>{
    const ret= elementos_array.every((ele,ind)=>{
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