let pago = 25;

m18 = (edad) => {
    if (edad >= 18) return true;
    else return false;
}

let verify = m18(18);

after2pm = (time) => {
    if (verify == true)
        if (time >= 2) return true;
        else return false;
    else if (verify == false) return 0;
}

firstOrLast = (firstOrL) => {
    if (firstOrL == 1) return true;
    else return false;
}
let firstOrL = firstOrLast(1);
let pass = after2pm(2);

access = (pass) => {
    if (pass == true && verify == true && firstOrL == true) document.writeln("genial tienes entrada gratis...puedes pasar");
    else if (pass == true && verify == true) document.writeln(`para entrar son: <b>${pago}<b> <br>`);
    else if (pass == false && verify == true) document.write(`para entrar son: <b>${pago}<b> <br>`);
    else document.writeln("eres menor de edad lo siento <br>")
}

access(pass);