export class Progreso {
    id?: number;
    nombre_prog: string;
    porcentaje: number;

    constructor(nombre_prog: string, porcentaje: number) {
        this.nombre_prog = nombre_prog;
        this.porcentaje = porcentaje;
    }
}