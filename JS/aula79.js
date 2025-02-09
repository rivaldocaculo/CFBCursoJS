const div_data = document.querySelector(".div_data")
const div_relogio = document.querySelector(".div_relogio")
const timer = document.querySelector(".timer")
const hora_alarme = document.querySelector("#hora_alarme")
const btn_activar = document.querySelector("#btn_activar")
const btn_parar = document.querySelector("#btn_parar")
const tmp_alarme = document.querySelector("#tmp_alarme")

const som_alarme = new Audio("../alarme.mp3")
som_alarme.loop = -1
let ts_actual = null
let ts_alarme = null
let alarme_activado = false
let alarme_tocando = false

btn_activar.addEventListener("click",()=>{
    ts_actual = Date.now()
    ts_alarme = ts_actual + (tmp_alarme.value * 1000)
    alarme_activado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = "Hora do Alarme:" + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

btn_parar.addEventListener("click",()=>{
    alarme_activado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause();
    som_alarme.currenTimer = 0;
})

const data = new Date()

let dia= data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes= data.getMonth()
mes = mes < 10 ? "0" + mes : mes
const data_r =  dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML = data_r

const relogio=()=>{
    const data = new Date()
    let horas = data.getHours()
    horas = horas < 10 ? "0" + horas : horas
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos
    const hora_completa = horas + ":" + minutos + ":" + segundos
    div_relogio.innerHTML = hora_completa
    if(alarme_activado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio,1000)

// getDate() = Dia do Mês
// getDay() = Dia da Semana(numero)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliSeconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds() = Define Segundos
// setMilliSeconds() = Define milisegundos
// toDateString() = Retorna somente a data
