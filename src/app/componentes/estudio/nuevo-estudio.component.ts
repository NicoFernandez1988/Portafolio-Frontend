import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/servicio/s-estudio.service';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css']
})
export class NuevoEstudioComponent implements OnInit {
  nombreInsti: string = '';
  nombreCerti: string = '';
  descripcionEst: string = '';

  constructor(private sEstudio: SEstudioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const est = new Estudio(this.nombreInsti, this.nombreCerti, this.descripcionEst);
    this.sEstudio.save(est).subscribe(data=>{
      alert("Estudio cargado correctamente");
      this.router.navigate(['/home']);
    }, err=>{
      alert("Fallo en la carga");
      this.router.navigate(['/home'])
    })
  }

}
