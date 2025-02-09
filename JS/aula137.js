const config = {
    cor: "#48f"
}

const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg1 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")

btn_mostrarcxmsg.addEventListener("click", ()=>{
    cxmsg.mostrar("CFB Cursos", "Curso de Javascript")
})

btn_mostrarcxmsg2.addEventListener("click", ()=>{
    cxmsg.mostrar("Facebook", "Rivaldo Manuel Caculo")
    
})

btn_mostrarcxmsg3.addEventListener("click", ()=>{
    cxmsg.mostrar("Javascript","Aula 137")
    
})