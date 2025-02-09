const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click",(evt)=>{
    alert("Olá, Como estás?")
})

btn_confirm.addEventListener("click",(evt)=>{
    //const ret = confirm("Você está aprendendo muito?")
    if(confirm("Você está aprendendo muito?")){
        console.log("Botão OK pressionado.")
    }else{
        console.log("Botão CANCELAR pressionado.")
    }
})

btn_prompt.addEventListener("click",(evt)=>{
    const nome = prompt("Digite o seu nome","Digite seu nome aqui")
    if(nome == null){
        console.log("Botão CANCELAR pressionado")
    }else{
        console.log(`Nome digitado é: ${nome}`)
    }
    
})


