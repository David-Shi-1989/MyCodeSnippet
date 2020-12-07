import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component'
import { DashboardComponent } from './main/dashboard/dashboard.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}