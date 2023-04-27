export class Educacion{
    id?: number;
    periodo_edu: String;
    titutlo_edu: String;
    img_edu: String;
    institucion: String;
    nivel: String;

    constructor(periodo_edu: String, titutlo_edu: String, img_edu: String, institucion: String, nivel: String){
        this.periodo_edu = periodo_edu;
        this.titutlo_edu = titutlo_edu;
        this.img_edu = img_edu;
        this.institucion = institucion;
        this.nivel = nivel;
    }
}