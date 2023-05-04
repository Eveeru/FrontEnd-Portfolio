import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './modals/login/login.component';
import { GuardService } from './servicios/guard.service';

const routes: Routes = [
  {path:'**', component:IntroComponent},
  {path:'login', component:LoginComponent},
  {path:'Dashboard', component:DashboardComponent, canActivate:[GuardService]},
  {path:'', redirectTo:'/intro', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
