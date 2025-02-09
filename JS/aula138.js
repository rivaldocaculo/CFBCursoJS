import {Cxmsg} from "../JS/cxmsg.js"
    const config = {
    cor: "#48f"
    }

    Cxmsg.config(config)

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click", ()=>{
    Cxmsg.mostrar("CFB Cursos", "Curso de Javascript")
})

btn_mostrarcxmsg2.addEventListener("click", ()=>{
    Cxmsg.mostrar("Facebook", "Rivaldo Manuel Caculo")
})

btn_mostrarcxmsg3.addEventListener("click", ()=>{
    Cxmsg.mostrar("Javascript","Aula 138")  
})