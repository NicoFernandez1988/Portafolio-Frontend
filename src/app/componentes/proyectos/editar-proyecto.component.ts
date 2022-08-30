import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/servicio/s-proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proy: Proyecto = null;

  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data =>{
        this.proy = data;
      }, err =>{
        alert("Error al editar proyecto");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.pudate(id, this.proy).subscribe(
      data =>{
        alert("Proyecto editado correctamente");
        this.router.navigate(['home']);
      }, err=>{
        alert("Error al editar proyecto");
        this.router.navigate(['home']);
      }
    )
  }

}
