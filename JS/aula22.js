const Valor_Padrao=10

let valor=0

console.log(valor)

function add(v){
    return valor+v
}

valor=add(10)
console.log(valor)

valor=add(5)
console.log(valor)

function soma(n1=Valor_Padrao,n2=Valor_Padrao){
    let res
    res=n1+n2
    return res
}

let resultado_soma=soma(Valor_Padrao,5)

//console.log(resultado_soma)