let materias = {
    fisica: [90, 6, 4, "fisica"],
    matematica: [69, 8, 2, "matematica"],
    logica: [70, 9, 4, "logica"],
    programacion: [85, 10, 4, "programacion"],
    quimica: [90, 9, 4, "quimica"],
    calculo: [94, 7, 3, "calculo"],
    bbdd: [93, 6, 3, "bbdd"],
    algebra: [56, 7, 1, "algebra"],
};

const aprove = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let practicas = materias[materia][2];

        console.log(`${materias[materia][3]}`);
        // asistencias
        asistencias >= 90 ?
            console.log("    %cBuenas asistencias", "color:green") : console.log("    %Falta de asistencias", "color:red");

        //promedio
        promedio >= 7 ?
            console.log("    %cPromedio suficiente", "color:green") : console.log("    %cPromedio inaceptable", "color:red");

        //practicas
        practicas >= 3 ?
            console.log("    %cPracticas Suficientes", "color:green") : console.log("    %cPracticas insuficientes", "color: red");

        //Aprovado?
        asistencias >= 90 && promedio >= 7 && practicas >= 3 ?
            console.log("    %cAprovado Felicidades", "color:green") : console.log("    %cReprovado lo sentimos", "color:red");

    }
};

aprove();