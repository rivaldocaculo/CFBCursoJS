const caixa1=document.querySelector("#caixa1")
const btn_c1=document.querySelector("#c1")
const btn_todos=[...document.querySelectorAll(".curso")]

caixa1.addEventListener("click",(evt)=>{
    console.log("clicou")
    console.log(evt)
})

btn_todos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        evt.stopPropagation()
    })
})