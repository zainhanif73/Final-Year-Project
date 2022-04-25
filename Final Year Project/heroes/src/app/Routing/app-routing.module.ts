import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLoginComponent } from '../components/doctor-login/doctor-login.component';
import { DoctorComponent } from '../components/doctor/doctor.component';
import { ListOfDoctorComponent } from '../components/list-of-doctor/list-of-doctor.component';
import { MainComponent } from '../components/main/main.component';
import { LoginComponent } from '../components/patient-login/login.component';
import { DoctorProfileComponent } from '../components/doctor-profile/doctor-profile.component';
import { ListOfHospitalsComponent } from '../components/list-of-hospitals/list-of-hospitals.component';
import { HospitalProfileComponent } from '../components/hospital-profile/hospital-profile.component';
import { HealthCareComponent } from '../components/health-care/health-care.component';
import { HealthCareProfileComponent } from '../components/health-care-profile/health-care-profile.component';
import { BooknowComponent } from '../components/booknow/booknow.component';
import { PsignupComponent } from '../components/psignup/psignup.component';
import { DrDashboardComponent } from '../components/dr-dashboard/dr-dashboard.component';
import { DrDashboardAppointmentsComponent } from '../components/dr-dashboard-appointments/dr-dashboard-appointments.component';
import { DrDashboardPatientsComponent } from '../components/dr-dashboard-patients/dr-dashboard-patients.component';
import { DrDashboardProfileComponent } from '../components/dr-dashboard-profile/dr-dashboard-profile.component';
import { DsignupComponent } from '../components/dsignup/dsignup.component';
import { ListOfLabsComponent } from '../components/list-of-labs/list-of-labs.component';
import { LabsProfileComponent } from '../components/labs-profile/labs-profile.component';
import { AuthGuardService } from '../services/Auth-Gaurd/auth-guard.service';
import { AdminLoginComponent } from '../components/admin-login/admin-login.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardPatientsComponent } from '../components/admin-dashboard-patients/admin-dashboard-patients.component';
import { AdminDashboardDoctorsComponent } from '../components/admin-dashboard-doctors/admin-dashboard-doctors.component';
import { AdminDashboardHospitalsComponent } from '../components/admin-dashboard-hospitals/admin-dashboard-hospitals.component';
import { AdminDashboardLabsComponent } from '../components/admin-dashboard-labs/admin-dashboard-labs.component';
import { AdminDashboardAppointmentsComponent } from '../components/admin-dashboard-appointments/admin-dashboard-appointments.component';
import { AdminDashboardDoctorsProfileComponent } from '../components/admin-dashboard-doctors-profile/admin-dashboard-doctors-profile.component';
import { AdminDashboardUsersComponent } from '../components/admin-dashboard-users/admin-dashboard-users.component';
import { AdminDashboardPatientProfileComponent } from '../components/admin-dashboard-patient-profile/admin-dashboard-patient-profile.component';
import { PatientAllAppointmentsComponent } from '../components/patient-all-appointments/patient-all-appointments.component';
import { PatientProfileComponent } from '../components/patient-profile/patient-profile.component';
import { AdminDashboardBlockedComponent } from '../components/admin-dashboard-blocked/admin-dashboard-blocked.component';
import { AdminDashboardHospitalAddComponent } from '../components/admin-dashboard-hospital-add/admin-dashboard-hospital-add.component';
import { AdminDashboardBlockeddoctorsComponent } from '../components/admin-dashboard-blockeddoctors/admin-dashboard-blockeddoctors.component';
import { BlockHospitalComponent } from '../components/admin-block-hospital/block-hospital.component';
import { AdminDashboardLabsAddComponent } from '../components/admin-dashboard-labs-add/admin-dashboard-labs-add.component';
import { PatientAppointmentRescheduleComponent } from '../components/patient-appointment-reschedule/patient-appointment-reschedule.component';
import { DoctorAuthGuardService } from '../services/doctor-Auth-Gaurd/doctor-auth-guard.service';
import { AdminAuthGaurdService } from '../services/admin-Auth-Gaurd/admin-auth-gaurd.service';
import { DrDashboardOnlineComponent } from '../components/dr-dashboard-online/dr-dashboard-online.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/appointments', component: AdminDashboardAppointmentsComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/patients', component: AdminDashboardPatientsComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/doctors', component: AdminDashboardDoctorsComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/users', component: AdminDashboardUsersComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/blocked', component: AdminDashboardBlockedComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/hospitals/add', component: AdminDashboardHospitalAddComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/patients/profile/:int', component: AdminDashboardPatientProfileComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/doctors/profile/:int', component: AdminDashboardDoctorsProfileComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/hospitals', component: AdminDashboardHospitalsComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/labs', component: AdminDashboardLabsComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/labs/add', component: AdminDashboardLabsAddComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/blocked_doctors', component: AdminDashboardBlockeddoctorsComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'admin/blocked_hospital', component: BlockHospitalComponent, canActivate: [AdminAuthGaurdService] },
  { path: 'doctor/login', component: DoctorLoginComponent },
  { path: 'doctor/dashboard', component: DrDashboardComponent },
  { path: 'doctor/appointments', component: DrDashboardAppointmentsComponent },
  { path: 'doctor/online', component: DrDashboardOnlineComponent },
  { path: 'doctor/patients', component: DrDashboardPatientsComponent },
  { path: 'doctor/profile', component: DrDashboardProfileComponent },
  // { path: 'doctor/dashboard', component: DrDashboardComponent, canActivate: [DoctorAuthGuardService] },
  // { path: 'doctor/appointments', component: DrDashboardAppointmentsComponent, canActivate: [DoctorAuthGuardService] },
  // { path: 'doctor/patients', component: DrDashboardPatientsComponent, canActivate: [DoctorAuthGuardService] },
  // { path: 'doctor/profile', component: DrDashboardProfileComponent, canActivate: [DoctorAuthGuardService] },
  { path: 'doctor/signup', component: DsignupComponent },
  { path: 'patient/login', component: LoginComponent },
  { path: 'patient/appointments', component: PatientAllAppointmentsComponent},
  // { path: 'patient/appointments', component: PatientAllAppointmentsComponent, canActivate: [AuthGuardService] },
  { path: 'patient/profile', component: PatientProfileComponent, canActivate: [AuthGuardService] },
  { path: 'patient/appointments/reschedule/:int', component: PatientAppointmentRescheduleComponent, canActivate: [AuthGuardService] },
  { path: 'pakistan', component: LoginComponent },
  { path: 'pakistan/doctor', component: DoctorComponent },
  { path: 'pakistan', children: [{ path: 'doctor/:str/:str', component: ListOfDoctorComponent }] },
  { path: 'pakistan', children: [{ path: ':str/hospital', component: ListOfHospitalsComponent }] },
  { path: 'pakistan/video-consultation/dermatologist', component: DoctorComponent },
  { path: 'pakistan/islamabad/hospital/:str/:int', component: HospitalProfileComponent },
  { path: 'pakistan/doctor/islamabad', children: [{ path: ':str/:str/:int', component: DoctorProfileComponent }] },
  { path: 'pakistan/doctor/islamabad', children: [{ path: ':str/:str/:int/booknow', component: BooknowComponent }], canActivate: [AuthGuardService] },
  { path: 'pakistan/hospital', children: [{ path: ':int/:str/:str', component: ListOfDoctorComponent }] },
  { path: 'healthcare', component: HealthCareComponent },
  { path: 'healthcare/:str/:int', component: HealthCareProfileComponent },
  { path: 'patient/signup', component: PsignupComponent },
  { path: 'pakistan/labs', component: ListOfLabsComponent },
  { path: 'pakistan/labs', children: [{ path: ':str/:int', component: LabsProfileComponent }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
