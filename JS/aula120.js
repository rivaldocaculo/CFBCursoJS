const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let msg=null

    if(f_nota.validity.valueMissing){
        msg="Preencha este campo"
    }else if(f_nota.validity.rangeOverflow){
        msg="Digite uma nota entre 0 e 10"
    }else if(f_nota.validity.rangeUnderflow){
        msg="Digite um número positivo entre 0 e 10"
    }
    f_nota.reportValidity()
    // f_msg.innerHTML=msg
    evt.preventDefault()
})

// document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
//     let estadoValidacao=f_nota.validity

//     if(estadoValidacao.valueMissing){
//         f_nota.setCustomValidity("Preencha este campo")
//     }else if(estadoValidacao.rangeOverflow){
//         f_nota.setCustomValidity("Digite uma nota entre 0 e 10")
//     }else if(estadoValidacao.rangeUnderflow){
//         f_nota.setCustomValidity("Digite um número positivo entre 0 e 10")
//     }
//     f_nota.reportValidity()
//     // f_msg.innerHTML=f_nota.validationMessage
//     evt.preventDefault()
// })