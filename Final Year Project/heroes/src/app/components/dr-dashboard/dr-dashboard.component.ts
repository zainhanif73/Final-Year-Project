import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-dr-dashboard',
  templateUrl: './dr-dashboard.component.html',
  styleUrls: ['./dr-dashboard.component.css']
})
export class DrDashboardComponent implements OnInit {

  constructor(private _interactinService: InteractionService, private api:ServicesService) { }

  ngOnInit(): void { this.getData() }

  totalPatient = 0;
  totalAppointments = 0;

  getData(){
    let id = localStorage.getItem("currentDoctorUserId");
    this.api.getBooking().subscribe(
      res => {
        for (let j in res){
          if (res[j].d_id.id == id){
            if (!res[j].status)
              this.totalPatient += 1;
            else
            this.totalAppointments +=1;
          }
        }
      }
    )
  }

  logout(){
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }

}
