import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudModule } from './crud/crud.module';
import { StructureModule } from './structure/structure.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    StructureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
