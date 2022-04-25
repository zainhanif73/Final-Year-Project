import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';

@Component({
  selector: 'app-hospital-profile',
  templateUrl: './hospital-profile.component.html',
  styleUrls: ['./hospital-profile.component.css']
})
export class HospitalProfileComponent implements OnInit {

  item:any = {city_id:{name:''}};
  check=0;

  constructor(private url:ActivatedRoute , private api:ServicesService) { }

  ngOnInit(): void {
    console.log(this.url.snapshot.url[4].path);
    this.getData();
  }

  getData(){
    this.api.getHospital().subscribe(
      res=>{
        for (let j in res){
          if (res[j].id==this.url.snapshot.url[4].path){
            this.item = res[j];
          }
        }
      }
    )

    this.api.getDoctorLogin().subscribe(
      res=>{
        for (let j in res){
            if (!res[j].block_status && res[j].h_id.id == this.url.snapshot.url[4].path){
                this.check+=1;
          }
        }
      }
    )
  }

}
