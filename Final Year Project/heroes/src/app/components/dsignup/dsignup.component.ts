import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ServicesService } from 'src/app/services/api/services.service';

@Component({
  selector: 'app-dsignup',
  templateUrl: './dsignup.component.html',
  styleUrls: ['./dsignup.component.css'],
  providers: [ { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})

export class DsignupComponent implements OnInit {

  constructor(private api: ServicesService) { }

  checking = true;
  hide = true;

  getDoctorData = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    address: new FormControl(''),
    cnic: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    m_status: new FormControl(''),
    password: new FormControl(''),
    city_id: new FormControl(''),
    h_id: new FormControl(''),
    about: new FormControl(''),
    prof_membership: new FormControl(''),
    language: new FormControl(''),    
    experience: new FormControl(''),
    major_id: new FormControl(''),
    pfees: new FormControl(''),
    cfees: new FormControl(''),
    m_start: new FormControl(''),
    m_end: new FormControl(''),
    e_start: new FormControl(''),
    e_end: new FormControl(''),
    a_start: new FormControl(''),
    a_end: new FormControl(''),
    status : new FormControl(''),
    bank: new FormControl(''),
    beneficiary : new FormControl(''),
    accountnumber : new FormControl('')
  });


  ngOnInit(): void { }

  addDoctors(block_status?: any) {
    
    let saveData = this.getDoctorData.value
  
    let items = {
      name: saveData.name,
      contact: saveData.contact,
      cnic: saveData.cnic,
      email: saveData.email,
      gender: saveData.gender,
      m_status: saveData.m_status,
      language: saveData.language,
      about: saveData.about,
      password: saveData.password,
      experience: saveData.experience,
      education: "MBBS",
      prof_membership: saveData.prof_membership,
      pfees: saveData.pfees,
      cfees: saveData.cfees,
      m_start: saveData.m_start,
      m_end: saveData.m_end,
      e_start: saveData.e_start,
      e_end: saveData.e_end,
      a_start: saveData.a_start,
      a_end: saveData.a_end,
      username: saveData.username,
      dob: saveData.dob.toString().split(" 00")[0],
      address: saveData.address,
      
      city_id: { "id": 1, "name": saveData.city_id },
      major_id: { "id": 1, "name": saveData.major_id },
      h_id: { "id": 1, "name": saveData.h_id, "location": saveData.city_id, "contact": saveData.contact, "city_id": { "id": 1, "name": saveData.city_id } },
      
      block_status: 0,
      status : 0,
      account_detail : saveData.bank+" $ "+saveData.beneficiary+" $ "+saveData.accountnumber
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

    this.api.addDoctor(items).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}