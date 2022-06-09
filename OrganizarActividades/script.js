let tp = "100 mins. trabajos practicos"
let estudio = "100. mins de estudio";;
let trabajo = "240. mins de trabajo";
let homework = "30 mins. cosas de la casa";
let descanso = "10 mins. descanso";

//Log Version
const logVer = () => {
    console.log("tareas log version");
    //division
    for (let x = 0; x <= 14; x++) {
        if (x == 0) console.groupCollapsed("%cSemana 1", "color:blue");
        console.groupCollapsed(`dia ${x+1}`);
        console.log(trabajo);
        console.log(descanso);
        console.log(estudio);
        console.log(tp);
        console.log(homework);
        console.groupEnd();
        if (x == 7) console.groupEnd(), console.groupCollapsed("%cSemana 2", "color:blue");
    }
}

//Table Version
const tableVer = () => {
    console.log("tareas table version");
    //division
    for (let x = 0; x <= 14; x++) {
        if (x == 0) console.groupCollapsed("%cSemana 1", "color:blue");
        console.groupCollapsed(`dia ${x+1}`);
        console.table([trabajo]);
        console.table([descanso]);
        console.table([estudio]);
        console.table([tp]);
        console.table([homework]);
        console.groupEnd();
        if (x == 7) console.groupEnd(), console.groupCollapsed("%cSemana 2", "color:blue");
    }
}

logVer();
tableVer();