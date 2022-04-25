import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-admin-dashboard-appointments',
  templateUrl: './admin-dashboard-appointments.component.html',
  styleUrls: ['./admin-dashboard-appointments.component.css']
})
export class AdminDashboardAppointmentsComponent implements OnInit {

  constructor(private api:ServicesService , private _interactinService: InteractionService) { }

  ngOnInit(): void {
    this.getData()
  }

  logout(){
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }

  items:any = []
  temp:any = [
    {
      'a_end': '',
      'a_start':'',
      'about': '',
      'address': '',
      'cfees': '',
      'city_id': '',
      'experience' : '',
      'cnic': '',
      'contact': '',
      'dob': '',
      'e_end': '',
      'e_start': '',
      'education': '',
      'email': '',
      'gender': '',
      'h_id': '',
      'id': '',
      'language': '',
      'm_end': '',
      'm_start': '',
      'm_status': '',
      'major_id': '',
      'name': '',
      'password': '',
      'block_status': '',
      'pfees': '',
      'prof_membership': '',
      'slot_gap': '',
      'username': '',
    }
  ]
  temp2:any = {
    "id":'',
    "name":'',
    "contact":'',
    "email":'',
    "username":'',
    "gender":'',
    "address":'',
    "cnic":'',
  }

  getData(){
    this.items=[]
    this.api.getBooking().subscribe(
      res => {
        for (let j in res){
          if (!res[j].status)
            this.items.push(res[j])
        }
      }
    )
  }

  viewPatient(id:any){
    this.api.getAllPatient().subscribe(
      res=>{
        for (let j in res){
          if (res[j].id == id){
            this.temp2.contact = res[j].contact,
            this.temp2.gender = res[j].gender,
            this.temp2.cnic = res[j].cnic,
            this.temp2.address = res[j].address,
            this.temp2.id = res[j].id
            this.temp2.email = res[j].email
            this.temp2.username = res[j].username
            this.temp2.name = res[j].name
          }
        }
      }
    )
  }

  viewRecord(id:any){
    this.api.getBooking().subscribe(
      res => {
        for (let j in res)
        {
          if (res[j].id==id){
            console.log(res[j]);
            this.temp.p_id = res[j].p_id.id
            this.temp.dname = res[j].d_id.name
            this.temp.d_id = res[j].d_id.id
            this.temp.hname = res[j].d_id.h_id.name
          }
        }
      }
    )
  }

  deleteRecord(id:any){
    this.api.deleteBooking(id).subscribe(
      res => {
        console.log(res);
        this.getData();
      }
    )
  }

  viewDoctor(id:any, block_status?:any){
    this.api.showSpecificDoctor(id).subscribe(res => {
      this.temp = {
        'a_end': res.a_end ? (res.a_end % 1 == 0 ? res.a_end + ":00 Pm" : (res.a_end - .3) + ":30 Pm") : "N/A",
        'a_start': res.a_start ? (res.a_start % 1 == 0 ? res.a_start + ":00 Pm" : (res.a_start - .3) + ":30 Pm") : "N/A",
        'about': res.about,
        'address': res.address,
        'cfees': res.cfees,
        'city_id': res.city_id.name,
        'experience' :res.experience,
        'cnic': res.cnic,
        'contact': res.contact,
        'dob': res.dob,
        'e_end': res.e_end ? (res.e_end % 1 == 0 ? res.e_end + ":00 Pm" : (res.e_end - .3) + ":30 Pm") : "N/A",
        'e_start': res.e_start ? (res.e_start % 1 == 0 ? res.e_start + ":00 Pm" : (res.e_start - .3) + ":30 Pm") : "N/A",
        'education': res.education,
        'email': res.email,
        'gender': res.gender,
        'h_id': res.h_id.name,
        'id': res.id,
        'language': res.language,
        'm_end': res.m_end ? (res.m_end % 1 == 0 ? res.m_end + ":00 Pm" : (res.m_end - .3) + ":30 Pm") : "N/A",
        'm_start': res.m_start ? (res.m_start % 1 == 0 ? res.m_start + ":00 Pm" : (res.m_start - .3) + ":30 Pm") : "N/A",
        'm_status': res.m_status,
        'major_id': res.major_id.name,
        'name': res.name,
        'password': res.password,
        'block_status': block_status ? 1 : 0,
        'pfees': res.pfees,
        'prof_membership': res.prof_membership,
        'slot_gap': res.slot_gap,
        'username': res.username,
      }
    })
  }
}
