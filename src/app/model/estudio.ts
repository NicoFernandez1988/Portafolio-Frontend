export class Estudio {
    id? : number;
    nombreInsti : string;
    nombreCerti : string;
    descripcionEst : string;

    constructor(nombreInsti: string, nombreCerti: string, descripcionEst: string){
        this.nombreInsti = nombreInsti;
        this.nombreCerti = nombreCerti;
        this.descripcionEst = descripcionEst;
    }
}
