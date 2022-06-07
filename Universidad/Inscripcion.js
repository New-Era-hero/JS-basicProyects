//esta es la parte de la inscripcion
let materias = {
    fisica: ["pedro", " juan", " maria", " jose", " alberto", " nyla", " lemoon"],
    prog: ["jose", " juan", " maria", " Nesh", " alberto", " nyla", " lemoon"],
    logica: ["pedro", " juan", " Nesh", " jose", " alberto", " nyla", " Neshhero"],
    quimica: ["Neshhero", " juan", " maria", " jose", " alberto", " nyla", " lemoon"]
}

const inscribir = (alu, mat) => {
    let personas = materias[mat];
    alus = personas;
    if (alus.length >= 20) document.write("lo siento las clases ya estan llenas");
    else {
        alus.push(" " + alu);
        if (mat == "fisica") {
            materias = {
                fisica: alus,
                prog: materias["prog"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        } else if (mat == "prog") {
            materias = {
                fisica: ["fisica"],
                prog: alus,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        } else if (mat == "logica") {
            materias = {
                fisica: ["fisica"],
                prog: ["prog"],
                logica: alus,
                quimica: materias["quimica"]
            }
        } else if (mat == "quimica") {
            materias = {
                fisica: ["fisica"],
                prog: ["prog"],
                logica: ["logica"],
                quimica: alus
            }
        }
        document.write(`felicidades <b style='color:blue'>${alu}</b> fuiste inscrito en <b style='color:green'>${mat}</b> correctamente<br><br>`);
        document.write(`los inscritos en <b>${mat}</b> son: <b style='color:blue'>${materias[mat]}</b>`);
    }
}
inscribir("Neshhero", "prog");