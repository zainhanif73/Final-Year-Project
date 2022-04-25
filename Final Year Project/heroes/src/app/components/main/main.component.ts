import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  city = "islamabad"
  spec = ""
  check:boolean = true;
  
  changeCheck(){
    this.check = !this.check;
  }

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
