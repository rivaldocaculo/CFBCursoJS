const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")

const obterDados=()=>{
    const endpoint = "https://af591cea-e942-4023-bfef-0516e19d00c2-00-28hp6ztbk1kjc.kirk.replit.dev/"
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
        p_nivel.innerHTML = `Nível: ${dados.nivel}`
        p_press.innerHTML = `Pressão: ${dados.pressao}`
    })    
}

let intervalo = setInterval(obterDados,1000)





