import c from './contactos.js'
const listaContactos = document.getElementById("listaContactos")
const btn_gravar = document.getElementById("btn_gravar")

btn_gravar.addEventListener("click",(evt)=>{
    const cont={
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value
    }
    c.addContacto(cont,listaContactos)
    console.log(c.getAllContactos())
})