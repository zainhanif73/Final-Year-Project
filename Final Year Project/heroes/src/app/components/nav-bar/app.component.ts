import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  check = false;
  User!: any;
  message: any;

  constructor(private _interactionService: InteractionService, public router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('currentPatientUser')) {
      this.User = localStorage.getItem('currentPatientUser')?.toString();
      this.check = true;
    }

    else if (localStorage.getItem('currentDoctorUser')) {
      this.User = localStorage.getItem('currentDoctorUser')?.toString();
      this.check = true;
    }

    else if (localStorage.getItem('currentAdminUser')) {
      this.User = localStorage.getItem('currentAdminUser')?.toString();
      this.check = true;
    }

    this._interactionService.teacherMessage$.subscribe(
      message => {
        if (message == 'PatientCall') {
          alert("Login Successfully");
          this.User = localStorage.getItem('currentPatientUser')?.toString();
          this.check = true;
        }
        else if (message == 'DoctorCall') {
          alert("Login Successfully");
          this.User = localStorage.getItem('currentDoctorUser')?.toString();
          this.check = true;
        }
        else if (message == 'AdminCall') {
          alert("Login Successfully");
          this.User = localStorage.getItem('currentAdminUser')?.toString();
          this.check = true;
        }
        else if (message == "Logout"){
          this.check = false;
        }
      }
    )
  }

  profile(){
    if (localStorage.getItem('currentPatientUser')?.toString())
      this.router.navigateByUrl('patient/profile');
    if (localStorage.getItem('currentDoctorUser')?.toString())
      this.router.navigateByUrl('doctor/dashboard');
    if (localStorage.getItem('currentAdminUser')?.toString())
      this.router.navigateByUrl('admin/dashboard');
  }
  
  appointments(){
    if (localStorage.getItem('currentPatientUser')?.toString())
      this.router.navigateByUrl('patient/appointments');
    if (localStorage.getItem('currentDoctorUser')?.toString())
      this.router.navigateByUrl('doctor/appointments');
    if (localStorage.getItem('currentAdminUser')?.toString())
      this.router.navigateByUrl('admin/appointments');
  }

  logout() {
    alert("Logout Successfully");
    this.router.navigateByUrl('/');
    localStorage.clear();
    this.check = false;
  }

}

