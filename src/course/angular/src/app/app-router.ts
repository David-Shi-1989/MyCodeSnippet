import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component'
import { DashboardComponent } from './main/dashboard/dashboard.component'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}