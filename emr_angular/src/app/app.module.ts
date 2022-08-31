import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RepositoryComponent } from './repository/repository.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitialPageComponent } from './initial-page/initial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    NewAppointmentComponent,
    NewPatientComponent,
    PatientComponent,
    DoctorComponent,
    NewDoctorComponent,
    UserComponent,
    NewUserComponent,
    RepositoryComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    InitialPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
