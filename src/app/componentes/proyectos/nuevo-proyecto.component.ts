import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/servicio/s-proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  tituloP: string = '';
  tecnologia: string = '';
  imagen: string = '';
  descripcionP: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyecto(this.tituloP, this.tecnologia, this.imagen, this.descripcionP);
    this.sProyecto.save(proy).subscribe(data=>{
      alert("Proyecto cargado correctamente");
      this.router.navigate(['/home']);
    }, err=>{
      alert("Fallo en la carga");
      this.router.navigate(['/home'])
    })
  }

}
