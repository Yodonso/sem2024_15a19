
function logica() {
  var numeros=["pablo", "emilio", "andres", "natalia", "paula", 6.1 ]
       //muestra los nombres anteriores en posiciones 
    for (let i = 0; i<numeros.length; i++ ){
          console.log(numeros[i]) 
    }
     
      // crea una secuencia dependiendo de los datos, en este caso en multiplos de a 5

    for (let i = 5; i <50; i= i+5 ){
         console.log(i)
    }
}
function arrobj() {
    let ALUMNOSMATRICULADOS= [
        {"rut": "1-9", "nombre":"pedro", "apellido":"perez", "cod_curso": "AE600", "descripccion":"Algoritmos y Estructura de datos"},
        {"rut": "2-7", "nombre":"juan", "apellido":"jara", "cod_curso": "BD253", "descripccion":"Bases de Datos"},
        {"rut": "2-7", "nombre":"juan", "apellido":"jara", "cod_curso": "AE600", "descripccion":"Algoritmos y Estructura de datos"},
        {"rut": "3-5", "nombre":"diego", "apellido":"diaz", "cod_curso": "BD253", "descripccion":"Bases de Datos"},
        {"rut": "4-4", "nombre":"maria", "apellido":"martinez", "cod_curso": "BD253", "descripccion":"Bases de Datos"}
    ]
        console.log(ALUMNOSMATRICULADOS)   
        console.log(ALUMNOSMATRICULADOS[0].rut) 
        console.log(ALUMNOSMATRICULADOS[1].rut)
        console.log(ALUMNOSMATRICULADOS[2].rut)
        console.log(ALUMNOSMATRICULADOS[3].rut)
        console.log(ALUMNOSMATRICULADOS[4].rut)

    let ALUMNOS= [
        {"rut": "1-9", "nombre":"pedro", "apellido":"perez"},
        {"rut": "2-7", "nombre":"juan", "apellido":"jara",},
        {"rut": "3-5", "nombre":"diego", "apellido":"diaz",},
        {"rut": "4-4", "nombre":"maria", "apellido":"martinez",}
    ]
        console.log(ALUMNOS)   
        console.log(ALUMNOS[0].rut) 
        console.log(ALUMNOS[1].rut)
        console.log(ALUMNOS[2].rut)
        console.log(ALUMNOS[3].rut)

    let MATRICULA= [
        {"rut": "1-9",  "cod_curso": "AE600", },
        {"rut": "2-7",  "cod_curso": "BD253", },
        {"rut": "2-7",  "cod_curso": "AE600", },
        {"rut": "3-5",  "cod_curso": "BD253", },
        {"rut": "4-4",  "cod_curso": "BD253", }
    ]
        console.log(MATRICULA)   
        console.log(MATRICULA[0].rut) 
        console.log(MATRICULA[1].rut)
        console.log(MATRICULA[2].rut)
        console.log(MATRICULA[3].rut)
        console.log(MATRICULA[4].rut)        

    let cursos = [
        {"cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
        {"cod_curso" : "BD253","descripcion" : "Bases de Datos"}
    ]

        console.log(cursos)   
        console.log(cursos[0].cod_curso) 
        console.log(cursos[1].cod_curso)      
}

