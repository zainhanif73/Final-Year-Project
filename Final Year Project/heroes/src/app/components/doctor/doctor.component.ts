import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})

export class DoctorComponent implements OnInit{
  
  ngOnInit(): void {}

  constructor(private router:Router){}

  city = "islamabad"
  spec = ""
  getInputData = new FormGroup(
    {
      city: new FormControl(''),
      spec: new FormControl(''),
    }
  )

  onClick(){
    this.city=this.getInputData.value.city;
    this.spec=this.getInputData.value.spec;
    this.router.navigateByUrl("/pakistan/doctor/"+this.getInputData.value.city+"/"+this.getInputData.value.spec);
  }
}
