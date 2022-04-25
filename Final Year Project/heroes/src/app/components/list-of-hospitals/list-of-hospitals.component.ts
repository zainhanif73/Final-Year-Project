import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';

@Component({
  selector: 'app-list-of-hospitals',
  templateUrl: './list-of-hospitals.component.html',
  styleUrls: ['./list-of-hospitals.component.css']
})
export class ListOfHospitalsComponent implements OnInit {

  items:any = []

  constructor(private api : ServicesService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url =>{
      this.getData();
    });
  }

  number = 0;
  skill = "DERMATOLOGIST"
  location = this.activatedRoute.snapshot.url[0].path.toUpperCase()
  getCityData = new FormGroup({
    city : new FormControl('')
  })

  getData(){
    this.number=0;
    this.items = [];
    this.location = this.activatedRoute.snapshot.url[0].path.toUpperCase()=="ALL"?"ALL HOSPITALS":this.activatedRoute.snapshot.url[0].path.toUpperCase();
    this.api.getHospital().subscribe(
      res=>{
        for (let j in res){
          if (!res[j].block_status && (res[j].city_id.name.toLowerCase()==this.activatedRoute.snapshot.url[0].path.toLowerCase() || this.activatedRoute.snapshot.url[0].path.toLowerCase()=="all")){
            this.items.push(res[j]);
            this.number = this.number+1;
          }
        }
       }
     )
   }

   onClick(){
     if (this.getCityData.value.city == "" || this.getCityData.value.city == null ){
      this.router.navigateByUrl("/pakistan/All/hospital");  
     }
     else
      this.router.navigateByUrl("/pakistan/"+this.getCityData.value.city+"/hospital");
   }
}
