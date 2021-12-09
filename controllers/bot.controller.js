const Tutor = require("../models/Tutor.model");
const Alumno = require("../models/Alumno.model");
const CourseModel = require("../models/Course.model");

const mensaje_bot = async (req, res) => {
  let pregunta = req.body.cadena;
  pregunta = pregunta.toLocaleLowerCase();
  let respuesta = [];
  const operacion = get_filtro(pregunta);
  const user = req.body.userID;
  if (typeof operacion == "string") {
    res.send(operacion);
  } else {
    switch (operacion) {
      case 1:
        // mostrar cursos de matematica que estoy llevando el profesor-"nombre_del_profesor"
        const dataUser = await Alumno.findById(user);
        const id_cursos = dataUser.cursos.map((value) => value.id_curso);
        const cursos = await CourseModel.find({ _id: { $in: id_cursos } });
        const id_profesores = cursos.map((value) => value.profesorId);
        const data_profesor = await Tutor.find({ _id: { $in: id_profesores } });
        for (var x = 0; x < data_profesor.length; x++) {
          var zz = data_profesor[x].name;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          console.log(Nombre, pregunta);
          if (Nombre.test(pregunta)) {
            respuesta = cursos.find(
              (value) =>
                value.tema == "Matematica" &&
                value.profesorId == data_profesor[x]._id
            );
            console.log(respuesta, cursos[0].tema);

            break;
          }
        }

        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      case 10:
        break;
      case 11:
        break;
      case 11:
        break;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        break;
      case 16:
        break;
      case 17:
        break;
      case 18:
        break;
      case 19:
        break;
      case 20:
        break;
      case 21:
        break;
      case 22:
        break;
      case 23:
        break;
      case 24:
        break;
      case 25:
        break;
      case 26:
        break;
      case 27:
        break;
      case 28:
        break;
      case 29:
        break;
      case 30:
        break;
    }
    res.send(respuesta);
  }
};

function get_filtro(cadena) {
  var flack = null;

  // Variables ----------------------
  var llevar = RegExp("llevo|llevando|me enseña");
  var estoy = RegExp("estoy matriculado|estoy matriculada");
  var cursos = /cursos/;
  var curso = RegExp / "curso|area|campo";

  // fechas
  var fecha = "dia | fecha";

  // cursos:
  var math = /matematica/;
  var fisica = /fisica/;
  var quimica = /quimica/;
  var computacion = /computacion/;

  // nombre
  var nombre = RegExp("nombre|nombres");
  var profesor = RegExp("profesor|docente|tutor");
  var profesores = RegExp("profesores|docentes|tutores");

  // preguntas
  var cual = RegExp("cual|cuales");
  var que = RegExp("que");

  // datos personales
  var edad = RegExp("edad|años");
  var nombremio = RegExp("mi nombre|cómo me llamo");
  var mi = RegExp("mis|mi");

  var alumno = RegExp("Alumnos|Estudiantes");

  // complemento
  var mostrar_dar = RegExp("mostrar|muestrame|dar|dame");
  var buscador = RegExp("buscador");
  var ayuda = RegExp("help|ayuda");

  console.log(cadena);

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
}*/
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
          flack = 24;
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
          flack = 27;
        }
        if (computacion.test(cadena)) {
          // mostar todos profesores que enseñan el curso de computacion
          s++;
          flack = 28;
        }
        if (fisica.test(cadena)) {
          // mostar todos profesores que enseñan el curso de fisica
          s++;
          flack = 29;
        }
      }
    } else {
      // mostrar el nombre de todos los profesores
      flack = 30;
    }
  }

  // ------------------------------------------------------------------------------------
  // parte 3, mostrar cursos

  var m = 0;

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
          flack = 2;
        }
        if (quimica.test(cadena)) {
          m++;
          // mostrar cursos de quimica que estoy llevando el profesor-"nombre_del_profesor"
          flack = 3;
        }
        if (computacion.test(cadena)) {
          m++;
          // mostrar cursos de computacion que estoy llevando el profesor-"nombre_del_profesor"
          flack = 4;
        }
        if (m == 0) {
          // mostrar todos los cursos que estoy llevando con el profesor-"nombre_del_profesor"
          flack = 5;
        }
      } else {
        if (math.test(cadena)) {
          m++;
          // mostrar todos los cursos de matematica que enseña el profesor-"nombre_del_profesor"
          flack = 6;
        }
        if (fisica.test(cadena)) {
          m++;
          // mostrar todos los cursos de fisica que enseña el profesor-"nombre_del_profesor"
          flack = 7;
        }
        if (quimica.test(cadena)) {
          m++;
          // mostrar todos los cursos de quimica que enseña el profesor-"nombre_del_profesor"
          flack = 8;
        }
        if (computacion.test(cadena)) {
          m++;
          // mostrar todos los cursos de computacion que enseña el profesor-"nombre_del_profesor"
          flack = 9;
        }

        if (m == 0) {
          // mostrar todos los cursos que enseña el profesor-"nombre_del_profesor"
          flack = 10;
        }
      }
    } else {
      // cursos que llevo
      if (llevar.test(cadena)) {
        if (math.test(cadena)) {
          // mostrar todos los cursos de matematica que estoy llevando
          flack = 11;
        }
        if (fisica.test(cadena)) {
          // mostrar todos los cursos de fisica que estoy llevando
          flack = 12;
        }
        if (quimica.test(cadena)) {
          // mostrar todos los cursos de quimica que estoy llevando
          flack = 13;
        }
        if (computacion.test(cadena)) {
          // mostrar todos los cursos de computacion que estoy llevando
          flack = 14;
        }
        if (m == 0) {
          // mostrar todos los cursos que llevo
          flack = 15;
        }
      } else {
        // cursos totales
        if (math.test(cadena)) {
          // mostrar todos los cursos de matematica
          flack = 16;
        }
        if (computacion.test(cadena)) {
          // mostrar todos los cursos de computacion
          flack = 17;
        }
        if (fisica.test(cadena)) {
          // mostrar todos los cursos de fisica
          flack = 18;
        }
        if (quimica.test(cadena)) {
          // mostrar todos los cursos de quimica
          flack = 19;
        }

        if (m == 0) {
          // mostrar todos los cursos
          flack = 20;
        }
      }
    }
  }

  return flack;
}

module.exports = {
  mensaje_bot,
};
