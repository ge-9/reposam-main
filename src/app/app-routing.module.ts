import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './dialog/login/login.component';

const routes: Routes = [

  {path:'', redirectTo: 'homepage', pathMatch: 'full'},
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'homepage', component: HomepageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
