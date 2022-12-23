import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogoAPComponent } from './component/logo-ap/logo-ap.component';
import { BannerComponent } from './component/banner/banner.component';
import { PresentacionComponent } from './component/presentacion/presentacion.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './component/hys/hys.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
