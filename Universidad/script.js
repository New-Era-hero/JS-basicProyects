//esta es la parte donde se muestran los estudiantes + profesores y sus respectivas materias + en cuantas materias estan inscritos
const obtInfo = (materia) => {
    materias = {
        fisica: ["pedro", "juan", "maria", "jose", "alberto", "nyla", "lemoon"],
        prog: ["jose", "juan", "maria", "Nesh", "alberto", "nyla", "lemoon"],
        logica: ["pedro", "juan", "Nesh", "jose", "alberto", "nyla", "Neshhero"],
        quimica: ["Neshhero", "juan", "maria", "jose", "alberto", "nyla", "lemoon"]
    }
    profesores = {
        fisica: ["hernandez"],
        prog: ["soto"],
        logica: ["luis"],
        quimica: ["jose"]
    }

    if (materias[materia]) return [materias[materia], profesores[materia], materia];
    else { return materias }
}

const showInfo = (materias) => {
    let profesor = obtInfo(materias)[1];
    let alumnos = obtInfo(materias);
    let materia = obtInfo(materias)[2];

    const forMateria = () => {
        if (materia == "f") return "fisica";
        else if (materia == "p") return "prog";
        else if (materia == "l") return "logica";
        else if (materia == "q") return "quimica";
    }
    forMateria();

    if (profesor != false) document.write(`El profesor de <b>${materia}</b> es: <b style='color:red'>${profesor[0]}</b>
    y sus estudiantes son: <b style='color:blue'>${alumnos[0]}</b><br><br>`);
}

const cantClases = (alumn) => {
    let cantTotal = 0;
    let materia = obtInfo();
    let clasesP = [];
    for (info in materia) {
        if (materia[info].includes(alumn)) {
            cantTotal++;
            clasesP.push(" " + info);
        }
    }
    return `<b style='color:blue'> ${alumn}</b> está en un total de <b>${cantTotal} clases</b><br>
    las clases son: <b style='color:green'>${clasesP}</b><br><br>`;
}
showInfo("fisica");
showInfo("prog");
showInfo("logica");
showInfo("quimica");
document.write(cantClases("Nesh"));
document.write(cantClases("Neshhero"));
document.write(cantClases("maria"));