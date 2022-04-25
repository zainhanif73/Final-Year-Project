import { HttpClient } from '@angular/common/http';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  skill!:any;
  location!:any;
  name!:any;
  id!:any;
  experience!:any;
  education!:any;
  about!:any;
  pfees!:any;
  cfees!:any;
  hospital_name!:any;
  hospital_address!:any;

  constructor(private api:ServicesService , private activatedRoute: ActivatedRoute) { 
    this.id = activatedRoute.snapshot.url[2].path;
    console.log(this.id);
    this.getDetail()
  }

  ngOnInit(): void {
  }

  getDetail(){
    this.api.showDoctors().subscribe(res => {
      for (var j in res){
         if (res[j].id == this.id){
           console.log(res[j]);
            this.skill = res[j].major_id.name;
            this.location= res[j].city_id.name;
            this.name = res[j].name;
            this.education = res[j].education;
            this.about = res[j].about;
            this.experience = res[j].experience;
            this.pfees = res[j].pfees;
            this.cfees = res[j].cfees;
            this.hospital_name = res[j].h_id.name;
            this.hospital_address = res[j].h_id.location;
            // console.log("checking")
         } 
      }
    })
  }



}
