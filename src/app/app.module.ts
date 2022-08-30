import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudioComponent } from './componentes/estudio/estudio.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component'
import { interceptorProvider } from './servicio/interceptor-service';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevoEstudioComponent } from './componentes/estudio/nuevo-estudio.component';
import { EditarEstudioComponent } from './componentes/estudio/editar-estudio.component';
import { ContactoComponent } from './componentes/encabezado/contacto.component';
import { EditarPersonaComponent } from './componentes/encabezado/editar-persona.component';
import { NuevaPersonaComponent } from './componentes/encabezado/nueva-persona.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { NuevaHabilidadBlandaComponent } from './componentes/habilidades/nueva-habilidad-blanda.component';
import { EditarHabilidadBlandaComponent } from './componentes/habilidades/editar-habilidad-blanda.component';
import { NuevaHabilidadDuraComponent } from './componentes/habilidades/nueva-habilidad-dura.component';
import { EditarHabilidadDuraComponent } from './componentes/habilidades/editar-habilidad-dura.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    EstudioComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PieDePaginaComponent,
    HomeComponent,
    LoginComponent,
    LogoApComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevoEstudioComponent,
    EditarEstudioComponent,
    ContactoComponent,
    EditarPersonaComponent,
    NuevaPersonaComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    NuevaHabilidadBlandaComponent,
    EditarHabilidadBlandaComponent,
    NuevaHabilidadDuraComponent,
    EditarHabilidadDuraComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
