import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  {path:'**', component:IntroComponent},
  {path:'dashboard', component:DashboardComponent},
  //{path:'', redirectTo:'/intro', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
