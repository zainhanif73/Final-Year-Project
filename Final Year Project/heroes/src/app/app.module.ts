import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './components/nav-bar/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MainComponent } from './components/main/main.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './components/patient-login/login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UlowerPipe } from './Pipeline/ulower/ulower.pipe';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { ListOfDoctorComponent } from './components/list-of-doctor/list-of-doctor.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { MatTabsModule} from '@angular/material/tabs';
import { ListOfHospitalsComponent } from './components/list-of-hospitals/list-of-hospitals.component';
import { HospitalProfileComponent } from './components/hospital-profile/hospital-profile.component';
import { CutPipe } from './Pipeline/cut/cut.pipe';
import { HealthCareComponent } from './components/health-care/health-care.component';
import { HealthCareProfileComponent } from './components/health-care-profile/health-care-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { BooknowComponent } from './components/booknow/booknow.component';
import { DrDashboardAppointmentsComponent } from './components/dr-dashboard-appointments/dr-dashboard-appointments.component';
import { DrDashboardOnlineComponent } from './components/dr-dashboard-online/dr-dashboard-online.component';
import { DrDashboardComponent } from './components/dr-dashboard/dr-dashboard.component';
import { DrDashboardPatientsComponent } from './components/dr-dashboard-patients/dr-dashboard-patients.component';
import { DrDashboardProfileComponent } from './components/dr-dashboard-profile/dr-dashboard-profile.component';
import { DsignupComponent } from './components/dsignup/dsignup.component';
import { PsignupComponent } from './components/psignup/psignup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import { ListOfLabsComponent } from './components/list-of-labs/list-of-labs.component';
import { LabsProfileComponent } from './components/labs-profile/labs-profile.component';
import { AuthGuardService } from './services/Auth-Gaurd/auth-guard.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardAppointmentsComponent } from './components/admin-dashboard-appointments/admin-dashboard-appointments.component';
import { AdminDashboardDoctorsComponent } from './components/admin-dashboard-doctors/admin-dashboard-doctors.component';
import { AdminDashboardPatientsComponent } from './components/admin-dashboard-patients/admin-dashboard-patients.component';
import { AdminDashboardHospitalsComponent } from './components/admin-dashboard-hospitals/admin-dashboard-hospitals.component';
import { AdminDashboardLabsComponent } from './components/admin-dashboard-labs/admin-dashboard-labs.component';
import { AdminDashboardDoctorsProfileComponent } from './components/admin-dashboard-doctors-profile/admin-dashboard-doctors-profile.component';
import { AdminDashboardUsersComponent } from './components/admin-dashboard-users/admin-dashboard-users.component';
import { AdminDashboardPatientProfileComponent } from './components/admin-dashboard-patient-profile/admin-dashboard-patient-profile.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientAllAppointmentsComponent } from './components/patient-all-appointments/patient-all-appointments.component';
import { AdminDashboardBlockedComponent } from './components/admin-dashboard-blocked/admin-dashboard-blocked.component';
import { AdminDashboardHospitalAddComponent } from './components/admin-dashboard-hospital-add/admin-dashboard-hospital-add.component';
import { AdminDashboardBlockeddoctorsComponent } from './components/admin-dashboard-blockeddoctors/admin-dashboard-blockeddoctors.component';
import { BlockHospitalComponent } from './components/admin-block-hospital/block-hospital.component';
import { AdminDashboardLabsAddComponent } from './components/admin-dashboard-labs-add/admin-dashboard-labs-add.component';
import { PatientAppointmentRescheduleComponent } from './components/patient-appointment-reschedule/patient-appointment-reschedule.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DoctorComponent,
    LoginComponent,
    DoctorLoginComponent,
    ListOfDoctorComponent,
    ListOfHospitalsComponent,
    UlowerPipe,
    DoctorProfileComponent,
    HospitalProfileComponent,
    CutPipe,
    HealthCareComponent,
    HealthCareProfileComponent,
    FooterComponent,
    BooknowComponent,
    PsignupComponent,
    DsignupComponent,
    DrDashboardComponent,
    DrDashboardAppointmentsComponent,
    DrDashboardPatientsComponent,
    DrDashboardProfileComponent,
    ListOfLabsComponent,
    LabsProfileComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminDashboardAppointmentsComponent,
    AdminDashboardDoctorsComponent,
    AdminDashboardPatientsComponent,
    AdminDashboardHospitalsComponent,
    AdminDashboardLabsComponent,
    AdminDashboardDoctorsProfileComponent,
    AdminDashboardUsersComponent,
    AdminDashboardPatientProfileComponent,
    PatientProfileComponent,
    PatientAllAppointmentsComponent,
    AdminDashboardBlockedComponent,
    AdminDashboardHospitalAddComponent,
    AdminDashboardBlockeddoctorsComponent,
    BlockHospitalComponent,
    AdminDashboardLabsAddComponent,
    PatientAppointmentRescheduleComponent,
    DrDashboardOnlineComponent,
  ],
  
  imports: [
    MatDatepickerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatProgressBarModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  
  providers: [AuthGuardService , { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
