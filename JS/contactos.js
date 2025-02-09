import { contactos } from "./bancoContactos.js";

let contacto={
    getAllContactos:function(){
        return contactos
    },
    getContacto:function(i_cont){
        return contactos[i_cont]
    },
    addContacto:function(novoContacto,DestinoDOM){
        const cont={
            nome:novoContacto.nome,
            telefone:novoContacto.telefone,
            email:novoContacto.email
        }
        contactos.push(cont)
        DestinoDOM.innerHTML=""
        contactos.map((c)=>{
            const div = document.createElement("div")
            div.setAttribute("class", "contacto")
            const p_nome = document.createElement("p")
            p_nome.innerHTML = c.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = c.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = c.email
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            DestinoDOM.appendChild(div)
        })
        
    }
}

export default contacto