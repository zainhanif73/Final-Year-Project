import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-admin-dashboard-hospital-add',
  templateUrl: './admin-dashboard-hospital-add.component.html',
  styleUrls: ['./admin-dashboard-hospital-add.component.css']
})
export class AdminDashboardHospitalAddComponent implements OnInit {

  constructor(private api:ServicesService , private _interactinService:InteractionService) { }
  
  hide = true;
  temp:any = []
  ngOnInit(): void {  }

  getDoctorData = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    city : new FormControl(''),
    location: new FormControl(''),
  });

  logout(){
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }  
  
  addHospital(){
    
    this.temp = {"contact" : this.getDoctorData.value.contact , "location" : this.getDoctorData.value.location , 
                "name": this.getDoctorData.value.name , "city_id" : {"name" : this.getDoctorData.value.city} , 
                "block_status": 0}

    this.api.addHospital(this.temp).subscribe(
      res => {
        console.log(res);
        this.getDoctorData.reset(); 
      }
    )
  }
}
