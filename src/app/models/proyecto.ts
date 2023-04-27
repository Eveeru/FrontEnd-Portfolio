export class Proyecto {
    id?: number;
    titulo_proy: string;
    realizacion: string;
    descripcion_proy: string;

    constructor (titulo_proy: string, realizacion: string, descripcion_proy: string) {
        this.titulo_proy = titulo_proy;
        this.realizacion = realizacion;
        this.descripcion_proy = descripcion_proy;
    }
}