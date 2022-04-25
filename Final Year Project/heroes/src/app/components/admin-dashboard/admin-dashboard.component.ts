import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private api: ServicesService, private _interactinService: InteractionService) { }

  totalPatient = 0
  totalDoctors = 0
  totalHospital = 0

  patients: any = []
  doctors: any = []
  hospital: any = []

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
    'status': 0
  }

  items: any = [];

  ngOnInit(): void {
    this.api.getAllPatient().subscribe(
      res => {
        for (let j in res) {
          this.patients.push(res[j]);
        }
        this.totalPatient = this.patients.length
      }
    )

    this.api.getDoctorLogin().subscribe(
      res => {
        for (let j in res) {
          if (!res[j].status)
            this.doctors.push(res[j]);
          else
            this.totalDoctors += 1
        }
      }
    )

    this.api.getHospital().subscribe(
      res => {
        for (let j in res) {
          this.hospital.push(res[j])
        }
        this.totalHospital = this.hospital.length
      }
    )
  }


  acceptData(id: any, block_status?: any) {
    let temp1: any;
    temp1 = { "status": 1 };
    this.api.acceptDoctor(temp1, id).subscribe(
      res1 => {
        this.doctors = []
        this.totalDoctors = 0
        this.api.getDoctorLogin().subscribe(
          res => {
            for (let j in res) {
              if (!res[j].status)
                this.doctors.push(res[j]);
              else
                this.totalDoctors += 1
            }
          }
        )
      }
    )

  }

  logout() {
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
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
        'status': res.status
      }
    })
  }

  deleteData(id: any) {
    this.api.deleteDoctor(id).subscribe(
      res => {
        console.log(res);
        this.api.getDoctorLogin().subscribe(
          res => {
            this.doctors = []
            this.totalDoctors = 0
            for (let j in res){
              if (!res[j].status)
                this.doctors.push(res[j]);
              else
              this.totalDoctors += 1
            }
          }
        )
      }
    )
  }

}
