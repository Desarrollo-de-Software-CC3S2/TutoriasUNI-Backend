const Tutor = require("../models/Tutor.model");
const Alumno = require("../models/Alumno.model");
const CourseModel = require("../models/Course.model");


const mensaje_bot = async (req, res) => {
    let pregunta = req.body.cadena
    pregunta = pregunta.toLocaleLowerCase();
    let cadena = pregunta
    let respuesta = []

    const operacion = get_filtro(pregunta)
    const user = req.body.userID
    if (typeof operacion == 'string') {
        res.send(operacion)
    } else {
        console.log(operacion)
        switch (operacion) {
            case 1:
                // mostrar cursos de matematica que estoy llevando el profesor-"nombre_del_profesor"
                const dataUser1 = await Alumno.findById(user)
                const id_cursos1 = dataUser1.cursos.map(value => value.id_curso)
                const cursos1 = await CourseModel.find({ _id:{$in:id_cursos1}})
                //console.log(cursos1)
                const id_profesores1 = cursos1.map(value => value.profesorId)
                const data_profesor1 = await Tutor.find({ _id:{$in:id_profesores1}})
                console.log(dataUser1)
                for (var x = 0; x < dataUser1.cursos.length; x++) {
                    var zz = dataUser1.cursos[x].nombre_tutor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    console.log(dataUser1.cursos[x].tema)
                    if (Nombre.test(cadena) && dataUser1.cursos[x].tema == "Matematica"){
                        console.log("entre")
                        console.log(dataUser1.cursos[x].nombre, " ", dataUser1.cursos[x].tema)
                    }
                }
                break
            case 2:
                // mostrar cursos de fisica que estoy llevando el profesor-"nombre_del_profesor"
                const dataUser2 = await Alumno.findById(user)
                const id_cursos2 = dataUser1.cursos.map(value => value.id_curso)
                const cursos2 = await CourseModel.find({ _id: { $in: id_cursos2 } })
                //console.log(cursos1)
                const id_profesores2 = cursos2.map(value => value.profesorId)
                const data_profesor2 = await Tutor.find({ _id: { $in: id_profesores2 } })
                // console.log(dataUser1)
                for (var x = 0; x < dataUser2.cursos.length; x++) {
                    var zz = dataUser2.cursos[x].nombre_tutor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if (Nombre.test(cadena) && dataUser2.cursos[x].tema == "Fisica") {
                        console.log(dataUser2.cursos[x].nombre, " ", dataUser5.cursos[x].tema)
                    }
                }
                break
            case 3:
                const dataUser3 = await Alumno.findById(user)
                const id_cursos3 = dataUser3.cursos.map(value => value.id_curso)
                const cursos3 = await CourseModel.find({ _id: { $in: id_cursos3 } })
                //console.log(cursos1)
                const id_profesores3 = cursos3.map(value => value.profesorId)
                const data_profesor3 = await Tutor.find({ _id: { $in: id_profesores3 } })
                // console.log(dataUser1)
                for (var x = 0; x < dataUser3.cursos.length; x++) {
                    var zz = dataUser3.cursos[x].nombre_tutor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if (Nombre.test(cadena) && dataUser3.cursos[x].tema == "Quimica") {
                        console.log(dataUser3.cursos[x].nombre, " ", dataUser5.cursos[x].tema)
                    }
                }
                break
            case 4:
                const dataUser4 = await Alumno.findById(user)
                const id_cursos4 = dataUser4.cursos.map(value => value.id_curso)
                const cursos4 = await CourseModel.find({ _id: { $in: id_cursos4 } })
                //console.log(cursos1)
                const id_profesores4 = cursos4.map(value => value.profesorId)
                const data_profesor4 = await Tutor.find({ _id: { $in: id_profesores4 } })
                // console.log(dataUser1)
                for (var x = 0; x < dataUser4.cursos.length; x++) {
                    var zz = dataUser4.cursos[x].nombre_tutor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if (Nombre.test(cadena) && dataUser4.cursos[x].tema == "Computacion") {
                        console.log(dataUser4.cursos[x].nombre, " ", dataUser5.cursos[x].tema)
                    }
                }
                break
            case 5:
                const dataUser5 = await Alumno.findById(user)
                const id_cursos5 = dataUser5.cursos.map(value => value.id_curso)
                const cursos5 = await CourseModel.findById({ _id: { $in: id_cursos5 } })
                //console.log(cursos1)
                const id_profesores5 = cursos5.map(value => value.profesorId)
                const data_profesor5 = await Tutor.find({ _id: { $in: id_profesores5 } })
                // console.log(dataUser1)
                for(var x=0 ; x<dataUser5.cursos.length ; x++){
                    var zz = dataUser5.cursos[x].nombre_tutor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena)){
                        console.log(dataUser5.cursos[x].nombre," ", dataUser5.cursos[x].tema)
                    }
                }
                
                break
            case 6:
                // mostrar todos los cursos de matematica que enseña el profesor-"nombre_del_profesor"
                const tutor6 = await Tutor.find({});
                for(var x=0 ; x<tutor6.length ; x++){
                    //console.log("entre")
                    var zz = tutor6[x].name_lastname;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena)){
                        for(var y=0 ; y<tutor6[x].cursos.length ; y++){
                            if(tutor6[x].cursos[y].tema == "Matematica"){
                                console.log(tutor6[x].cursos[y].tema," ",tutor6[x].cursos[y].nombre)
                            }
                        }
                    }
                }
                break
            case 7:
                // mostrar todos los cursos de fisica que enseña el profesor-"nombre_del_profesor"
                const tutor7 = await Tutor.find({});
                for(var x=0 ; x<tutor7.length ; x++){
                    //console.log("entre")
                    var zz = tutor7[x].name_lastname;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena)){
                        for(var y=0 ; y<tutor7[x].cursos.length ; y++){
                            if(tutor7[x].cursos[y].tema == "Fisica"){
                                console.log(tutor7[x].cursos[y].tema," ",tutor7[x].cursos[y].nombre)
                            }
                        }
                    }
                }
                break
            case 8:
                // 
                const tutor8 = await Tutor.find({});
                for(var x=0 ; x<tutor8.length ; x++){
                    //console.log("entre")
                    var zz = tutor8[x].name_lastname;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena)){
                        for(var y=0 ; y<tutor8[x].cursos.length ; y++){
                            if(tutor8[x].cursos[y].tema == "Quimica"){
                                console.log(tutor8[x].cursos[y].tema," ",tutor8[x].cursos[y].nombre)
                            }
                        }
                    }
                }
                break
            case 9:
                const tutor9 = await Tutor.find({});
                for(var x=0 ; x<tutor9.length ; x++){
                    //console.log("entre")
                    var zz = tutor9[x].name_lastname;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena)){
                        for(var y=0 ; y<tutor9[x].cursos.length ; y++){
                            if(tutor9[x].cursos[y].tema == "Computacion"){
                                console.log(tutor9[x].cursos[y].tema," ",tutor9[x].cursos[y].nombre)
                            }
                        }
                    }
                }
                break
            case 10:
                const tutor10 = await Tutor.find({});
                for(var x=0 ; x<tutor10.length ; x++){
                    //console.log("entre")
                    var zz = tutor10[x].name_lastname;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena)){
                        for(var y=0 ; y<tutor10[x].cursos.length ; y++){
                            console.log(tutor10[x].cursos[y].tema," ",tutor10[x].cursos[y].nombre)

                        }
                    }
                }
                break
            case 11:
                // matematica
                const dataUser11 = await Alumno.findById(user)
                const id_cursos11 = dataUser11.cursos.map(value => value.id_curso)
                const cursos11 = await CourseModel.find({ _id:{$in:id_cursos11}})
                //console.log(cursos11)
                const id_profesores11 = cursos11.map(value => value.profesorId)
                const data_profesor11 = await Tutor.find({ _id:{$in:id_profesores11}})
                //console.log(dataUser11)
                for (var x = 0; x < dataUser11.cursos.length; x++) {
                    if(dataUser11.cursos[x].tema =="Matematica"){
                        console.log(dataUser11.cursos[x].tema," ",dataUser11.cursos[x].nombre)
                    }
                }
                break
            case 12:
                // fisica
                const dataUser12 = await Alumno.findById(user)
                const id_cursos12 = dataUser12.cursos.map(value => value.id_curso)
                const cursos12 = await CourseModel.find({ _id:{$in:id_cursos12}})
                //console.log(cursos11)
                const id_profesores12 = cursos12.map(value => value.profesorId)
                const data_profesor12 = await Tutor.find({ _id:{$in:id_profesores12}})
                //console.log(dataUser11)
                for (var x = 0; x < dataUser12.cursos.length; x++) {
                    if(dataUser12.cursos[x].tema =="Fisica"){
                        console.log(dataUser12.cursos[x].tema," ",dataUser12.cursos[x].nombre)
                    }
                }
                break
            case 13:
                // quimica
                const dataUser13 = await Alumno.findById(user)
                const id_cursos13 = dataUser13.cursos.map(value => value.id_curso)
                const cursos13 = await CourseModel.find({ _id:{$in:id_cursos13}})
                //console.log(cursos11)
                const id_profesores13 = cursos13.map(value => value.profesorId)
                const data_profesor13 = await Tutor.find({ _id:{$in:id_profesores13}})
                //console.log(dataUser11)
                for (var x = 0; x < dataUser13.cursos.length; x++) {
                    if(dataUser13.cursos[x].tema =="Quimica"){
                        console.log(dataUser13.cursos[x].tema," ",dataUser13.cursos[x].nombre)
                    }
                }
                break
            case 14:
                const dataUser14 = await Alumno.findById(user)
                const id_cursos14 = dataUser14.cursos.map(value => value.id_curso)
                const cursos14 = await CourseModel.find({ _id:{$in:id_cursos14}})
                //console.log(cursos11)
                const id_profesores14 = cursos14.map(value => value.profesorId)
                const data_profesor14 = await Tutor.find({ _id:{$in:id_profesores14}})
                //console.log(dataUser11)
                for (var x = 0; x < dataUser14.cursos.length; x++) {
                    if(dataUser14.cursos[x].tema =="Computacion"){
                        console.log(dataUser14.cursos[x].tema," ",dataUser14.cursos[x].nombre)
                    }
                }
                break
            case 15:
                const dataUser15 = await Alumno.findById(user)
                const id_cursos15 = dataUser15.cursos.map(value => value.id_curso)
                const cursos15 = await CourseModel.find({ _id:{$in:id_cursos15}})
                //console.log(cursos11)
                const id_profesores15 = cursos15.map(value => value.profesorId)
                const data_profesor15 = await Tutor.find({ _id:{$in:id_profesores15}})
                //console.log(dataUser11)
                for (var x = 0; x < dataUser15.cursos.length; x++) {
                    console.log(dataUser15.cursos[x].tema," ",dataUser15.cursos[x].nombre)
                }
                break
            case 16:
                const cursos16 = await CourseModel.find({});
                for (var x = 0; x <cursos16.length; x++) {
                    if(cursos16[x].tema =="Matematica"){
                        console.log(cursos16[x].tema," ",cursos16[x].nombre)
                    }
                }
                break
            case 17:
                const cursos17 = await CourseModel.find({});
                for (var x = 0; x <cursos17.length; x++) {
                    if(cursos17[x].tema =="Computacion"){
                        console.log(cursos17[x].tema," ",cursos17[x].nombre)
                    }
                }
                break
            case 18:
                const cursos18 = await CourseModel.find({});
                for (var x = 0; x <cursos18.length; x++) {
                    if(cursos18[x].tema =="Fisica"){
                        console.log(cursos18[x].tema," ",cursos18[x].nombre)
                    }
                }
                break
            case 19:
                const cursos19 = await CourseModel.find({});
                for (var x = 0; x <cursos19.length; x++) {
                    if(cursos19[x].tema =="Quimica"){
                        console.log(cursos19[x].tema," ",cursos19[x].nombre)
                    }
                }
                break
            case 20:
                const cursos21 = await CourseModel.find({});
                for (var x = 0; x <cursos21.length; x++) {
                    console.log(cursos21[x].tema," ",cursos21[x].nombre)
                }
                break
            case 21:
                break
            case 22:
                break
            case 23:
                break
            case 24:
                break
            case 25:
                break
            case 26:
                break
            case 27:
                break
            case 28:
                break
            case 29:
                break
            case 30:
                break
            case 31:
                break
            case 32:
                break
            case 33:
                break
            case 34:
                break

        }
        res.send(respuesta)
    }
}


function get_filtro(cadena) {

    var flack = null

    // Variables ----------------------
    var llevar = RegExp("llevo|llevando|me enseña");
    var estoy = RegExp("estoy matriculado|estoy matriculada");
    var cursos = /cursos/;
    var curso = RegExp / ("curso|area|campo");

    // fechas
    var fecha = RegExp("dia|fecha");

    // cursos:
    var math = /matematica/;
    var fisica = /fisica/;
    var quimica = /quimica/;
    var computacion = /computacion/;
    var idiomas = RegExp("idiomas|Idiomas")
    var letras = RegExp("letras|Letras")

    // nombre 
    var nombre = RegExp("nombre|nombres");
    var profesor = RegExp("profesor|docente|tutor");
    var profesores = RegExp("profesores|docentes|tutores");

    // datos personales
    var edad = RegExp("edad|años");
    var nombremio = RegExp("mi nombre|cómo me llamo");
    var mi = RegExp("mis|mi");

    var alumno = RegExp("Alumnos|Estudiantes");

    // complemento
    var mostrar_dar = RegExp("mostrar|muestrame|dar|dame");
    var buscador = RegExp("buscador");
    var ayuda = RegExp("Ayuda|ayuda|asistencia")

    console.log(cadena)

    cadena = cadena.toLowerCase();

    // ---------------------------------------------------------------------------------
    // parte 1: Interactuar
    var parte1 = 0;
    var mensaje = "";
    /*
    
    if(nombremio.test(cadena) && !hola.test(cadena)){
        mensaje = "mi nombre es: ";
        return mensaje;
    }
    
    if(fecha.test(cadena)){
        mensaje = "la fecha de hoy es: ";
        return mensaje;
    }
    
    if(ayuda.test(cadena)){
        mensaje = "Este es un chatbot donde puedes preguntar sobre los cursos";
        return mensaje;
    }
    
    if(como_unirme.test(cadena)){
        mensaje = "Para unirte al curso debes pedir el id, es indispensable";
        return mensaje;
    }
    
    if(hola.test(cadena)){
        mensaje = "Hola, soy tu Bot personalizado";
        return mensaje;
    }
    */
    // -----------------------------------------------------------------------------------
    // parte 2, mostrar nombres de profesores
    var s = 0;
    var no_se_encontro = 0;
    if (profesores.test(cadena)) {
        if (curso.test(cadena)) {
            if (llevar.test(cadena)) {
                if (math.test(cadena)) {
                    //mostrar todos los profesores que me enseñan el curso de matematica
                    s++;
                    flack = 21;
                }
                if (fisica.test(cadena)) {
                    // mostrar todos los profesores que me enseñan el cursos de fisica
                    s++;
                    flack = 22;
                }
                if (quimica.test(cadena)) {
                    // mostrar todos los profesores que me enseñan el curso de quimica
                    s++;
                    flack = 23;
                }
                if (computacion.test(cadena)) {
                    // mostrar todos los profesores que me enseñan el curso de computacion
                    s++;
                    flack = 24
                }
                if (s == 0) {
                    // mostrar todos los profesores que me enseñan
                    flack = 25;
                }
            } else {
                // ALL CURSOS ()
                if (math.test(cadena)) {
                    // mostar todos profesores que enseñan el curso de matematica
                    s++;
                    flack = 26;
                }
                if (quimica.test(cadena)) {
                    // mostar todos profesores que enseñan el curso de quimica
                    s++;
                    flack = 27
                }
                if (computacion.test(cadena)) {
                    // mostar todos profesores que enseñan el curso de computacion
                    s++;
                    flack = 28;

                }
                if (fisica.test(cadena)) {
                    // mostar todos profesores que enseñan el curso de fisica
                    s++;
                    flack = 29
                }
            }
        } else {
            // mostrar el nombre de todos los profesores
            flack = 30
        }
    }

    // ------------------------------------------------------------------------------------
    // parte 3, mostrar cursos 

    var m = 0

    if (cursos.test(cadena)) {
        if (profesor.test(cadena)) {
            if (llevar.test(cadena)) {
                if (math.test(cadena)) {
                    m++;
                    // mostrar cursos de matematica que estoy llevando el profesor-"nombre_del_profesor" 
                    flack = 1;
                }
                if (fisica.test(cadena)) {
                    m++;
                    // mostrar cursos de fisica que estoy llevando el profesor-"nombre_del_profesor"
                    flack = 2
                }
                if (quimica.test(cadena)) {
                    m++;
                    // mostrar cursos de quimica que estoy llevando el profesor-"nombre_del_profesor"
                    flack = 3
                }
                if (computacion.test(cadena)) {
                    m++;
                    // mostrar cursos de computacion que estoy llevando el profesor-"nombre_del_profesor"
                    flack = 4
                }
                if (m == 0) {
                    // mostrar todos los cursos que estoy llevando con el profesor-"nombre_del_profesor"
                    flack = 5
                }

            } else {
                if (math.test(cadena)) {
                    m++;
                    // mostrar todos los cursos de matematica que enseña el profesor-"nombre_del_profesor"
                    flack = 6
                }
                if (fisica.test(cadena)) {
                    m++;
                    // mostrar todos los cursos de fisica que enseña el profesor-"nombre_del_profesor"
                    flack = 7
                }
                if (quimica.test(cadena)) {
                    m++;
                    // mostrar todos los cursos de quimica que enseña el profesor-"nombre_del_profesor"
                    flack = 8
                }
                if (computacion.test(cadena)) {
                    m++;
                    // mostrar todos los cursos de computacion que enseña el profesor-"nombre_del_profesor"
                    flack = 9
                }

                if (m == 0) {
                    // mostrar todos los cursos que enseña el profesor-"nombre_del_profesor"
                    flack = 10
                }

            }
        } else {
            // cursos que llevo
            if (llevar.test(cadena)) {
                if (math.test(cadena)) {
                    // mostrar todos los cursos de matematica que estoy llevando
                    m++;
                    flack = 11
                }
                if (fisica.test(cadena)) {
                    // mostrar todos los cursos de fisica que estoy llevando
                    m++;
                    flack = 12
                }
                if (quimica.test(cadena)) {
                    // mostrar todos los cursos de quimica que estoy llevando
                    flack = 13
                    m++;
                }
                if (computacion.test(cadena)) {
                    // mostrar todos los cursos de computacion que estoy llevando
                    flack = 14
                    m++;
                }
                if (m == 0) {
                    // mostrar todos los cursos que llevo
                    flack = 15
                }

            } else {
                // cursos totales
                if (math.test(cadena)) {
                    // mostrar todos los cursos de matematica
                    m++;
                    flack = 16
                }
                if (computacion.test(cadena)) {
                    // mostrar todos los cursos de computacion
                    m++;
                    flack = 17
                }
                if (fisica.test(cadena)) {
                    // mostrar todos los cursos de fisica
                    m++;
                    flack = 18
                }
                if (quimica.test(cadena)) {
                    // mostrar todos los cursos de quimica
                    m++;
                    flack = 19
                }

                if (m == 0) {
                    // mostrar todos los cursos
                    flack = 20
                }
            }
        }
    }

    return flack;
}

module.exports = {
    mensaje_bot
}



