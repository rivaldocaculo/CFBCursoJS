const cursos = ["Javascript", "PHP", "React","CSS3","React","C++","Arduino","C#"]

// const getAllCursos=()=>{
//     return cursos
// }

export default function getAllCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}


export {cursos,getCurso}

