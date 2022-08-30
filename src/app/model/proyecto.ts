export class Proyecto {
    id? : number;
    tituloP : string;
    tecnologia : string;
    imagen : string;
    descripcionP : string;

    constructor(tituloP: string, tecnologia: string, imagen: string, descripcionP: string){
        this.tituloP = tituloP;
        this.tecnologia = tecnologia;
        this.imagen = imagen;
        this.descripcionP = descripcionP;
    }
}
