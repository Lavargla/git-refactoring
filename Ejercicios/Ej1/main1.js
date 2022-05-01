function createGrupo(codigo, horario, alumnos = []){
    const ObjGrupo = new Object();
    ObjGrupo.Codigo = codigo;
    ObjGrupo.Horario = horario;
    ObjGrupo.Alumnos = alumnos;
    ObjGrupo.MatricularAlumno = function AñadirAlumno(AlumnoNuevo = {}) { 
        alumnos.push(AlumnoNuevo) 
    }
    ObjGrupo.NúmeroAlumnos = function TotalAlumnos(){
        return alumnos.length;
    }
    ObjGrupo.NotaMediaGrupo = function Mediar(){
        var suma = 0;
        var media;
        for(var i = 0; i < alumnos.length; i++){
            suma = suma + alumnos[i].NotaAcceso;
        }
        media = suma / alumnos.length;
        return media;
    }
    return ObjGrupo;
}
function createAlumno(dni, nombre_completo, nota_acceso){
    const ObjAlumno = new Object();
    ObjAlumno.DNI = dni;
    ObjAlumno.NombreCompleto = nombre_completo;
    ObjAlumno.NotaAcceso = nota_acceso;
    return ObjAlumno;
}



const Grupo1 = createGrupo("DAW1", "mañana");
console.log(Grupo1);
const Alumno1 = createAlumno("999", "Juan", 7);
const Alumno2 = createAlumno("9992", "Maria", 0);
console.log(Alumno1);
Grupo1.MatricularAlumno(Alumno1);
Grupo1.MatricularAlumno(Alumno2);
console.log(Grupo1.NúmeroAlumnos());
console.log(Grupo1.NotaMediaGrupo());



