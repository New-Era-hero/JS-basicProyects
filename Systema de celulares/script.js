//cada celular debe tener color, peso, resolucion de pantalla, camara, ram... 
//debe poder encender, reiniciar, tomar foto, grabar
//pudes modificarlo a tu antojo para proyecto de clases o si quieres podrias agregar un pequeño array para agregar modelos automaticamente


let select = 0;
class Cells {
    constructor(color, peso, resolution, camera, ram) {
        this.color = color;
        this.peso = peso;
        this.resolution = resolution;
        this.camera = camera;
        this.ram = ram;
        this.encender = false;
        this.info = `        Color ${this.color} con un peso de tan solo ${this.peso}
        Pantalla con una resolucion de ${this.resolution}
        Cuenta con ${this.ram} de memoria ram
        Camara de ${this.camera} `;
    }
    set setEncender(encender) {
        this.encender = encender;
    }
    get getEncenter() {
        return this.encender;
    }

    showInfo() {
        alert(this.info);
    }

    Encender() {

        if (this.getEncenter == false) {
            this.setEncender = true;
            alert("encendiendo...");

        } else {
            this.setEncender = false;
            alert("apagando...");
        }

    }

    Reiniciar() {
        alert("reiniciando...");
        alert("espera...")
        alert("reiniciado")
    }

    TomarFoto() {
        alert(`foto tomada, resolucion: ${this.resolution}`);
    }

    Grabar() {
        alert(`video grabado, resolucion: ${this.resolution}`);

    }



};


class Samsung extends Cells {
    constructor(color, peso, resolution, camera, ram, modelo) {
        super(color, peso, resolution, camera, ram);
        this.modelo = modelo;
    }

}
class LG extends Cells {
    constructor(color, peso, resolution, camera, ram, modelo) {
        super(color, peso, resolution, camera, ram);
        this.modelo = modelo;
    }
}
class Iphone extends Cells {
    constructor(color, peso, resolution, camera, ram, modelo) {
        super(color, peso, resolution, camera, ram);
        this.modelo = modelo;
    }
}

const samsungGS10 = new Samsung("blanco", "198 g", "1440 x 3040", "12Mpx", "12GB", "Samsung Galaxy s10+");
const lgG8thinQ = new LG("negro", "167 g", "1440 x 3120 px · WQHD+", "16Mpx", "6GB", "LG G8 ThinQ");
const iphone13ProMax = new Iphone("dorado", "240 g", "1284x2778 px", "12Mpx", "6GB", "Iphone 13 pro max");

start = () => {
    alert("Bienvenido. a continuacion elija un numero segun la opcion que se le muestre en pantalla");;
    alert("Seleccione un Modelo");
    select = prompt(`    0: Salir
    1: Samsung
    2: LG
    3: iphone`);

    if (select == 1) modelSelect(select);
    else if (select == 2) modelSelect(select);
    else if (select == 3) modelSelect(select);
    else { alert("bye...recarga la pagina cuando quieras comenzar otra vez") };

};

const modelSelect = () => {
    if (select == 1) {
        alert("Elegiste Samsung....solo tenemos un solo modelo por ahora");
        alert("Elige una opcion");
        select = prompt(`        0: Atras
        1: ${samsungGS10.modelo}`);

        if (select == 0) start();
        else {
            while (select != 0) {
                if (samsungGS10.getEncenter == false) samsungGS10.setEncender = true, alert(`Encendiendo ${samsungGS10.modelo} para mostrar opciones`);
                alert("Elige una opcion");
                select = prompt(`            0: Atras
            1: Caracteristicas
            2: Encender/apagar
            3: Reiniciar
            4: Tomar foto
            5: Grabar video`);
                if (select == 1) alert(`Mostrando caracteristicas del: ${samsungGS10.modelo}`), samsungGS10.showInfo();
                if (select == 2) samsungGS10.Encender();
                if (select == 3) samsungGS10.Reiniciar();
                if (select == 4) samsungGS10.TomarFoto();
                if (select == 5) samsungGS10.Grabar();
                if (select == 0) start();

            };
        }

    } else if (select == 2) {
        alert("Elegiste LG....solo tenemos un solo modelo por ahora");
        alert("Elige una opcion");
        select = prompt(`        0: Atras
        1: ${lgG8thinQ.modelo}`);

        if (select == 0) start();
        else {
            while (select != 0) {
                if (lgG8thinQ.getEncenter == false) lgG8thinQ.setEncender = true, alert(`Encendiendo ${lgG8thinQ.modelo} para mostrar opciones`);
                alert("Elige una opcion");
                select = prompt(`            0: Atras
            1: Caracteristicas
            2: Encender/apagar
            3: Reiniciar
            4: Tomar foto
            5: Grabar video`);
                if (select == 1) alert(`Mostrando caracteristicas del: ${lgG8thinQ.modelo}`), lgG8thinQ.showInfo();
                if (select == 2) lgG8thinQ.Encender();
                if (select == 3) lgG8thinQ.Reiniciar();
                if (select == 4) lgG8thinQ.TomarFoto();
                if (select == 5) lgG8thinQ.Grabar();
                if (select == 0) start();

            };
        }
    } else if (select == 3) {
        alert("Elegiste iphone....solo tenemos un solo modelo por ahora");
        alert("Elige una opcion");
        select = prompt(`        0: Atras
        1: ${iphone13ProMax.modelo}`);

        if (select == 0) start();
        else {
            while (select != 0) {
                if (iphone13ProMax.getEncenter == false) iphone13ProMax.setEncender = true, alert(`Encendiendo ${iphone13ProMax.modelo} para mostrar opciones`);
                alert("Elige una opcion");
                select = prompt(`            0: Atras
            1: Caracteristicas
            2: Encender/apagar
            3: Reiniciar
            4: Tomar foto
            5: Grabar video`);
                if (select == 1) alert(`Mostrando caracteristicas del: ${iphone13ProMax.modelo}`), iphone13ProMax.showInfo();
                if (select == 2) iphone13ProMax.Encender();
                if (select == 3) iphone13ProMax.Reiniciar();
                if (select == 4) iphone13ProMax.TomarFoto();
                if (select == 5) iphone13ProMax.Grabar();
                if (select == 0) start();

            };
        }
    }

}

start();