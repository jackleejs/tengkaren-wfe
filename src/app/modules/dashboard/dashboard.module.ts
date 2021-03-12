import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "../../shared/helpers/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutes } from './dashboard.routing';
import { DashboardComponent } from './pages/main/dashboard.component'

@NgModule({
  declarations: [DashboardComponent],
  entryComponents: [],
  imports: [
  CommonModule,
  RouterModule.forChild(DashboardRoutes),
  MaterialModule,
  FlexLayoutModule
  ],
  providers: []
})
export class DashboardModule {}
