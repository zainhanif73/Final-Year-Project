import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-admin-dashboard-doctors',
  templateUrl: './admin-dashboard-doctors.component.html',
  styleUrls: ['./admin-dashboard-doctors.component.css']
})
export class AdminDashboardDoctorsComponent implements OnInit {

  constructor(private api: ServicesService, private _interactinService: InteractionService) { }

  items: any = [];

  temp = {
    'a_end': '',
    'a_start': '',
    'about': null,
    'address': null,
    'cfees': null,
    'city_id': { name: "" },
    'cnic': null,
    'contact': null,
    'dob': null,
    'e_end': '',
    'e_start': '',
    'education': null,
    'experience': null,
    'email': null,
    'gender': null,
    'h_id': {
      "name": "",
      "location": "",
      "contact": "",
      "city_id": { "name": "" }
    },
    'id': null,
    'language': null,
    'm_end': '',
    'm_start': '',
    'm_status': null,
    'major_id': { name: "" },
    'name': null,
    'password': null,
    'pfees': null,
    'prof_membership': null,
    'username': null,
    'block_status': 0,
    'status': 1,
  }

  logout() {
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.items = []
    this.api.getDoctorLogin().subscribe(res => {
      for (var j in res) {
        if (!res[j].block_status && res[j].status)
          this.items.push({
            'a_end': res[j].a_end,
            'a_start': res[j].a_start,
            'about': res[j].about,
            'address': res[j].address,
            'cfees': res[j].cfees,
            'city_id': res[j].city_id.name,
            'cnic': res[j].cnic,
            'contact': res[j].contact,
            'dob': res[j].dob,
            'e_end': res[j].e_end,
            'e_start': res[j].e_start,
            'education': res[j].education,
            'email': res[j].email,
            'gender': res[j].gender,
            'h_id': res[j].h_id.name,
            'id': res[j].id,
            'language': res[j].language,
            'm_end': res[j].m_end,
            'm_start': res[j].m_start,
            'm_status': res[j].m_status,
            'major_id': res[j].major_id.name,
            'name': res[j].name,
            'password': res[j].password,
            'pfees': res[j].pfees,
            'prof_membership': res[j].prof_membership,
            'username': res[j].username,
            'block_status': res[j].block_status,
            'status': 1,
          })
      }
    }
    )
  }

  blockedApi(id: any) {

    this.api.showSpecificDoctor(id).subscribe(res => {
      this.temp = {
        'a_end': res.a_end,
        'a_start': res.a_start,
        'about': res.about,
        'address': res.address,
        'cfees': res.cfees,
        'city_id': { "name": res.city_id.name },
        'cnic': res.cnic,
        'contact': res.contact,
        'dob': res.dob,
        'e_end': res.e_end,
        'e_start': res.e_start,
        'education': res.education,
        'email': res.email,
        'gender': res.gender,
        'experience': res.experience,
        'h_id':
        {
          "name": res.h_id.name,
          "location": "Rawalpindi",
          "contact": "azaza",
          "city_id": { "name": res.city_id.name }
        },
        'id': res.id,
        'language': res.language,
        'm_end': res.m_end,
        'm_start': res.m_start,
        'm_status': res.m_status,
        'major_id': { "name": res.major_id.name },
        'name': res.name,
        'password': res.password,
        'block_status': 1,
        'pfees': res.pfees,
        'prof_membership': res.prof_membership,
        'username': res.username,
        'status': 1,
      }
      this.api.blockDoctor(id, this.temp).subscribe(
        res => {
          console.log(res);
          this.getData();
        }
      )
    })

  }

  saveID(id?: any, block_status?: any) {

    this.api.showSpecificDoctor(id).subscribe(res => {
      this.temp = {
        'a_end': res.a_end ? (res.a_end % 1 == 0 ? res.a_end + ": 00 Pm" : (res.a_end - .3) + ": 30 Pm") : "N/A",
        'a_start': res.a_start ? (res.a_start % 1 == 0 ? res.a_start + ": 00 Pm" : (res.a_start - .3) + ": 30 Pm") : "N/A",
        'about': res.about,
        'address': res.address,
        'cfees': res.cfees,
        'city_id': res.city_id.name,
        'experience': res.experience,
        'cnic': res.cnic,
        'contact': res.contact,
        'dob': res.dob,
        'e_end': res.e_end ? (res.e_end % 1 == 0 ? res.e_end + ": 00 Pm" : (res.e_end - .3) + ": 30 Pm") : "N/A",
        'e_start': res.e_start ? (res.e_start % 1 == 0 ? res.e_start + ": 00 Pm" : (res.e_start - .3) + ": 30 Pm") : "N/A",
        'education': res.education,
        'email': res.email,
        'gender': res.gender,
        'h_id': res.h_id.name,
        'id': res.id,
        'language': res.language,
        'm_end': res.m_end ? (res.m_end % 1 == 0 ? res.m_end + ": 00 Pm" : (res.m_end - .3) + ": 30 Pm") : "N/A",
        'm_start': res.m_start ? (res.m_start % 1 == 0 ? res.m_start + ": 00 Pm" : (res.m_start - .3) + ": 30 Pm") : "N/A",
        'm_status': res.m_status,
        'major_id': res.major_id.name,
        'name': res.name,
        'password': res.password,
        'block_status': block_status ? 1 : 0,
        'pfees': res.pfees,
        'prof_membership': res.prof_membership,
        'username': res.username,
        'status': 1,
      }
    })
  }

}

