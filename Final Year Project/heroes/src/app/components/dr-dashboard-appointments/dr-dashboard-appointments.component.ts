import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-dr-dashboard-appointments',
  templateUrl: './dr-dashboard-appointments.component.html',
  styleUrls: ['./dr-dashboard-appointments.component.css']
})
export class DrDashboardAppointmentsComponent implements OnInit {

  constructor(private _interactionService: InteractionService, private api:ServicesService) { }

  ngOnInit(): void { this.getData()}

  items:any = []

  temp2 = { id: "", name: '', username: "", email: "", contact: "", gender: "", dob: "", cnic: "", address: "" }
 
  viewPatientData(id: any) {
    this.api.getAllPatient().subscribe(
      res => {
        for (let j in res)
          if (id == res[j].id) {
            this.temp2 = {
              id: res[j].id,
              name: res[j].name,
              username: res[j].username,
              contact: res[j].contact,
              email: res[j].email,
              gender: res[j].gender,
              dob: res[j].dob,
              address: res[j].address,
              cnic: res[j].cnic
            }
          }
      }
    )
  }

  logout(){
    localStorage.clear();
    this._interactionService.sendMessage("Logout");
  }

  getData(){
    this.api.getBooking().subscribe(
      res => {
        for (let j in res){
          console.log(res[j]);
          if (res[j].d_id.id == localStorage.getItem("currentDoctorUserId") && res[j].status==0 && res[j].type=="Physical"){
            this.items.push(res[j]);
          }
        }
      }
    )
  }

  completeAppointment(id:any){
    let temp = {status : 1}
    this.api.completeBooking(id , temp).subscribe(
      res => {
        this.items = [];
        this.getData();
      }
    )
  }

  cancelAppointment(id:any){
    this.api.deleteBooking(id).subscribe(
      res => {
        console.log(id);
        this.items = [];
        this.getData();

      }
    )
  }

}
