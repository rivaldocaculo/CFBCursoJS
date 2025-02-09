import { Cxmsg } from "../JS/cxmsg.js"

const callback_ok=()=>{
   
}

const callback_nao_ok=()=>{
    const config={
        cor: "#800",
        tipo: "ok",
        textos:null,
        comando_sn: ()=>{},
    }
    Cxmsg.mostrar(config, "[ERRO]", "Login não efectuado! Usuário ou Password incorrectos"); 
}

const configLogin={
        cor:"rgba(30, 126, 236, 0.801)",
        img: "../img/login1.png",
        endpoint: "https://af591cea-e942-4023-bfef-0516e19d00c2-00-28hp6ztbk1kjc.kirk.replit.dev"
}

Login.login(callback_ok,callback_nao_ok,configLogin);