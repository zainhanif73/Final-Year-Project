import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private api : ServicesService , private route:Router , private _interactionService: InteractionService) { }

  username?:String;
  password?:String;

  checkLogin(){
    this.api.getAdminLogin().subscribe(
      res => {
        for (let j in res){
          if (res[j].username == this.username && res[j].password == this.password){
            localStorage.setItem('currentAdminUser', res[j].username);
            this.route.navigateByUrl("/admin/dashboard");
            this._interactionService.sendMessage("AdminCall");
          }
          console.log(res[j]);
        }
      }
    )
  }
}
