import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginregComponent } from './components/loginreg/loginreg.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component: HomeComponent
  },
  {
    path:"login",
    pathMatch:"full",
    component:LoginregComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
