import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-dr-dashboard-profile',
  templateUrl: './dr-dashboard-profile.component.html',
  styleUrls: ['./dr-dashboard-profile.component.css']
})
export class DrDashboardProfileComponent implements OnInit {

  constructor(private _interactionService:InteractionService ,private api:ServicesService){}
  hide = true;

  ngOnInit(): void {
    this.getData();
  }

  getDoctorData = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    contact: new FormControl(''),
    cnic: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    m_status: new FormControl(''),
    language: new FormControl(''),
    about: new FormControl(''),
    password: new FormControl(''),
    experience: new FormControl(''),
    education: new FormControl(''),
    prof_membership: new FormControl(''),
    pfees: new FormControl('',),
    cfees: new FormControl('',),
    m_start: new FormControl(''),
    m_end: new FormControl(''),
    e_start: new FormControl(''),
    e_end: new FormControl(''),
    a_start: new FormControl(''),
    a_end: new FormControl(''),
    username: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    slot_gap: new FormControl(''),
    h_id: new FormControl(''),
    city_id: new FormControl(''),
    major_id: new FormControl(''),
    block_status: new FormControl(''),
    accountnumber : new FormControl(''),
    bank: new FormControl(''),
    beneficiary: new FormControl(''),
  });

  logout(){
    localStorage.clear();
    this._interactionService.sendMessage("Logout");
  }

  getData() {
    this.api.showSpecificDoctor(localStorage.getItem("currentDoctorUserId")).subscribe(res => {
      this.getDoctorData.setValue({
        'id': res.id,
        'name': res.name,
        'contact': res.contact,
        'cnic': res.cnic,
        'email': res.email,
        'gender': res.gender,
        'm_status': res.m_status,
        'language': res.language,
        'about': res.about,
        'password': res.password,
        'username': res.username,
        'experience': res.experience + "",
        'pfees': res.pfees,
        'cfees': res.cfees,
        'education': res.education,
        'prof_membership': res.prof_membership,
        "m_start": res.m_start + "",
        "a_start": res.a_start + "",
        "e_start": res.e_start + "",
        "m_end": res.m_end + "",
        "a_end": res.a_end + "",
        "e_end": res.e_end + "",
        "dob": res.dob,
        "address": res.address,
        "slot_gap": 30,
        'major_id': res.major_id.name,
        'h_id': res.h_id.name,
        'city_id': res.city_id.name,
        'block_status': res.block_status,
        "accountnumber": res.account_detail.split(" $ ")[2],
        "bank":  res.account_detail.split(" $ ")[0],
        "beneficiary" : res.account_detail.split(" $ ")[1]
      });
    })
  }


  updateRecord() {

    let items = {
      name: this.getDoctorData.value.name,
      contact: this.getDoctorData.value.contact,
      cnic: this.getDoctorData.value.cnic,
      email: this.getDoctorData.value.email,
      gender: this.getDoctorData.value.gender,
      m_status: this.getDoctorData.value.m_status,
      language: this.getDoctorData.value.language,
      about: this.getDoctorData.value.about,
      password: this.getDoctorData.value.password,
      experience: this.getDoctorData.value.experience,
      education: this.getDoctorData.value.education,
      prof_membership: this.getDoctorData.value.prof_membership,
      pfees: this.getDoctorData.value.pfees,
      cfees: this.getDoctorData.value.cfees,
      m_start: this.getDoctorData.value.m_start,
      m_end: this.getDoctorData.value.m_end,
      e_start: this.getDoctorData.value.e_start,
      e_end: this.getDoctorData.value.e_end,
      a_start: this.getDoctorData.value.a_start,
      a_end: this.getDoctorData.value.a_end,
      username: this.getDoctorData.value.username,
      dob: this.getDoctorData.value.dob,
      address: this.getDoctorData.value.address,
      slot_gap: this.getDoctorData.value.slot_gap,
      city_id: { "name": this.getDoctorData.value.city_id },
      major_id: { "name": this.getDoctorData.value.major_id },
      h_id: {
        "name": this.getDoctorData.value.h_id,
        "location": this.getDoctorData.value.city_id,
        "contact": this.getDoctorData.value.contact,
        "city_id": { "name": this.getDoctorData.value.city_id }
      },
      block_status: this.getDoctorData.value.block_status,
      account_detail : this.getDoctorData.value.bank+" $ "+ this.getDoctorData.value.name+" $ "+this.getDoctorData.value.accountnumber
    }
    if (items.a_start > items.a_end){
      alert("Afternoon Slot Timing Is Not Valid");
    }
    else if (items.m_start > items.m_end){
      alert("Morning Slot Timing Is Not Valid");
    }
    else if (items.e_start > items.e_end){
      alert("Evening Slot Timing Is Not Valid");
    }
    else{
      this.api.updateDoctor(items, localStorage.getItem('currentDoctorUserId')).subscribe(
        val => {
          if (val.null=="This field may not be null."){
            alert("Please Fill All Details");
          }
          else
            alert("Data Updated Successfully");
        },
        error=>{
          alert("Please Fill All Details");
          console.log(error);
        }
      )
    } 
  }
}
