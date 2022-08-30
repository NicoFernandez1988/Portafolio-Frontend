import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/servicio/s-estudio.service';

@Component({
  selector: 'app-editar-estudio',
  templateUrl: './editar-estudio.component.html',
  styleUrls: ['./editar-estudio.component.css']
})
export class EditarEstudioComponent implements OnInit {
  estudio: Estudio = null;

  constructor(private sEstudio: SEstudioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.detail(id).subscribe(
      data =>{
        this.estudio = data;
      }, err =>{
        alert("Error al editar el estudio");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.pudate(id, this.estudio).subscribe(
      data =>{
        alert("Estudio editado correctamente");
        this.router.navigate(['home']);
      }, err=>{
        alert("Error al editar el estudio");
        this.router.navigate(['home']);
      }
    )
  }

}
