const pessoa={
    nome:"Rivaldo",
    canal:"CFB Cursos",
    curso:"Javascript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

const string_pessoa='{"nome":"Bruno","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa=JSON.stringify(pessoa) //Converte objecto em string JSON
const o_json_pessoa=JSON.parse(string_pessoa) //Converte string JSON em objecto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)