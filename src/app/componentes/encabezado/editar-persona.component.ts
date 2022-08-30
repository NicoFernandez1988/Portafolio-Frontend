import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  datPerso: Persona = null;

  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data =>{
        this.datPerso = data;
      }, err =>{
        alert("Error al editar los datos personales");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.pudate(id, this.datPerso).subscribe(
      data =>{
        alert("Experiencia editada correctamente");
        this.router.navigate(['home']);
      }, err=>{
        alert("Error al editar los datos personales");
        this.router.navigate(['home']);
      }
    )
  }

}
