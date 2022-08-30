import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/servicio/s-estudio.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  est: Estudio[] = [];

  constructor(private sEstudio: SEstudioService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarEstudio();
    if(this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }
  }

  cargarEstudio():void{
    this.sEstudio.lista().subscribe(data =>{this.est = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sEstudio.delete(id).subscribe(data=>{
        this.cargarEstudio();
      }, err =>{
        alert("No se pudo eliminar el estudio");
      }
      )
    }
  }

}
