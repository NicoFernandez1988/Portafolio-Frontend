import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadDura } from 'src/app/model/habilidad-dura';
import { SHabilidadDuraService } from 'src/app/servicio/s-habilidad-dura.service';

@Component({
  selector: 'app-editar-habilidad-dura',
  templateUrl: './editar-habilidad-dura.component.html',
  styleUrls: ['./editar-habilidad-dura.component.css']
})
export class EditarHabilidadDuraComponent implements OnInit {
  habiD: HabilidadDura = null;

  constructor(private sHabilidadDura: SHabilidadDuraService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidadDura.detail(id).subscribe(
      data =>{
        this.habiD = data;
      }, err =>{
        alert("Error al editar habilidad");
        this.router.navigate(['home']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidadDura.pudate(id, this.habiD).subscribe(
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
