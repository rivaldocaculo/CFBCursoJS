import { Login } from "./login149.js";
import { Cxmsg } from "./cxmsg.js";

const callback_ok=()=>{
   
}

const callback_nao_ok=()=>{
    const config={
        cor: "#800",
        tipo: "ok",
        textos:null,
        comando_sn: null,
    }
    Cxmsg.mostrar(config, "[ERRO]", "Login não efectuado! Usuário ou Password incorrectos"); 
}


Login.login(callback_ok,callback_nao_ok);