class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static endpoint = "https://af591cea-e942-4023-bfef-0516e19d00c2-00-28hp6ztbk1kjc.kirk.replit.dev/";
    //https://af591cea-e942-4023-bfef-0516e19d00c2-00-28hp6ztbk1kjc.kirk.replit.dev/?matricula=123&senha=321

    static login=(mat,pas)=>{
        this.endpoint += `?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint)
        .then(res => res.json())
        .then(res => {
            if(res){
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                console.log(res)
            }else{
                console.log("Usuário não encontrado")
            }
        })
    }
}

export {Login};