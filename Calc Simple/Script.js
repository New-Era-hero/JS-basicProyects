//calculadora con las 4 operaciones basicas
//functions & vars

let n1 = 0;
let n2 = 0;
let op = 0;

class Calculadora {
    sumar(n1, n2) {
        return parseInt(n1 + n2);
    };

    restar(n1, n2) {
        return parseInt(n1 - n2);
    };

    multiplicar(n1, n2) {
        return parseInt(n1 * n2);
    };

    dividir(n1, n2) {
        return parseInt(n1 / n2);
    };

    potenciar(n1, n2) {
        return parseInt(n1 ** n2);
    }
    raiz2(n1) {
        n1 = Math.sqrt(n1);
        return n1;
    }
    raiz3(n1) {
        n1 = Math.cbrt(n1);
        return n1;
    }
}
const calculadora = new Calculadora();

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
4: dividir
5: potencia
6: raís cuadrada
7: raís cubica`);
    ope();
}

ope = () => {
    while (op != 0) {
        if (op == 1) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));
            alert(`${n1} + ${n2} = ${calculadora.sumar(n1, n2)}`);
            start();

        } else if (op == 2) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));
            alert(`${n1} - ${n2} = ${calculadora.restar(n1, n2)}`);
            start(0);

        } else if (op == 3) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));
            alert(`${n1} * ${n2} = ${calculadora.multiplicar(n1, n2)}`);
            start(0);

        } else if (op == 4) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));

            if (n1 == 0 || n2 == 0) {
                alert(`${n1} / ${n2} = 0`);
                start(0);

            } else {
                alert(`${n1} / ${n2} = ${calculadora.dividir(n1, n2)}`);
                start(0);
            }

        } else if (op == 5) {
            n1 = parseInt(prompt("Ingresa el primer numero"));
            n2 = parseInt(prompt("Ingresa el segundo numero"));
            alert(`${n1} ^ ${n2} = ${calculadora.potenciar(n1, n2)}`);
            start(0);

        } else if (op == 6) {
            n1 = parseInt(prompt("Ingresa un numero"));
            alert(`raíz cuadrada de ${n1} = ${calculadora.raiz2(n1)}`);
            start(0);
        } else if (op == 7) {
            n1 = parseInt(prompt("Ingresa un numero"));
            alert(`raíz cubica de ${n1} = ${calculadora.raiz3(n1)}`);
            start(0);
        } else {
            break;
        }
    }
    alert("Bye");
    alert("PD: recarga la pagina cuando quieras hacer una operacion");
}
start(1);