const caixa = document.querySelector("#caixa")

const carros=["Mercedez","Ferrari","KIA","CHEVRO"]

//const ol = `<ol>${carros[0]}</ol> <ol>${carros[1]}</ol> <ol>${carros[2]}</ol> <ol>${carros[3]}</ol>`
let ul = `<ul>`
carros.map((el)=>{
    ul += `<li>${el}</li>`
})

ul += `</ul>`

//const frase = `Este é o</br> curso de ${curso} do<br/> nosso canal ${canal}.` 
//caixa.innerHTML=frase
//console.log(frase1)

caixa.innerHTML = ul
