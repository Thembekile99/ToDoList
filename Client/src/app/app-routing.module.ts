import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [

{path: `register`,component: RegistrationComponent },
{path: `` ,component: LoginComponent},
{path: `login` ,component: LoginComponent},

{path: `dashboard` ,component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
