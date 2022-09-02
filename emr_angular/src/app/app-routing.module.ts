import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './crud/appointment/appointment.component';
import { CrudModule } from './crud/crud.module';
import { DoctorComponent } from './crud/doctor/doctor.component';
import { NewAppointmentComponent } from './crud/new-appointment/new-appointment.component';
import { NewDoctorComponent } from './crud/new-doctor/new-doctor.component';
import { NewPatientComponent } from './crud/new-patient/new-patient.component';
import { NewUserComponent } from './crud/new-user/new-user.component';
import { PatientComponent } from './crud/patient/patient.component';
import { UserComponent } from './crud/user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "appointments", component: AppointmentComponent},
  { path: "new-appointment", component: NewAppointmentComponent},
  { path: "patient", component: PatientComponent},
  { path: "new-patient", component: NewPatientComponent},
  { path: "doctor", component: DoctorComponent},
  { path: "new-doctor", component: NewDoctorComponent},
  { path: "user", component: UserComponent},
  { path: "new-user", component: NewUserComponent},
  { path: "dashboard", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CrudModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
