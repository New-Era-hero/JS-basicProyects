// mini-systema para registrar
// presentes(p) y ausentes(a)
// pasados los 30 dias, mostrar su situacion final del alumno
// maximo de 10 % de ausencias si A > 10 % = reprovado

let cant = prompt("digita la cantidad de alumnos porfa");
let dia = 1;
let totalAlumn = [];

for (x = 0; x < cant; x++) {
    totalAlumn[x] = [prompt(`digita el nombre del alumno #${x + 1}`), 0]
}

const takeAssit = (name, p) => {
    ps = prompt(`escriba: P o p sí ${name} estuvo presente el Dia #${dia} Si no escriba: A o a para indicar que no estuvo"`);
    if (ps == "p" || ps == "P") totalAlumn[p][1]++;
}

for (x = 0; x < 30; x++) {
    for (alumn in totalAlumn) {
        takeAssit(totalAlumn[alumn][0], alumn);
    }
    dia++;
}

for (alumn in totalAlumn) {
    let result = `${totalAlumn[alumn][0]}: <br>
                asist: <b>${parseInt(totalAlumn[alumn][1])}</b> <br>
                No asist: <b>${30 - parseInt(totalAlumn[alumn][1])}</b>`;

    if (30 - totalAlumn[alumn][1] > 18) {
        result += "<b style='color: red'> reprobado por inasistencias</b><br><br>"
    } else {
        result += "<br><br>"
    }


    document.write(result);

}