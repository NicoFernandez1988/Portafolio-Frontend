import { Component, OnInit } from '@angular/core';
import { HabilidadBlanda } from 'src/app/model/habilidad-blanda';
import { HabilidadDura } from 'src/app/model/habilidad-dura';
import { SHabilidadBlandaService } from 'src/app/servicio/s-habilidad-blanda.service';
import { SHabilidadDuraService } from 'src/app/servicio/s-habilidad-dura.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habiB: HabilidadBlanda[] = [];
  habiD: HabilidadDura[] = [];

  constructor(private sHabilidadBlanda: SHabilidadBlandaService, private sHabilidadDura: SHabilidadDuraService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarHabilidadBlanda();
    if(this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }

    this.cargarHabilidadDura();
    if(this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidadBlanda():void{
    this.sHabilidadBlanda.lista().subscribe(data =>{this.habiB = data;})
  }

  cargarHabilidadDura():void{
    this.sHabilidadDura.lista().subscribe(data =>{this.habiD = data;})
  }

  deleteBlanda(id?: number){
    if(id != undefined){
      this.sHabilidadBlanda.delete(id).subscribe(data=>{
        this.cargarHabilidadBlanda();
      }, err =>{
        alert("No se pudo eliminar la habilidad");
      }
      )
    }
  }

  deleteDura(id?: number){
    if(id != undefined){
      this.sHabilidadDura.delete(id).subscribe(data=>{
        this.cargarHabilidadDura();
      }, err =>{
        alert("No se pudo eliminar la habilidad");
      }
      )
    }
  }

}
