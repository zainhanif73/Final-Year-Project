import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';

@Component({
  selector: 'app-patient-appointment-reschedule',
  templateUrl: './patient-appointment-reschedule.component.html',
  styleUrls: ['./patient-appointment-reschedule.component.css']
})
export class PatientAppointmentRescheduleComponent implements OnInit {

  constructor(private api:ServicesService , private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.url[3].path);
  }
  
  check:any = false;
  date = new FormControl(new Date());
  getFormData = new FormGroup({
    date: new FormControl(''),
    time : new FormControl('')
  })

  time = new FormControl('');
  serializedDate = new FormControl(new Date().toISOString());

  checkdiv(){
    const get_id = document.getElementById('listGroupRadios2') as HTMLInputElement;
    if (get_id!.checked==true){
      this.check = true;
    }
    else{
      this.check = false;
    }
  }

  onUpdate(){
    this.getFormData.value.date = (this.getFormData.value.date).toString().split(" 00")[0]
    
    this.api.completeBooking(this.activatedRoute.snapshot.url[3].path , this.getFormData.value ).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
