import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadBlanda } from 'src/app/model/habilidad-blanda';
import { SHabilidadBlandaService } from 'src/app/servicio/s-habilidad-blanda.service';

@Component({
  selector: 'app-editar-habilidad-blanda',
  templateUrl: './editar-habilidad-blanda.component.html',
  styleUrls: ['./editar-habilidad-blanda.component.css']
})
export class EditarHabilidadBlandaComponent implements OnInit {
  habiB: HabilidadBlanda = null;

  constructor(private sHabilidadBlanda: SHabilidadBlandaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidadBlanda.detail(id).subscribe(
      data =>{
        this.habiB = data;
      }, err =>{
        alert("Error al editar habilidad");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidadBlanda.pudate(id, this.habiB).subscribe(
      data =>{
        alert("Habilidad editada correctamente");
        this.router.navigate(['home']);
      }, err=>{
        alert("Error al editar habilidad");
        this.router.navigate(['home']);
      }
    )
  }

}
