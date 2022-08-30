import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadBlanda } from 'src/app/model/habilidad-blanda';
import { SHabilidadBlandaService } from 'src/app/servicio/s-habilidad-blanda.service';

@Component({
  selector: 'app-nueva-habilidad-blanda',
  templateUrl: './nueva-habilidad-blanda.component.html',
  styleUrls: ['./nueva-habilidad-blanda.component.css']
})
export class NuevaHabilidadBlandaComponent implements OnInit {
  habilidadB: string = '';
  porcentajeB: number = 0;

  constructor(private sHabilidadBlanda: SHabilidadBlandaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habiB = new HabilidadBlanda(this.habilidadB, this.porcentajeB);
    this.sHabilidadBlanda.save(habiB).subscribe(data=>{
      alert("Habilidad cargada correctamente");
      this.router.navigate(['/home']);
    }, err=>{
      alert("Fallo en la carga");
      this.router.navigate(['/home'])
    })
  }

}
