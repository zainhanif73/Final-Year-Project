import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-block-hospital',
  templateUrl: './block-hospital.component.html',
  styleUrls: ['./block-hospital.component.css']
})
export class BlockHospitalComponent implements OnInit {

  constructor(private api: ServicesService , private _interactinService:InteractionService) {
    
   }

  items: any = []
  temp: any = { "id": '', "city_id": { "name": '' }, "name": '', "location": '', "contact": '', "block_status": 0 }

  ngOnInit(): void {
    this.showHospitals();
  }

  getDoctorData = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    city: new FormControl(''),
    location: new FormControl(''),
  });

  showHospitals() {
    this.items=[];
    this.api.getHospital().subscribe(
      res => {
        for (var j in res) {
          if (res[j].block_status)
            this.items.push({ "id": res[j].id, "city_id": { "name": res[j].city_id.name }, "name": res[j].name, "location": res[j].location, "contact": res[j].contact })
        }
      }
    )
  }

  editDetail(id: any) {
    this.api.getHospital().subscribe(
      res => {
        for (var j in res) {
          if (res[j].id == id) {
            this.temp = { "id": res[j].id, "city_id": { "name": res[j].city_id.name }, "name": res[j].name, "location": res[j].location, "contact": res[j].contact , "block_status" : 0}
          }
        }
      }
    )
  }

  logout(){
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }

  onUpdate(id: any) {
    
    this.temp.name = this.getDoctorData.value.name? this.getDoctorData.value.name : this.temp.name  
    this.temp.contact = this.getDoctorData.value.contact? this.getDoctorData.value.contact : this.temp.contact
    this.temp.block_status = 0
    this.temp.location = this.getDoctorData.value.location? this.getDoctorData.value.location: this.temp.location
    this.temp.city_id = {"id":0, "name" : this.getDoctorData.value.city? this.getDoctorData.value.city :  this.temp.city_id.name }

    this.api.updateHospital(id, this.temp).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  blockDoctor(id: any) {
    this.api.getHospital().subscribe(
      res => {
        for (var j in res) {
          if (res[j].id == id) {
            this.temp = { "id": res[j].id, "city_id": { "name": res[j].city_id.name }, "name": res[j].name, "location": res[j].location, "contact": res[j].contact, "block_status": 0 }
          }
        }

        this.api.updateHospital(id, this.temp).subscribe(
          res => {
            console.log(res);
            this.showHospitals();
          }
        )
      }
    )
  }
}
