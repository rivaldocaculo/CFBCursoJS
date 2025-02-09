class Cursos{
    static cursos = ["Javascript", "PHP", "React","CSS3","React","C++","Arduino","C#","HTML"]

    constructor(){}

    static getAllCursos=()=>{
        return this.cursos
    }

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static AddCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static ApagarCurso=()=>{
        this.cursos=[]
    }

}

export default Cursos
