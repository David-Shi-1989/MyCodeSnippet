import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppRouterModule } from './app-router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// material
import { MatCheckboxModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    BreadcrumbComponent,
    FooterComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
