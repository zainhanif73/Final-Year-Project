import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ServicesService } from 'src/app/services/api/services.service';


@Component({
  selector: 'app-psignup',
  templateUrl: './psignup.component.html',
  styleUrls: ['./psignup.component.css']
})


export class PsignupComponent implements OnInit {

  constructor(private api:ServicesService) { }
  
  ngOnInit(): void {}
  
  hide = true;
  getPatientData = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    contact: new FormControl(''),
    // -------------------------------------------
    cnic: new FormControl(''),
    dob: new FormControl(''),
    block_status: new FormControl(''),
    address: new FormControl(''),

  })

  uploadData(){
    this.getPatientData.value.block_status = 0
    
    console.log(this.getPatientData.value);
    this.api.addPatient(this.getPatientData.value).subscribe(
      res => {
        console.log(res);
        this.getPatientData.reset();
      }
    )
  }
}

export class SelectNoRippleExample {}
