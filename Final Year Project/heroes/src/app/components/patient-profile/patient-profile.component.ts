import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/api/services.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})

export class PatientProfileComponent implements OnInit {

  hide = true;
  getDoctorData = new FormGroup({
    email : new FormControl('', ),
    name : new FormControl('', ),
    username : new FormControl('', ),
    contact : new FormControl('', ),
    password : new FormControl('', ),
    gender : new FormControl('', ),
    dob : new FormControl('', ),
    address : new FormControl('', ),
    cnic : new FormControl('', ),
  })

  constructor(private api:ServicesService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.api.getAllPatient().subscribe(
      res => {
        for (let j in res){
          if (res[j].id == localStorage.getItem("currentPatientUserId")){
            this.getDoctorData.setValue({
              email : res[j].email,
              name : res[j].name,
              username : res[j].username,
              contact : res[j].contact,
              password : res[j].password,
              gender : res[j].gender,
              dob : res[j].dob,
              address : res[j].address,
              cnic : res[j].cnic,
            })
          }
        }
      }
    )
  }

  updateData(){
    this.api.updatePateint(localStorage.getItem("currentPatientUserId"), this.getDoctorData.value ).subscribe(
      res => {
        alert("Data Successfully Updated");
        this.getDoctorData.reset();
      },
      error=>{
        if (error.ok==false){
          alert("Please Fill All Details");
        }
      }
    )
  }
}
