const objectos = document.getElementById("objectos")

const computador={
    CPU:"",
    RAM:"",
    HD:"",
    info:function(){
        console.log(`CPU:${this.CPU}`)
        console.log(`RAM:${this.RAM}`)
        console.log(`HD:${this.HD}`)
    }
}

computador["monitor"] = "22p"
computador.placaVideo = "rtx"
delete(computador.HD)
const c1 = Object.assign({},computador)
console.log(computador)
c1.info()

const c2 = Object.create(computador)

c2.CPU="i3"
c2.RAM="16GB"
c2.info()

const o1 = {obj1:'1'}
const o2 = {obj2:'2'}
const o3 = {obj3:'3'}
const o4 = Object.assign(o1,o2,o3)
console.log(o4)

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