const endpoint = "https://af591cea-e942-4023-bfef-0516e19d00c2-00-28hp6ztbk1kjc.kirk.replit.dev/"
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})