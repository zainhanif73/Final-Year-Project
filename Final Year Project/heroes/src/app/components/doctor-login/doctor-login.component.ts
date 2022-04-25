import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})

export class DoctorLoginComponent  {

  constructor(private api : ServicesService , private route:Router , private _interactionService: InteractionService) {}

  username? : String
  password? : String

  checkLogin(){
    this.api.getDoctorLogin().subscribe(res => {
      for (var j in res){
          if (res[j].email == this.username && res[j].password == this.password){
            localStorage.setItem('currentDoctorUser', res[j].username);
            localStorage.setItem('currentDoctorUserId', res[j].id);
            
            this.route.navigateByUrl("/doctor/dashboard");
            this._interactionService.sendMessage("DoctorCall");
            
            console.log('Doctor Login Successfully');
          }
        }
      }
    )
  }
}
