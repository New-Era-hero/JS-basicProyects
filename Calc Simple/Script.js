//calculadora con las 4 operaciones basicas
//functions & vars

let n1 = 0;
let n2 = 0;
let op = 0;

const sumar = (n1, n2) => {
    return parseInt(n1 + n2);
};

const restar = (n1, n2) => {
    return parseInt(n1 - n2);
};

const multiplicar = (n1, n2) => {
    return parseInt(n1 * n2);
};

const dividir = (n1, n2) => {
    return parseInt(n1 / n2);
};

const start = (f) => {
    if (f == 1) {
        alert("bienvenido, escribe un numero a continuacion para elegir segun tus opciones");
        alert("tus opciones son: ");
        f = 0;
    } else {
        alert("tus opciones son: ");
    }
    op = prompt(`0: salir
1: sumar, 
2: restar, 
3: multiplicar, 
4: dividir`);
    ope();
}

ope = () => {
    while (op != 0) {
        if (op == 1) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));
            alert(`${n1} + ${n2} = ${sumar(n1, n2)}`);
            start();

        } else if (op == 2) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));
            alert(`${n1} - ${n2} = ${restar(n1, n2)}`);
            start(0);

        } else if (op == 3) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));
            alert(`${n1} * ${n2} = ${multiplicar(n1, n2)}`);
            start(0);

        } else if (op == 4) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));

            if (n1 == 0 || n2 == 0) {
                alert(`${n1} / ${n2} = 0`);
                start(0);

            } else {
                alert(`${n1} / ${n2} = ${dividir(n1, n2)}`);
                start(0);
            }

        } else {
            alert("Bye");
            alert("PD: recarga la pagina cuando quieras hacer una operacion");
            break;
        }
    }
}
start(1);