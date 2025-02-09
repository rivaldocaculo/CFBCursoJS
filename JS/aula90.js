const objectos = document.getElementById("objectos")

const computador={
    CPU:"i7",
    RAM:"8GB",
    HD:"500GB",
    info:function(){
        console.log(`CPU:${this.CPU}`)
        console.log(`RAM:${this.RAM}`)
        console.log(`HD:${this.HD}`)
    }
}

computador["monitor"] = "22p"
computador.placaVideo = "rtx"

console.log(computador.placaVideo)

const computadores=[
    {
        CPU:"i7",
        RAM:"16GB",
        HD:"1000GB"
    },
    {
        CPU:"i3",
        RAM:"8GB",
        HD:"250GB"
    },
    {
        CPU:"i5",
        RAM:"4GB",
        HD:"500GB"
    }
]

computadores.map((c)=>{
    const div = document.createElement("div")
    div.innerHTML = c.CPU + "<br/>" + c.RAM + "<br/>" + c.HD
    div.setAttribute("class","computador")
    objectos.appendChild(div)
})


// console.log(computador)
// computador.info()
// objectos.innerHTML = JSON.stringify(computadores)