class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static callback_ok = null;
    static callback_nao_ok = null;
    static config = {
        cor: null, //"rgba(30, 126, 236, 0.801)",
        img: null,
        endpoint: null, //"https://af591cea-e942-4023-bfef-0516e19d00c2-00-28hp6ztbk1kjc.kirk.replit.dev/"
    };

    static login=(callback_ok,callback_nao_ok,config)=>{
        this.config = config;
        this.callback_ok=()=>{callback_ok()};
        this.callback_nao_ok=()=>{callback_nao_ok()};
        this.estilocss =
        ".fundoLogin{display:flex; justify-content:center; align-items:center; width:100%; height:100vh; position:absolute; top:0px;left: 0px; background-color: rgba(0,0,0,0.75); box-sizing:border-box;}"+
        ".baseLogin{display:flex; justify-content:center; align-items:stretch; width:40%; box-sizing:inherit;}"+  
        ".elementosLogin{display:flex; justify-content:center; align-items:flex-start; flex-direction:column; width:50%; background-color:#eee; padding:10px; border-radius:10px 0px 0px 10px; box-sizing: inherit;}"+
        ".logoLogin{display:flex; justify-content:center; align-items:center; width:50%; background-color:#bbb; padding:10px; border-radius:0px 10px 10px 0px; box-sizing:inherit;}"+
        ".logoLogin img{width:70%;}"+
        ".campoLogin, label{display:flex; justify-content:flex-start; align-items:flex-start; flex-direction:column; box-sizing:inherit; margin-bottom:5px;}"+
        ".campoLogin label{font-size:18px;}"+
        ".campoLogin input{font-size:18px; padding:5px; background-color:#fff; border-radius:5px;}"+
        ".botoesLogin{display:flex; width:100%; justify-content:space-around; align-items:center; box-sizing:inherit;}"+
        `.botoesLogin button{cursor:pointer; background-color:${this.config.cor}; color:#fff; border-radius:5px;padding:10px; width:100px; box-sizing:inherit;}`

        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id","id_estiloLogin");
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo);

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        document.body.prepend(fundoLogin);  

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class","baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        baseLogin.appendChild(elementosLogin);

        const campoLoginUsername = document.createElement("div");
        campoLoginUsername.setAttribute("id","campoLoginUsername");
        campoLoginUsername.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername = document.createElement("label");
        labelUsername.innerHTML = "Username"
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("id","f_username");
        inputUsername.setAttribute("type","text");
        inputUsername.setAttribute("name","f_username")
        labelUsername.appendChild(inputUsername);

        const campoLoginPassword = document.createElement("div");
        campoLoginPassword.setAttribute("id","campoLoginUsername");
        campoLoginPassword.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginPassword);

        const labelPassword = document.createElement("label");
        labelPassword.innerHTML = "Password"
        campoLoginPassword.appendChild(labelPassword);

        const inputPassword = document.createElement("input");
        inputPassword.setAttribute("id","f_password");
        inputPassword.setAttribute("type","password");
        inputPassword.setAttribute("name","f_password")
        labelPassword.appendChild(inputPassword);

        const botoesLogin = document.createElement("div")
        botoesLogin.setAttribute("class", "botoesLogin")
        elementosLogin.appendChild(botoesLogin)

        const btn_login = document.createElement("button")
        btn_login.setAttribute("id","btn_login")
        btn_login.innerHTML = "Login"
        btn_login.addEventListener("click",(evt)=>{
            this.verificarLogin();
        })
        botoesLogin.appendChild(btn_login)

        const btn_cancelar = document.createElement("button")
        btn_cancelar.setAttribute("id","btn_cancelar")
        btn_cancelar.innerHTML = "Cancelar"
        btn_cancelar.addEventListener("click",(evt)=>{
            this.fechar()
        })
        botoesLogin.appendChild(btn_cancelar)

        const logoLogin = document.createElement("div")
        logoLogin.setAttribute("id","logoLogin")
        logoLogin.setAttribute("class","logoLogin")
        baseLogin.appendChild(logoLogin)

        const imgLogoLogin = document.createElement("img")
        imgLogoLogin.setAttribute("title","CFBCursos")
        imgLogoLogin.setAttribute("src",this.config.img)
        logoLogin.appendChild(imgLogoLogin)
    }

    static verificarLogin=()=>{
        const mat = document.getElementById("f_username").value;
        const pas = document.getElementById("f_password").value;

        const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`
         fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            if(res){
                sessionStorage.setItem("logado","true");
                sessionStorage.setItem("matlogado",mat);
                sessionStorage.setItem("nomeLogado",res.nome);
                sessionStorage.setItem("acessologado",res.acesso);
                this.callback_ok();
                this.fechar();
            }else{
                sessionStorage.setItem("logado","false");
                sessionStorage.setItem("matlogado","");
                sessionStorage.setItem("nomeLogado","");
                sessionStorage.setItem("acessologado","");
                this.callback_nao_ok();
            }
        })
    }

    static fechar=()=>{
        const fundoLogin = document.getElementById("fundoLogin");
        fundoLogin.remove();
        const id_estiloLogin = document.getElementById("id_estiloLogin");
        id_estiloLogin.remove();
    }
}

// export {Login};
// var http = require('http');
// var url = require('url');
// http.createServer(function(req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.writeHead(200, {'Content-Type': 'application/json'});

//   let parametros=url.parse(req.url,true);

//   let mat=parametros.query.matricula;
//   let pas=parametros.query.senha;

//   let dados=null
  
//   if(mat=="123" && pas=="321"){
//     dados = {
//       nome: "Rivaldo",
//       acesso: 10
//     }
//   }
  
//   res.end(JSON.stringify(dados));
// }).listen(8080);

//Exemplo de chamada
//https://af591cea-e942-4023-bfef-0516e19d00c2-00-28hp6ztbk1kjc.kirk.replit.dev/?matricula=123&senha=321