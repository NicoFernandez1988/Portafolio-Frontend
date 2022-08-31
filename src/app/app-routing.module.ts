import { NgModule } from "@angular/core";
import { RouterModule, Routes} from '@angular/router';
import { ContactoComponent } from "./componentes/encabezado/contacto.component";
import { EditarPersonaComponent } from "./componentes/encabezado/editar-persona.component";
import { NuevaPersonaComponent } from "./componentes/encabezado/nueva-persona.component";
import { EditarEstudioComponent } from "./componentes/estudio/editar-estudio.component";
import { NuevoEstudioComponent } from "./componentes/estudio/nuevo-estudio.component";
import { EditarExperienciaComponent } from "./componentes/experiencia/editar-experiencia.component";
import { NuevaExperienciaComponent } from "./componentes/experiencia/nueva-experiencia.component";
import { EditarHabilidadBlandaComponent } from "./componentes/habilidades/editar-habilidad-blanda.component";
import { EditarHabilidadDuraComponent } from "./componentes/habilidades/editar-habilidad-dura.component";
import { NuevaHabilidadBlandaComponent } from "./componentes/habilidades/nueva-habilidad-blanda.component";
import { NuevaHabilidadDuraComponent } from "./componentes/habilidades/nueva-habilidad-dura.component";
import { HomeComponent } from "./componentes/home/home.component";
import { LoginComponent } from "./componentes/login/login.component";
import { EditarProyectoComponent } from "./componentes/proyectos/editar-proyecto.component";
import { NuevoProyectoComponent } from "./componentes/proyectos/nuevo-proyecto.component";

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'nuevaexp', component: NuevaExperienciaComponent},
    {path:'editarexp/:id', component: EditarExperienciaComponent},
    {path:'nuevoest', component: NuevoEstudioComponent},
    {path:'editarest/:id', component: EditarEstudioComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'editarper/:id', component: EditarPersonaComponent},
    {path:'nuevaper', component: NuevaPersonaComponent},
    {path:'nuevopro', component: NuevoProyectoComponent},
    {path:'editarpro/:id', component: EditarProyectoComponent},
    {path:'nuevahabB', component: NuevaHabilidadBlandaComponent},
    {path:'editarhabB/:id', component: EditarHabilidadBlandaComponent},
    {path:'nuevahabD', component: NuevaHabilidadDuraComponent},
    {path:'editarhabD/:id', component: EditarHabilidadDuraComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }