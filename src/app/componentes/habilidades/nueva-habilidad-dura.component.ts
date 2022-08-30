import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadDura } from 'src/app/model/habilidad-dura';
import { SHabilidadDuraService } from 'src/app/servicio/s-habilidad-dura.service';

@Component({
  selector: 'app-nueva-habilidad-dura',
  templateUrl: './nueva-habilidad-dura.component.html',
  styleUrls: ['./nueva-habilidad-dura.component.css']
})
export class NuevaHabilidadDuraComponent implements OnInit {
  habilidadD: string = '';
  porcentajeD: number = 0;

  constructor(private sHabilidadDura: SHabilidadDuraService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habiD = new HabilidadDura(this.habilidadD, this.porcentajeD);
    this.sHabilidadDura.save(habiD).subscribe(data=>{
      alert("Habilidad cargada correctamente");
      this.router.navigate(['/home']);
    }, err=>{
      alert("Fallo en la carga");
      this.router.navigate(['/home'])
    })
  }

}
