import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-admin-dashboard-patient-profile',
  templateUrl: './admin-dashboard-patient-profile.component.html',
  styleUrls: ['./admin-dashboard-patient-profile.component.css']
})
export class AdminDashboardPatientProfileComponent implements OnInit {
  
  temp: { name: any; contact: any; email: any; gender: any; password: any; } | undefined;

  constructor(private api:ServicesService , private route: ActivatedRoute, private _interactinService:InteractionService) {}
  

  getDataForm = new FormGroup({
      name: new FormControl(''),
      contact: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      password: new FormControl('')
  })

  logout(){
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }

  hide = true;
  path?:any;

  ngOnInit(): void {
    this.path = this.route.snapshot.url[3].path;
    this.getData(this.path);
  }

  getData(id:any){

  this.api.getAllPatient().subscribe(
    res => {
      for (let j in res){
        if (res[j].id == id){
          this.getDataForm.setValue({
            'name': res[j].name,
            'contact': res[j].contact,
            'password': res[j].password,
            'gender': res[j].gender,
            'email': res[j].email,
          })
        }
      }
    }
  )
  this.temp = {
        name : this.getDataForm.value.name ,
        contact : this.getDataForm.value.contact ,
        email : this.getDataForm.value.email ,
        gender : this.getDataForm.value.gender ,
        password : this.getDataForm.value.password 
  } 
}

updatePatient(id:any){
  this.api.updatePateint(id , this.getDataForm.value).subscribe(
    res => {
      if(res.null=="This field may not be null.")
        alert("Data Updated Successfully");
      else
        alert("Please Fill All Details");
      },
      error=>{
        alert("Please Fill All Details");
      }
    )
}



}
