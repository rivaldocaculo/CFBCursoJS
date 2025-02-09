function soma(...valores){
    let res=0
    for(let v of valores){
        res+= v
    }
    return res
}

console.log(soma(20,10,2,1,3))