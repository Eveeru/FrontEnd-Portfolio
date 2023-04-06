import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { IntroComponent } from './intro/intro.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NabvardashboardComponent } from './nabvardashboard/nabvardashboard.component';
import { LogoutComponent } from './modals/logout/logout.component';
import { DashboardpresentacionComponent } from './dashboardpresentacion/dashboardpresentacion.component';
import { DashboardexperienciaComponent } from './dashboardexperiencia/dashboardexperiencia.component';
import { DashboardeducacionComponent } from './dashboardeducacion/dashboardeducacion.component';
import { DashboardhabilidadesComponent } from './dashboardhabilidades/dashboardhabilidades.component';
import { DashboardproyectosComponent } from './dashboardproyectos/dashboardproyectos.component';
import { BannerComponent } from './modals/banner/banner.component';
import { LogoArgpComponent } from './components/logo-argp/logo-argp.component';
import { BannersComponent } from './components/banners/banners.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    IntroComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ErrorComponent,
    DashboardComponent,
    NabvardashboardComponent,
    LogoutComponent,
    DashboardpresentacionComponent,
    DashboardexperienciaComponent,
    DashboardeducacionComponent,
    DashboardhabilidadesComponent,
    DashboardproyectosComponent,
    BannerComponent,
    LogoArgpComponent,
    BannersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
