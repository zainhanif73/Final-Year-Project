import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private api: ServicesService, private route: ActivatedRoute, private router: Router, private _interactionService: InteractionService) { }

  username?: string;
  password?: string;
  redirectURL?: string;

  checkLogin() {

    console.log(this.router.url)
    this.api.getAllPatient().subscribe(
      res => {
        for (var j in res) {
          console.log(res[j]);
          if (res[j].email == this.username && res[j].password == this.password) {
            localStorage.setItem('currentPatientUser', res[j].username);
            localStorage.setItem('currentPatientUserId', res[j].id);
            
            this._interactionService.sendMessage("PatientCall");
            
            let params = this.route.snapshot.queryParams;

            if (params['returnUrl'])
              this.redirectURL = params['returnUrl'];

            if (this.redirectURL)
              this.router.navigateByUrl(this.redirectURL,).catch(() => this.router.navigate(['']))
            else
              this.router.navigate([''])

          }
        }
      }
    )
  }
}
