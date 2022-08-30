export class Persona{

    id?: number;
    nombre: string;
    apellido: string;
    imagen: string;
    titulo: string;
    provincia: string;
    pais: string;
    telefono: string;
    correo: string;
    descripcion: string;

    constructor(nombre: string, apellido: string, imagen: string, titulo: string,
                provincia: string, pais: string, telefono: string, correo: string, descripcion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
        this.titulo = titulo;
        this.provincia = provincia;
        this.pais = pais;
        this.telefono = telefono;
        this.correo = correo;
        this.descripcion = descripcion;
    }
}