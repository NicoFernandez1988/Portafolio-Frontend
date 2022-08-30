import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TokenService } from 'src/app/servicio/token.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","","","");
  datos: Persona[] = [];

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarDatos();
    if(this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }
  }

  cargarDatos():void{
    this.personaService.lista().subscribe(data =>{this.datos = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.personaService.delete(id).subscribe(data=>{
        this.cargarDatos();
      }, err =>{
        alert("No se pudo eliminar la persona");
      }
      )
    }
  }

  }


