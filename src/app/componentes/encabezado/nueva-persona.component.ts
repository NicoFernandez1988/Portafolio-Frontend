import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  imagen: string = '';
  titulo: string = '';
  provincia: string = '';
  pais: string = '';
  telefono: string = '';
  correo: string = '';
  descripcion: string = '';

  constructor(private sPersona: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const dato = new Persona(this.nombre, this.apellido, this.imagen, this.titulo, this.provincia, this.pais, this.telefono, this.correo, this.descripcion);
    this.sPersona.save(dato).subscribe(data=>{
      alert("Persona cargada correctamente");
      this.router.navigate(['/home']);
    }, err=>{
      alert("Fallo en la carga");
      this.router.navigate(['/home'])
    })
  }

}
