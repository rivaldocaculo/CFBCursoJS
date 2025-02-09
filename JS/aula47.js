const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btn_pesquisar=document.querySelector("#btn_pesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=["Rivaldo","Ageu","Nildo","Luis Octávio","Jó"]
p_array.innerHTML="[" + elementos_array + "]"

btn_pesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Nome Não Encontrado"
    const ret=elementos_array.find((ele,ind)=>{
        if(ele.toUpperCase==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML="Nome Encontrado: " +  ele + "</br> Posição: " + ind
            return ele
        }
    })
    console.log(ret)
})