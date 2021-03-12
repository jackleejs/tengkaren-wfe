import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "../../shared/helpers/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationRoutes } from './authentication.routing';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  entryComponents: [],
  imports: [
  CommonModule,
  RouterModule.forChild(AuthenticationRoutes),
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule
  ],
  providers: []
})
export class AuthenticationModule {}
