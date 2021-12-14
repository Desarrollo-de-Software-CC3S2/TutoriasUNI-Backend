const Tutor = require("../models/Tutor.model");
const Alumno = require("../models/Alumno.model");
const CourseModel = require("../models/Course.model");

const mensaje_bot = async (req, res) => {
  let pregunta = req.body.cadena;
  pregunta = pregunta.toLocaleLowerCase();
  let cadena = pregunta;
  let temporal = "";
  let respuesta = [];
  let responces = "";
  let zzz = 0;
  const operacion = get_filtro(pregunta);
  const user = req.body.userID;

  if (typeof operacion == "string") {
    res.status(200).json({ msg: operacion });
  } else {
    console.log(operacion);
    switch (operacion) {
      case 1:
        // mostrar cursos de matematica que estoy llevando el profesor-"nombre_del_profesor"
        const dataUser1 = await Alumno.findById(user);
        const id_cursos1 = dataUser1.cursos.map((value) => value.id_curso);
        const cursos1 = await CourseModel.find({_id:{$in: id_cursos1 }});
        const id_profesores1 = cursos1.map((value) => value.profesorId);
        const data_profesor1 = await Tutor.find({
          _id: { $in: id_profesores1 },
        });
        for (var x = 0; x < dataUser1.cursos.length; x++) {
          var zz = dataUser1.cursos[x].nombre_tutor;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena) && dataUser1.cursos[x].tema == "Matematica") {
            responces =
              responces +
              dataUser1.cursos[x].nombre +
              " " +
              dataUser1.cursos[x].tema +
              " (" +
              dataUser1.cursos[x].id_curso +
              ") | ";
          }
        }

        break;
      case 2:
        // mostrar cursos de fisica que estoy llevando el profesor-"nombre_del_profesor"
        const dataUser2 = await Alumno.findById(user);
        const id_cursos2 = dataUser1.cursos.map((value) => value.id_curso);
        const cursos2 = await CourseModel.find({ _id: { $in: id_cursos2 } });
        const id_profesores2 = cursos2.map((value) => value.profesorId);
        const data_profesor2 = await Tutor.find({
          _id: { $in: id_profesores2 },
        });
        for (var x = 0; x < dataUser2.cursos.length; x++) {
          var zz = dataUser2.cursos[x].nombre_tutor;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena) && dataUser2.cursos[x].tema == "Fisica") {
            responces =
              responces +
              dataUser2.cursos[x].nombre +
              " " +
              dataUser2.cursos[x].tema +
              " (" +
              dataUser2.cursos[x].id_curso +
              ") | ";
          }
        }
        break;
      case 3:
        // mostrar todos los cursos de quimica que me enseña el profesor "nombre_del_profesor"
        const dataUser3 = await Alumno.findById(user);
        const id_cursos3 = dataUser3.cursos.map((value) => value.id_curso);
        const cursos3 = await CourseModel.find({ _id: { $in: id_cursos3 } });
        const id_profesores3 = cursos3.map((value) => value.profesorId);
        const data_profesor3 = await Tutor.find({
          _id: { $in: id_profesores3 },
        });
        // console.log(dataUser1)
        for (var x = 0; x < dataUser3.cursos.length; x++) {
          var zz = dataUser3.cursos[x].nombre_tutor;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena) && dataUser3.cursos[x].tema == "Quimica") {
            responces =
              responces +
              dataUser3.cursos[x].nombre +
              " " +
              dataUser3.cursos[x].tema +
              " (" +
              dataUser3.cursos[x].id_curso +
              ") | ";
          }
        }
        break;
      case 4:
        const dataUser4 = await Alumno.findById(user);
        const id_cursos4 = dataUser4.cursos.map((value) => value.id_curso);
        const cursos4 = await CourseModel.find({_id:{ $in: id_cursos4 } });
        //console.log(cursos1)
        const id_profesores4 = cursos4.map((value) => value.profesorId);
        const data_profesor4 = await Tutor.find({
          _id: { $in: id_profesores4 },
        });
        // console.log(dataUser1)
        for (var x = 0; x < dataUser4.cursos.length; x++) {
          var zz = dataUser4.cursos[x].nombre_tutor;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (
            Nombre.test(cadena) &&
            dataUser4.cursos[x].tema == "Computacion"
          ) {
            responces =
              responces +
              dataUser4.cursos[x].nombre +
              " " +
              dataUser4.cursos[x].tema +
              " (" +
              dataUser4.cursos[x].id_curso +
              ") | ";
          }
        }
        break;
      case 5:
        const dataUser5 = await Alumno.findById(user);
        const id_cursos5 = dataUser5.cursos.map((value) => value.id_curso);
        const cursos5 = await CourseModel.find({_id: { $in: id_cursos5 }});
        //console.log(cursos1)
        const id_profesores5 = cursos5.map((value) => value.profesorId);
        const data_profesor5 = await Tutor.find({_id: { $in: id_profesores5 }});
        // console.log(dataUser1)
        for (var x = 0; x < dataUser5.cursos.length; x++) {
          var zz = dataUser5.cursos[x].nombre_tutor;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena)) {
            responces =
              responces +
              dataUser5.cursos[x].nombre +
              " " +
              dataUser5.cursos[x].tema +
              " (" +
              dataUser5.cursos[x].id_curso +
              ") | ";
          }
        }

        break;
      case 6:
        // mostrar todos los cursos de matematica que enseña el profesor-"nombre_del_profesor"
        const tutor6 = await Tutor.find({});
        for (var x = 0; x < tutor6.length; x++) {
          //console.log("entre")
          var zz = tutor6[x].name_lastname;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena)) {
            for (var y = 0; y < tutor6[x].cursos.length; y++) {
              console.log(tutor6[x].cursos[y])
              if (tutor6[x].cursos[y].tema == "Matematica") {
                responces =
                  responces +
                  tutor6[x].cursos[y].tema +
                  " " +
                  tutor6[x].cursos[y].nombre +
                  " (" +
                  tutor6[x].cursos[y].id_curso +
                  ") | ";
              }
            }
          }
        }
        break;
      case 7:
        // mostrar todos los cursos de fisica que enseña el profesor-"nombre_del_profesor"
        const tutor7 = await Tutor.find({});
        for (var x = 0; x < tutor7.length; x++) {
          //console.log("entre")
          var zz = tutor7[x].name_lastname;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena)) {
            for (var y = 0; y < tutor7[x].cursos.length; y++) {
              console.log()
              if (tutor7[x].cursos[y].tema == "Fisica") {
                responces =
                  responces +
                  tutor7[x].cursos[y].tema +
                  " " +
                  tutor7[x].cursos[y].nombre +
                  " (" +
                  tutor7[x].cursos[y].id_curso +
                  ") | ";
              }
            }
          }
        }
        break;
      case 8:
        //
        const tutor8 = await Tutor.find({});
        for (var x = 0; x < tutor8.length; x++) {
          //console.log("entre")
          var zz = tutor8[x].name_lastname;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena)) {
            for (var y = 0; y < tutor8[x].cursos.length; y++) {
              console.log(tutor8[x].cursos[y])
              if (tutor8[x].cursos[y].tema == "Quimica") {
                responces =
                  responces +
                  tutor8[x].cursos[y].tema +
                  " " +
                  tutor8[x].cursos[y].nombre +
                  " (" +
                  tutor8[x].cursos[y].id_curso +
                  ") | ";
              }
            }
          }
        }
        break;
      case 9:
        const tutor9 = await Tutor.find({});
        for (var x = 0; x < tutor9.length; x++) {
          //console.log("entre")
          var zz = tutor9[x].name_lastname;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena)) {
            for (var y = 0; y < tutor9[x].cursos.length; y++) {
              console.log(tutor9[x].cursos[y])
              if (tutor9[x].cursos[y].tema == "Computacion") {
                responces =
                  responces +
                  tutor8[x].cursos[y].tema +
                  " " +
                  tutor8[x].cursos[y].nombre +
                  " (" +
                  tutor8[x].cursos[y].id_curso +
                  ") | ";
              }
            }
          }
        }
        break;
      case 10:
        const tutor10 = await Tutor.find({});
        for (var x = 0; x < tutor10.length; x++) {
          //console.log("entre")
          var zz = tutor10[x].name_lastname;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena)) {
            for (var y = 0; y < tutor10[x].cursos.length; y++) {
              responces = responces + tutor10[x].cursos[y].tema + " " +tutor10[x].cursos[y].nombre + " (" + tutor10[x].cursos[y].id_curso + ") | ";
            }
          }
        }
        break;
      case 11:
        // matematica
        const dataUser11 = await Alumno.findById(user);
        const id_cursos11 = dataUser11.cursos.map((value) => value.id_curso);
        const cursos11 = await CourseModel.find({ _id: { $in: id_cursos11 } });
        //console.log(cursos11)
        const id_profesores11 = cursos11.map((value) => value.profesorId);
        const data_profesor11 = await Tutor.find({
          _id: { $in: id_profesores11 },
        });
        //console.log(dataUser11)
        for (var x = 0; x < dataUser11.cursos.length; x++) {
          if (dataUser11.cursos[x].tema == "Matematica") {
            responces =
              responces +
              dataUser11.cursos[x].tema +
              " " +
              dataUser11.cursos[x].nombre + " (" + dataUser11.cursos[x].id_curso +
              ") | ";
          }
        }
        break;
      case 12:
        // fisica
        const dataUser12 = await Alumno.findById(user);
        const id_cursos12 = dataUser12.cursos.map((value) => value.id_curso);
        const cursos12 = await CourseModel.find({ _id: { $in: id_cursos12 } });
        //console.log(cursos11)
        const id_profesores12 = cursos12.map((value) => value.profesorId);
        const data_profesor12 = await Tutor.find({
          _id: { $in: id_profesores12 },
        });
        //console.log(dataUser11)
        for (var x = 0; x < dataUser12.cursos.length; x++) {
          if (dataUser12.cursos[x].tema == "Fisica") {
            responces =
              responces +
              dataUser12.cursos[x].tema +
              " " +
              dataUser12.cursos[x].nombre + " ("+dataUser12.cursos[x].id_curso +
              ") | ";
          }
        }
        break;
      case 13:
        // quimica
        const dataUser13 = await Alumno.findById(user);
        const id_cursos13 = dataUser13.cursos.map((value) => value.id_curso);
        const cursos13 = await CourseModel.find({ _id: { $in: id_cursos13 } });
        //console.log(cursos11)
        const id_profesores13 = cursos13.map((value) => value.profesorId);
        const data_profesor13 = await Tutor.find({
          _id: { $in: id_profesores13 },
        });
        //console.log(dataUser11)
        for (var x = 0; x < dataUser13.cursos.length; x++) {
          if (dataUser13.cursos[x].tema == "Quimica") {
            responces =
              responces +
              dataUser13.cursos[x].tema +
              " " +
              dataUser13.cursos[x].nombre +
              " (" +
              dataUser13.cursos[x].id_curso +
              ") | ";
          }
        }
        break;
      case 14:
        const dataUser14 = await Alumno.findById(user);
        const id_cursos14 = dataUser14.cursos.map((value) => value.id_curso);
        const cursos14 = await CourseModel.find({ _id: { $in: id_cursos14 } });
        //console.log(cursos11)
        const id_profesores14 = cursos14.map((value) => value.profesorId);
        const data_profesor14 = await Tutor.find({
          _id: { $in: id_profesores14 },
        });
        //console.log(dataUser11)
        for (var x = 0; x < dataUser14.cursos.length; x++) {
          if (dataUser14.cursos[x].tema == "Computacion") {
            responces =
              responces +
              dataUser14.cursos[x].tema +
              " " +
              dataUser14.cursos[x].nombre + " ("+dataUser14.cursos[x].id_curso +
              ") | ";
          }
        }
        break;
      case 15:
        const dataUser15 = await Alumno.findById(user);
        const id_cursos15 = dataUser15.cursos.map((value) => value.id_curso);
        const cursos15 = await CourseModel.find({ _id: { $in: id_cursos15 } });
        //console.log(cursos11)
        const id_profesores15 = cursos15.map((value) => value.profesorId);
        const data_profesor15 = await Tutor.find({
          _id: { $in: id_profesores15 },
        });
        //console.log(dataUser11)
        for (var x = 0; x < dataUser15.cursos.length; x++) {
          responces =
            responces +
            dataUser15.cursos[x].tema +
            " " +
            dataUser15.cursos[x].nombre + " ("+dataUser15.cursos[x].id_curso +
            ") | ";
        }
        break;
      case 16:
        const cursos16 = await CourseModel.find({});
        for (var x = 0; x < cursos16.length; x++) {
          if (cursos16[x].tema == "Matematica") {
            responces =
              responces + cursos16[x].tema + " " + cursos16[x].nombre + " ("+dataUser16.cursos[x].id_curso +") | ";
          }
        }
        break;
      case 17:
        const cursos17 = await CourseModel.find({});
        for (var x = 0; x < cursos17.length; x++) {
          if (cursos17[x].tema == "Computacion") {
            responces =
              responces + cursos17[x].tema + " " + cursos17[x].nombre +" ("+dataUser17.cursos[x].id_curso + ") | ";
          }
        }
        break;
      case 18:
        const cursos18 = await CourseModel.find({});
        for (var x = 0; x < cursos18.length; x++) {
          if (cursos18[x].tema == "Fisica") {
            responces =
              responces + cursos18[x].tema + " " + cursos18[x].nombre + " ("+dataUser18.cursos[x].id_curso +") | ";
          }
        }
        break;
      case 19:
        const cursos19 = await CourseModel.find({});
        for (var x = 0; x < cursos19.length; x++) {
          if (cursos19[x].tema == "Quimica") {
            responces =
              responces + cursos19[x].tema + " " + cursos19[x].nombre + " ("+dataUser19.cursos[x].id_curso +") | ";
          }
        }
        break;
      case 20:
        const cursos21 = await CourseModel.find({});
        for (var x = 0; x < cursos21.length; x++) {
          responces =
            responces + cursos21[x].tema + ": " + cursos21[x].nombre + " (" + cursos21[x].id_curso +") | ";
        }
        break;
      case 21:
        const dataUser21 = await Alumno.findById(user);
        //console.log(dataUser21)
        let datas21 = [];
        let long_data21 = 0;
        let mm21 = 0;
        for (var x = 0; x < dataUser21.cursos.length; x++) {
          mm21 = 0;
          if (dataUser21.cursos[x].tema == "Matematica") {
            for (var i = 0; i < long_data21; i++) {
              if (dataUser21.cursos[x].nombre_tutor == datas21[i]) {
                mm21++;
              }
            }
            if (mm21 == 0) {
              datas21.push(dataUser21.cursos[x].nombre_tutor);
              responces = responces + datas21[long_data21] + " ";
              long_data21++;
            }
          }
        }

        break;
      case 22:
        const dataUser22 = await Alumno.findById(user);
        //console.log(dataUser21)
        let datas22 = [];
        let long_data22 = 0;
        let mm22 = 0;
        for (var x = 0; x < dataUser22.cursos.length; x++) {
          mm22 = 0;
          if (dataUser22.cursos[x].tema == "Fisica") {
            for (var i = 0; i < long_data22; i++) {
              if (dataUser22.cursos[x].nombre_tutor == datas22[i]) {
                mm22++;
              }
            }
            if (mm22 == 0) {
              datas22.push(dataUser22.cursos[x].nombre_tutor);
              responces = responces + datas22[long_data22] + " ";
              long_data22++;
            }
          }
        }
        break;
      case 23:
        const dataUser23 = await Alumno.findById(user);
        let datas23 = [];
        let long_data23 = 0;
        let mm23 = 0;
        for (var x = 0; x < dataUser23.cursos.length; x++) {
          mm23 = 0;
          if (dataUser23.cursos[x].tema == "Quimica") {
            for (var i = 0; i < long_data23; i++) {
              if (dataUser23.cursos[x].nombre_tutor == datas23[i]) {
                mm23++;
              }
            }
            if (mm23 == 0) {
              datas23.push(dataUser23.cursos[x].nombre_tutor);
              responces = responces + datas23[long_data23] + " ";
              long_data23++;
            }
          }
        }
        break;
      case 24:
        const dataUser24 = await Alumno.findById(user);
        //console.log(dataUser21)
        let datas24 = [];
        let long_data24 = 0;
        let mm24 = 0;
        for (var x = 0; x < dataUser24.cursos.length; x++) {
          mm24 = 0;
          if (dataUser24.cursos[x].tema == "Computacion") {
            for (var i = 0; i < long_data24; i++) {
              if (dataUser24.cursos[x].nombre_tutor == datas24[i]) {
                mm24++;
              }
            }
            if (mm24 == 0) {
              datas24.push(dataUser24.cursos[x].nombre_tutor);
              responces = responces + datas24[long_data24] + " ";
              long_data24++;
            }
          }
        }

        break;
      case 25:
        const dataUser25 = await Alumno.findById(user);
        //console.log(dataUser21)
        let datas25 = [];
        let long_data25 = 0;
        let mm25 = 0;
        for (var x = 0; x < dataUser25.cursos.length; x++) {
          mm25 = 0;
          for (var i = 0; i < long_data25; i++) {
            if (dataUser25.cursos[x].nombre_tutor == datas25[i]) {
              mm25++;
            }
          }
          if (mm25 == 0) {
            datas25.push(dataUser25.cursos[x].nombre_tutor);
            responces = responces + datas25[long_data25] + " ";
            long_data25++;
          }
        }
        break;
      case 26:
        const tutor26 = await Tutor.find({});
        for (var x = 0; x < tutor26.length; x++) {
          console.log(tutor26[x].name_lastname, ":");
          for (var y = 0; y < tutor26[x].cursos.length; y++) {
            if (tutor26[x].cursos[y].tema == "Matematica") {
              responces = responces + tutor26[x].name_lastname + " | ";
              y = tutor26[x].cursos.length;
            }
          }
        }

        break;
      case 27:
        const tutor27 = await Tutor.find({});
        for (var x = 0; x < tutor27.length; x++) {
          console.log(tutor27[x].name_lastname, ":");
          for (var y = 0; y < tutor27[x].cursos.length; y++) {
            if (tutor27[x].cursos[y].tema == "Quimica") {
              responces = responces + tutor27[x].name_lastname + " | ";
              y = tutor27[x].cursos.length;
            }
          }
        }
        break;
      case 28:
        const tutor28 = await Tutor.find({});
        for (var x = 0; x < tutor28.length; x++) {
          console.log(tutor28[x].name_lastname, ":");
          for (var y = 0; y < tutor28[x].cursos.length; y++) {
            if (tutor28[x].cursos[y].tema == "Computacion") {
              responces = responces + tutor28[x].name_lastname + " | ";
              y = tutor28[x].cursos.length;
            }
          }
        }
        break;
      case 29:
        const tutor29 = await Tutor.find({});
        for (var x = 0; x < tutor29.length; x++) {
          console.log(tutor29[x].name_lastname, ":");
          for (var y = 0; y < tutor29[x].cursos.length; y++) {
            if (tutor29[x].cursos[y].tema == "Fisica") {
              responces = responces + tutor29[x].name_lastname + " | ";
              y = tutor29[x].cursos.length;
            }
          }
        }
        break;
      case 30:
        const tutor30 = await Tutor.find({});
        for (var x = 0; x < tutor30.length; x++) {
          responces = responces + tutor30[x].name_lastname + " | ";
        }
        break;
      case 31:
        // mostrar cursos de matematica que estoy llevando el profesor-"nombre_del_profesor"
        const dataUser31 = await Alumno.findById(user);
        const id_cursos31 = dataUser31.cursos.map((value) => value.id_curso);
        const cursos31 = await CourseModel.find({ _id: { $in: id_cursos31 } });
        //console.log(cursos1)
        const id_profesores31 = cursos31.map((value) => value.profesorId);
        const data_profesor31 = await Tutor.find({
          _id: { $in: id_profesores31 },
        });
        // console.log(dataUser1)
        for (var x = 0; x < dataUser31.cursos.length; x++) {
          var zz = dataUser31.cursos[x].nombre_tutor;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena) && dataUser31.cursos[x].tema == "Idiomas") {
            rresponces =
              responces +
              dataUser31.cursos[x].nombre +
              " " +
              dataUser31.cursos[x].tema +
              " | ";
          }
        }
        break;
      case 32:
        // mostrar cursos de matematica que estoy llevando el profesor-"nombre_del_profesor"
        const dataUser32 = await Alumno.findById(user);
        const id_cursos32 = dataUser32.cursos.map((value) => value.id_curso);
        const cursos32 = await CourseModel.find({ _id: { $in: id_cursos32 } });
        //console.log(cursos1)
        const id_profesores32 = cursos32.map((value) => value.profesorId);
        const data_profesor32 = await Tutor.find({
          _id: { $in: id_profesores32 },
        });
        // console.log(dataUser1)
        for (var x = 0; x < dataUser32.cursos.length; x++) {
          var zz = dataUser32.cursos[x].nombre_tutor;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena) && dataUser32.cursos[x].tema == "Letras") {
            responces =
              responces +
              dataUser32.cursos[x].nombre +
              " " +
              dataUser32.cursos[x].tema +
              " | ";
          }
        }
        break;
      case 33:
        // idiomas
        const dataUser33 = await Alumno.findById(user);
        const id_cursos33 = dataUser33.cursos.map((value) => value.id_curso);
        const cursos33 = await CourseModel.find({ _id: { $in: id_cursos33 } });
        //console.log(cursos11)
        const id_profesores33 = cursos33.map((value) => value.profesorId);
        const data_profesor33 = await Tutor.find({
          _id: { $in: id_profesores33 },
        });
        //console.log(dataUser11)
        for (var x = 0; x < dataUser33.cursos.length; x++) {
          console.log(dataUser33.cursos[x])
          if (dataUser33.cursos[x].tema == "Idiomas") {
            responces =
              responces +
              dataUser33.cursos[x].tema +
              " " +
              dataUser33.cursos[x].nombre + " (" + dataUser33.cursos[x].id_curso
              ") | ";
          }
        }
        break;
      case 34:
        // letras
        const dataUser34 = await Alumno.findById(user);
        const id_cursos34 = dataUser34.cursos.map((value) => value.id_curso);
        const cursos34 = await CourseModel.find({ _id: { $in: id_cursos34 } });
        //console.log(cursos11)
        const id_profesores34 = cursos34.map((value) => value.profesorId);
        const data_profesor34 = await Tutor.find({
          _id: { $in: id_profesores34 },
        });
        //console.log(dataUser11)
        for (var x = 0; x < dataUser34.cursos.length; x++) {
          if (dataUser34.cursos[x].tema == "Letras") {
            responces =
              responces +
              dataUser34.cursos[x].tema +
              " " +
              dataUser34.cursos[x].nombre +
              " | ";
          }
        }
        break;
      case 35:
        const tutor35 = await Tutor.find({});
        for (var x = 0; x < tutor35.length; x++) {
          //console.log("entre")
          var zz = tutor35[x].name_lastname;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena)) {
            for (var y = 0; y < tutor35[x].cursos.length; y++) {
              if (tutor8[x].cursos[y].tema == "Idiomas") {
                responces =
                  responces +
                  tutor35[x].cursos[y].tema +
                  " " +
                  tutor35[x].cursos[y].nombre +" ("+ tutor35[x].cursos[y]._id +
                  ") | ";
              }
            }
          }
        }
        break;
      case 36:
        const tutor36 = await Tutor.find({});
        for (var x = 0; x < tutor36.length; x++) {
          //console.log("entre")
          var zz = tutor36[x].name_lastname;
          zz = zz.toLocaleLowerCase();
          var Nombre = RegExp(zz);
          if (Nombre.test(cadena)) {
            for (var y = 0; y < tutor36[x].cursos.length; y++) {
              if (tutor36[x].cursos[y].tema == "Letras") {
                responces =
                  responces +
                  tutor36[x].cursos[y].tema +
                  " " +
                  tutor36[x].cursos[y].nombre + " ("+ tutor36[x].cursos[y]._id+
                  ") | ";
              }
            }
          }
        }
        break;
      case 37:
        const cursos37 = await CourseModel.find({});
        for (var x = 0; x < cursos37.length; x++) {
          if (cursos37[x].tema == "Idiomas") {
            responces =
              responces + cursos37[x].tema + " " + cursos37[x].nombre + " (" + cursos37[x]._id + ") | ";
          }
        }
        break;
      case 38:
        const cursos38 = await CourseModel.find({});
        for (var x = 0; x < cursos38.length; x++) {
          if (cursos38[x].tema == "Letras") {
            responces =
              responces + cursos38[x].tema + " " + cursos38[x].nombre + " (" + cursos38[x]._id + ") | ";
          }
        }
        break;
      case 39:
        const dataUser39 = await Alumno.findById(user);
        //console.log(dataUser21)
        let datas39 = [];
        let long_data39 = 0;
        let mm39 = 0;
        for (var x = 0; x < dataUser39.cursos.length; x++) {
          mm39 = 0;
          if (dataUser39.cursos[x].tema == "Idiomas") {
            for (var i = 0; i < long_data39; i++) {
              if (
                dataUser39.cursos[x].nombre_tutor ==
                dataUser39.cursos[i].nombre_tutor
              ) {
                mm39++;
              }
            }
            if (mm39 == 0) {
              datas39.push(dataUser39.cursos[x].nombre_tutor);
              responces = responces + datas39[long_data39] + " ";
              long_data39++;
            }
          }
        }

        break;
      case 40:
        const dataUser40 = await Alumno.findById(user);
        //console.log(dataUser21)
        let datas40 = [];
        let long_data40 = 0;
        let mm40 = 0;
        for (var x = 0; x < dataUser40.cursos.length; x++) {
          mm40 = 0;
          if (dataUser40.cursos[x].tema == "Letras") {
            for (var i = 0; i < long_data40; i++) {
              if (
                dataUser40.cursos[x].nombre_tutor ==
                dataUser40.cursos[i].nombre_tutor
              ) {
                mm40++;
              }
            }
            if (mm40 == 0) {
              datas40.push(dataUser40.cursos[x].nombre_tutor);
              responces = responces + datas40[long_data40] + " | ";
              long_data40++;
            }
          }
        }
        break;
      case 41:
        const tutor41 = await Tutor.find({});
        for (var x = 0; x < tutor41.length; x++) {
          console.log(tutor41[x].name_lastname, ":");
          for (var y = 0; y < tutor41[x].cursos.length; y++) {
            if (tutor41[x].cursos[y].tema == "Idiomas") {
              responces = responces + tutor41[x].name_lastname + " | ";
              y = tutor41[x].cursos.length;
            }
          }
        }
        break;

      case 42:
        const tutor42 = await Tutor.find({});
        for (var x = 0; x < tutor42.length; x++) {
          console.log(tutor42[x].name_lastname, ":");
          for (var y = 0; y < tutor42[x].cursos.length; y++) {
            if (tutor42[x].cursos[y].tema == "Letras") {
              responces = responces + tutor42[x].name_lastname + " | ";
              y = tutor42[x].cursos.length;
            }
          }
        }
        break;
       
        case 43:
            const alumno_datos = await Alumno.findById(user);
            responces = "Tu nombre es: " + alumno_datos.name;
            break;
    }
    res.status(200).json({ msg: responces });
  }
};

const guardar_mensaje = async (req, res) => {
  try {
    const { userId: userId } = req.params;
    const user = Alumno.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404);
    } else {
      res.status(202).json(user);
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

function get_filtro(cadena) {
    var flack = null;

    // Variables ----------------------
    var llevar = RegExp("llevo|llevando|me enseña|mis cursos|estoy matriculado|estoy matriculado|estoy llevando|mis cursos");
    var estoy = RegExp("estoy matriculado|estoy matriculado|estoy llevando|mis cursos");
    var cursos = /cursos/;
    var curso = RegExp("curso|area|campo");

    // fechas
    var fecha = RegExp("dia|fecha");

    // cursos:
    var math = /matematica/;
    var fisica = /fisica/;
    var quimica = /quimica/;
    var computacion = /computacion/;
    var idiomas = RegExp("idiomas|Idiomas");
    var letras = RegExp("letras|Letras");

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
    var mostrar_dar = RegExp("mostrar|muestrame|dar|dame|enlistar");
    var buscador = RegExp("buscador");
    var ayuda = RegExp("Ayuda|ayuda|asistencia");
    var como_unirme = RegExp("como unirme|como puedo unirme|unirme|unirse|unir");
    var hola = RegExp("hola|hola me llamo")
    var hora = RegExp("hora")
    console.log(cadena);

    cadena = cadena.toLowerCase();

    // ---------------------------------------------------------------------------------
    // parte 1: Interactuar
    var parte1 = 0;
    var mensaje = "";
    
    var parte1 = 0;

    if(fecha.test(cadena) && hora.test(cadena)){
        parte1++;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        	
        var horas_mostrar = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        if (dd < 10) {
          dd = '0' + dd;
        }
        
        if (mm < 10) {
          mm = '0' + mm;
        }
        
        today = mm + '/' + dd + '/' + yyyy;

        mensaje = "la fecha de hoy es: " + today + " hora: " + horas_mostrar;
        
        return mensaje;

 

    }else if(hora.test(cadena)){
        var today = new Date();
        var horas_mostrar1 = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        mensaje = "Hora: " + horas_mostrar1;
        return mensaje;

    }else if(fecha.test(cadena)){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        	
        if (dd < 10) {
          dd = '0' + dd;
        }
        
        if (mm < 10) {
          mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        mensaje = "la fecha de hoy es: " + today;
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

    if(nombremio.test(cadena)){
        flack = 43;
    }
    
  // -----------------------------------------------------------------------------------
  // parte 2, mostrar nombres de profesores
  var s = 0;
  var no_se_encontro = 0;

  if (profesores.test(cadena)) {
    if (
      curso.test(cadena) ||
      math.test(cadena) ||
      fisica.test(cadena) ||
      quimica.test(cadena) ||
      computacion.test(cadena) ||
      idiomas.test(cadena) ||
      letras.test(cadena)
    ) {
      if (llevar.test(cadena)||estoy.test(cadena)) {
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
        if (idiomas.test(cadena)) {
          // mostrar todos los profesores que me enseñan el curso de quimica
          s++;
          flack = 39;
        }
        if (letras.test(cadena)) {
          // mostrar todos los profesores que me enseñan el curso de computacion
          s++;
          flack = 40;
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
        if (idiomas.test(cadena)) {
          // mostar todos profesores que enseñan el curso de computacion
          s++;
          flack = 41;
        }
        if (letras.test(cadena)) {
          // mostar todos profesores que enseñan el curso de fisica
          s++;
          flack = 42;
        }
      }
    } else {
      if (llevar.test(cadena)) {
        flack = 25;
      } else {
        flack = 30;
      }
    }
  }

  // ------------------------------------------------------------------------------------
  // parte 3, mostrar cursos

  var m = 0;

  if (cursos.test(cadena)) {
    if (profesor.test(cadena)) {
      if (llevar.test(cadena) || estoy.test(cadena)) {
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
        if (idiomas.test(cadena)) {
          m++;
          // mostrar cursos de idiomas que estoy llevando el profesor-"nombre_del_profesor"
          flack = 31;
        }
        if (letras.test(cadena)) {
          m++;
          // mostrar cursos de letras que estoy llevando el profesor-"nombre_del_profesor"
          flack = 32;
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
        if (idiomas.test(cadena)) {
          m++;
          // mostrar cursos de idiomas que enseña el profesor-"nombre_del_profesor"
          flack = 35;
        }
        if (letras.test(cadena)) {
          m++;
          // mostrar cursos de letras que enseña el profesor-"nombre_del_profesor"
          flack = 36;
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
          m++;
          flack = 11;
        }
        if (fisica.test(cadena)) {
          // mostrar todos los cursos de fisica que estoy llevando
          m++;
          flack = 12;
        }
        if (quimica.test(cadena)) {
          // mostrar todos los cursos de quimica que estoy llevando
          flack = 13;
          m++;
        }
        if (computacion.test(cadena)) {
          // mostrar todos los cursos de computacion que estoy llevando
          flack = 14;
          m++;
        }
        if (idiomas.test(cadena)) {
          m++;
          // mostrar cursos de idiomas que estoy llevando
          flack = 33;
        }
        if (letras.test(cadena)) {
          m++;
          // mostrar cursos de letras que estoy llevando el profesor-"nombre_del_profesor"
          flack = 34;
        }
        if (m == 0) {
          // mostrar todos los cursos que llevo
          flack = 15;
        }
      } else {
        // cursos totales
        if (math.test(cadena)) {
          // mostrar todos los cursos de matematica
          m++;
          flack = 16;
        }
        if (computacion.test(cadena)) {
          // mostrar todos los cursos de computacion
          m++;
          flack = 17;
        }
        if (fisica.test(cadena)) {
          // mostrar todos los cursos de fisica
          m++;
          flack = 18;
        }
        if (quimica.test(cadena)) {
          // mostrar todos los cursos de quimica
          m++;
          flack = 19;
        }
        if (idiomas.test(cadena)) {
          m++;
          // mostrar cursos de idiomas que estoy llevando el profesor-"nombre_del_profesor"
          flack = 37;
        }
        if (letras.test(cadena)) {
          m++;
          // mostrar cursos de letras que estoy llevando el profesor-"nombre_del_profesor"
          flack = 38;
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
  guardar_mensaje,
};
