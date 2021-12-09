var cadena = "mostrar";
// Variables ----------------------
var llevar = RegExp("llevo|llevando|me enseña");
var estoy = RegExp("estoy matriculado|estoy matriculada");
var cursos = /cursos/;
var curso = RegExp / "curso|area|campo";

// fechas
var dia = "dia | fecha";

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

cadena = cadena.toLowerCase();

// ---------------------------------------------------------------------------------
// parte 1: Interactuar
var parte1 = 0;
var mensaje = "";

if (nombremio.test(cadena) && !hola.test(cadena)) {
  mensaje = "mi nombre es: ";
}
if (edad.test(cadena)) {
  mensaje = "mi edad es: ";
}

if (fecha.test(cadena)) {
  mensaje = "la fecha de hoy es: ";
}

if (ayuda.test(cadena)) {
  mensaje = "Este es un chatbot donde puedes preguntar sobre los cursos";
}

if (como_unirme.test(cadena)) {
  mensaje = "Para unirte al curso debes pedir el id, es indispensable";
}

if (hola.test(cadena)) {
  mensaje = "Hola, soy tu Bot personalizado";
}

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
      }
      if (fisica.test(cadena)) {
        // mostrar todos los profesores que me enseñan el cursos de fisica
        s++;
      }
      if (quimica.test(cadena)) {
        // mostrar todos los profesores que me enseñan el curso de quimica
        s++;
      }
      if (computacion.test(cadena)) {
        // mostrar todos los profesores que me enseñan el curso de computacion
        s++;
      }
      if (s == 0) {
        // mostrar todos los cursos que llevo
      }
    } else {
      // ALL CURSOS ()
      if (math.test(cadena)) {
        // mostar todos profesores que enseñan el curso de matematica
        s++;
      }
      if (quimica.test(cadena)) {
        // mostar todos profesores que enseñan el curso de quimica
        s++;
      }
      if (computacion.test(cadena)) {
        // mostar todos profesores que enseñan el curso de computacion
        s++;
      }
      if (fisica.test(cadena)) {
        // mostar todos profesores que enseñan el curso de fisica
        s++;
      }
    }
  } else {
    // mostrar el nombre de todos los profesores
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
      }
      if (fisica.test(cadena)) {
        m++;
        // mostrar cursos de fisica que estoy llevando el profesor-"nombre_del_profesor"
      }
      if (quimica.test(cadena)) {
        m++;
        // mostrar cursos de quimica que estoy llevando el profesor-"nombre_del_profesor"
      }
      if (computacion.test(cadena)) {
        m++;
        // mostrar cursos de computacion que estoy llevando el profesor-"nombre_del_profesor"
      }
      if (m == 0) {
        // mostrar todos los cursos que estoy llevando con el profesor-"nombre_del_profesor"
      }
    } else {
      if (math.test(cadena)) {
        m++;
        // mostrar todos los cursos de matematica que enseña el profesor-"nombre_del_profesor"
      }
      if (fisica.test(cadena)) {
        m++;
        // mostrar todos los cursos de fisica que enseña el profesor-"nombre_del_profesor"
      }
      if (quimica.test(cadena)) {
        m++;
        // mostrar todos los cursos de quimica que enseña el profesor-"nombre_del_profesor"
      }
      if (computacion.test(cadena)) {
        m++;
        // mostrar todos los cursos de computacion que enseña el profesor-"nombre_del_profesor"
      }

      if (m == 0) {
        // mostrar todos los cursos que enseña el profesor-"nombre_del_profesor"
      }
    }
  } else {
    // cursos que llevo
    if (llevar.test(cadena)) {
      if (math.test(cadena)) {
        // mostrar todos los cursos de matematica que estoy llevando
      }
      if (fisica.test(cadena)) {
        // mostrar todos los cursos de fisica que estoy llevando
      }
      if (quimica.test(cadena)) {
        // mostrar todos los cursos de quimica que estoy llevando
      }
      if (computacion.test(cadena)) {
        // mostrar todos los cursos de computacion que estoy llevando
      }
      if (m == 0) {
        // mostrar todos los cursos que llevo
      }
    } else {
      // cursos totales
      if (math.test(cadena)) {
        // mostrar todos los cursos de matematica
      }
      if (computacion.test(cadena)) {
        // mostrar todos los cursos de computacion
      }
      if (fisica.test(cadena)) {
        // mostrar todos los cursos de fisica
      }
      if (quimica.test(cadena)) {
        // mostrar todos los cursos de quimica
      }

      if (m == 0) {
        // mostrar todos los cursos
      }
    }
  }
}
