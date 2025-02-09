const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    //window.location = "aula86.html"
    //window.location.replace("aula86.html")
    //window.location.assign("aula86.html")
    //window.location.reload()
    //window.history.back()
    //window.history.forward()
    //window.history.go()
    //console.log(window.history.length)
    // console.log(url.value)
    window.location = url.value
})