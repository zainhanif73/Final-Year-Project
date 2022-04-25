import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/api/services.service';

@Component({
  selector: 'app-patient-all-appointments',
  templateUrl: './patient-all-appointments.component.html',
  styleUrls: ['./patient-all-appointments.component.css']
})
export class PatientAllAppointmentsComponent implements OnInit {
  
  constructor(private api:ServicesService) { }
  
  items1:any = []
  onlineItems:any = []
  items:any = []
  links:any=[]

  ngOnInit(): void {
    this.getData();
  }

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
    'experience' : null,
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
    'slot_gap': null,
    'username': null,
    'block_status': 0
  }


  getData(){
    let id = localStorage.getItem("currentPatientUserId")
    this.api.getBooking().subscribe(
      res => {
        for (let j in res){
          if (res[j].p_id.id == id && res[j].type=="Physical"){
            if (!res[j].status ){
              this.items.push(res[j]);
            }
            else{
              this.items1.push(res[j]);
            }
          }
          else if (res[j].p_id.id == id && res[j].type=="Online"){
            if (!res[j].status ){
              let bool=false;
              if (res[j].o_status==true){
                this.api.getLinkNow().subscribe(
                  res1=> {
                      for (let j1 in res1){
                        if (res1[j1].p_id.id=id && res1[j1].d_id.id==res[j].d_id.id){
                          this.onlineItems.push({"name":res[j].d_id.name , "date":res[j].date , "time":res[j].time ,"contact":res[j].d_id.contact , "email":res[j].d_id.email
                          ,"o_status" : res[j].o_status , "link" : res1[j].join_link, "d_id":res[j].d_id.id , "id":res[j].id});           
                          bool = true;
                          break;   
                        }
                      }
                  }
                )
              }
              else{
                    this.onlineItems.push({"name":res[j].d_id.name , "date":res[j].date , "time":res[j].time ,"contact":res[j].d_id.contact , "email":res[j].d_id.email
                      ,"o_status" : res[j].o_status , "link" : "", "d_id":res[j].d_id.id , "id":res[j].id});
              }
            }
            else{
              this.items1.push(res[j]);
            }
          } 
        }
      }
    )
  }



  showData(id:any , block_status?:any){
    this.api.showSpecificDoctor(id).subscribe(res => {
      this.temp = {
        'a_end': res.a_end ? (res.a_end % 1 == 0 ? res.a_end + ": 00 Pm" : (res.a_end - .3) + ": 30 Pm") : "N/A",
        'a_start': res.a_start ? (res.a_start % 1 == 0 ? res.a_start + ": 00 Pm" : (res.a_start - .3) + ": 30 Pm") : "N/A",
        'about': res.about,
        'address': res.address,
        'cfees': res.cfees,
        'city_id': res.city_id.name,
        'experience' :res.experience,
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
        'm_end': res.m_end ? (res.m_end % 1 == 0 ? res.m_end + ": 00 Am" : (res.m_end - .3) + ": 30 Am") : "N/A",
        'm_start': res.m_start ? (res.m_start % 1 == 0 ? res.m_start + ": 00 Am" : (res.m_start - .3) + ": 30 Am") : "N/A",
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

  deleteAppointment(id:any){
    this.api.deleteBooking(id).subscribe(
      res =>{
        console.log(res);
        this.items = [];
        this.onlineItems = [];
        this.items1 = [];
        this.getData();
      }
    )
  }
}
