import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-dr-dashboard-patients',
  templateUrl: './dr-dashboard-patients.component.html',
  styleUrls: ['./dr-dashboard-patients.component.css']
})
export class DrDashboardPatientsComponent implements OnInit {

  constructor(private _interactionService: InteractionService ,private api: ServicesService) { }

  ngOnInit(): void { this.getData() }

  items: any = []
  
  getData() {
    this.api.getBooking().subscribe(
      res => {
        for (let j in res) {
          console.log(res[j]);
          if (res[j].d_id.id == localStorage.getItem("currentDoctorUserId") && res[j].status != 0) {
            this.items.push(res[j]);
          }
        }
      }
    )
  }

  logout(){
    localStorage.clear();
    this._interactionService.sendMessage("Logout");
  }

}
