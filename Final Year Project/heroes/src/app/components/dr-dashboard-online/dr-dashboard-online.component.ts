import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-dr-dashboard-online',
  templateUrl: './dr-dashboard-online.component.html',
  styleUrls: ['./dr-dashboard-online.component.css']
})
export class DrDashboardOnlineComponent implements OnInit {

  constructor(private _interactionService: InteractionService, private api: ServicesService) { }

  ngOnInit(): void { this.getData() }

  items: any = []

  temp2 = {
    id: "", b_id: "", name: '', username: "", email: "", contact: "",
    gender: "", dob: "", cnic: "", address: "", proof: ""
  }

  check: any = true;
  getproof:any;

  viewPatientData(id: any, b_id: any) {
    this.api.getAllPatient().subscribe(
      res => {
        for (let j in res) {
          
          if (id == res[j].id) {
            this.api.getBooking().subscribe(
              res1 => {
                for (let j in res1) {
                  if (b_id == res1[j].id) {
                    this.getproof = res1[j].o_proof;
                    if (res1[j].o_status == 0) {
                      this.check = true;
                    }
                    else {
                      this.check = false;
                    }
                  }
                }

                this.temp2 = {
                  id: res[j].id,
                  b_id: b_id,
                  name: res[j].name,
                  username: res[j].username,
                  contact: res[j].contact,
                  email: res[j].email,
                  gender: res[j].gender,
                  dob: res[j].dob,
                  address: res[j].address,
                  cnic: res[j].cnic,
                  proof: this.getproof
                }
              }
            )
          }
        }
      }
    )
  }

  checkPayment(id: any, id2:any) {
    if (this.check == true) {
      let temp = { o_status: 1 }
      this.api.completeBooking(id, temp).subscribe(
        res => {
          this.items = [];
          this.getData();
        }
      )
      this.check = false;
    }
    this.sendLink(id2);
  }

  link: any = "";
  sendLinkl: any = { d_id: '', p_id: '', join_link: 'http', admin_link: 'http' };
  receieveLink:any;

  sendLink(id: any) {
    let doctor: any;
    let patient: any;
    this.api.showSpecificDoctor(id).subscribe(
      res => {
        doctor = res;
        this.api.getAllPatient().subscribe(
          res1 => {
            for (let j in res1) {
              if (res1[j].id == this.temp2.id) {
                patient = res1[j];
                this.sendLinkl.d_id = doctor;
                this.sendLinkl.p_id = patient;
                this.api.getLink(this.sendLinkl).subscribe(
                  res => {
                    this.receieveLink = res.admin_link;
                  }
                )
              }
            }
          }
        )
      }
    )
  }

  logout() {
    localStorage.clear();
    this._interactionService.sendMessage("Logout");
  }

  getData() {
    this.api.getBooking().subscribe(
      res => {
        for (let j in res) {
          if (res[j].d_id.id == localStorage.getItem("currentDoctorUserId") && res[j].status == 0 && res[j].type == "Online") {
            this.items.push(res[j]);
          }
        }
      }
    )
  }

  completeAppointment(id: any) {
    let temp = { status: 1 }
    this.api.completeBooking(id, temp).subscribe(
      res => {
        this.items = [];
        this.getData();
      }
    )
  }

  cancelAppointment(id: any) {
    this.api.deleteBooking(id).subscribe(
      res => {
        console.log(id);
        this.items = [];
        this.getData();
      }
    )
  }
}
