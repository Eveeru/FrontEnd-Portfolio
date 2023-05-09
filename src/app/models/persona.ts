export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    presentacion: string;
    tituloperfil: string;
    imagen: string;
    clave: string;
    email: string;

    constructor(nombre: string, apellido: string, presentacion: string, tituloperfil: string, imagen: string, clave: string, email: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.presentacion = presentacion;
        this.tituloperfil = tituloperfil;
        this.imagen= imagen;
        this.clave= clave;
        this.email= email;
    }
}