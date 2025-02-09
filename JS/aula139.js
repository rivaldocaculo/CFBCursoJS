import {Cxmsg} from "../JS/cxmsg.js"
const config = {
        cor: "#48f",
        tipo: "ok", //tipos: ok, SN
        textos:["SIM","NÃO"],
        comando_sn:()=>{}
}
    
const fsim=()=>{
    alert("Botão SIM pressionado")
}

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click", ()=>{
    config.tipo = "ok"
    Cxmsg.mostrar(config, "CFB Cursos", "Curso de Javascript")
})


btn_mostrarcxmsg2.addEventListener("click", ()=>{
    config.tipo = "sn"
    config.comando_sn = ()=>{fsim()} 
    Cxmsg.mostrar(config, "Youtube", "Curso de Javascript")
})

btn_mostrarcxmsg3.addEventListener("click", ()=>{
    config.tipo = "sn"
    config.textos = ["OK","CANCELA"]
    config.comando_sn = ()=>{} 
    Cxmsg.mostrar(config, "Javascript","Aula 139")  
})