import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-admin-dashboard-users',
  templateUrl: './admin-dashboard-users.component.html',
  styleUrls: ['./admin-dashboard-users.component.css']
})
export class AdminDashboardUsersComponent implements OnInit {

  constructor(private api: ServicesService, private _interactinService: InteractionService) { }
  items: any = []
  temp = { id: "", name: '', username: "", email: "", contact: "", gender: "", dob: "", cnic: "", address: "" }


  ngOnInit(): void {
    this.getAllUser()
  }

  logout() {
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }

  getAllUser() {
    this.items = [];
    this.api.getAllPatient().subscribe(
      res => {
        for (let j in res)
          if (!res[j].block_status)
            this.items.push({
              id: res[j].id,
              name: res[j].name,
              contact: res[j].contact,
              email: res[j].email,
              gender: res[j].gender,
              dob: res[j].dob

            }
          )
      }
    )
  }

  blockUser(id: any) {
    const data = { block_status: 1 };
    this.api.blockUser(id, data).subscribe(
      res => {
        console.log(res);
        this.getAllUser();
      }
    )
  }

  viewData(id: any) {
    this.api.getAllPatient().subscribe(
      res => {
        for (let j in res)
          if (id == res[j].id)
            this.temp = {
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
        console.log(res);
      }
    )
  }
}
