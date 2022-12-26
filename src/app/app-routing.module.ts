import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './component/educacion/editeducacion.component';
import { NeweducacionComponent } from './component/educacion/neweducacion.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia.component';
import { HomeComponent } from './component/home/home.component';
import { EditSkillComponent } from './component/hys/edit-skill.component';
import { NewSkillComponent } from './component/hys/new-skill.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
