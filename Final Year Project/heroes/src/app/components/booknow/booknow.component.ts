import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  constructor(private api: ServicesService, private activatedRoute: ActivatedRoute, private route: Router) { }

  check: any = false;
  check1: any = false;
  checkpayments: any = false;
  linkToGo: any;
  field: any;
  bankname: any;
  bankHolderName: any;
  bankaccount: any;
  temp: any;
  sendLink: any = { d_id: '', p_id: '', join_link: 'http', admin_link: 'http' };
  temp2: any;
  booking: any = { status: 0, d_id: '', p_id: '', type: '', time: '', date: '', o_status: '', o_proof: '' }

  getData = new FormGroup({
    date: new FormControl(''),
    time: new FormControl(''),
    o_status: new FormControl('')
  })

  payment1 = new FormGroup({
    proof: new FormControl(''),
  })

  mSlot:any=[];
  aSlot:any=[];
  eSlot:any=[];

  allbook:any=[];
  ngOnInit(): void {
    
    this.field = this.activatedRoute.snapshot.url[0].path;
    this.linkToGo = "/" + this.route.url.split("/")[1] + "/" + this.route.url.split("/")[2] + "/" + this.route.url.split("/")[3] + "/" + this.activatedRoute.snapshot.url[0].path + "/" + this.activatedRoute.snapshot.url[1].path + "/" + this.activatedRoute.snapshot.url[2].path;

    this.api.getBooking().subscribe(
      res => {
        for (let j in res){
          if (this.activatedRoute.snapshot.url[2].path == res[j].d_id.id){
            this.allbook.push(res[j].time%1==0?res[j].time:res[j].time+0.2);
           }
        }
      }
    )

    this.api.showSpecificDoctor(this.activatedRoute.snapshot.url[2].path).subscribe(
      res => {
        for (let i=9 ; i<=12; i+=.5){      
          if ((i%1==0 || i-.5==Math.floor(i)) && (i>=res.m_start && i<=(res.m_end+.2)) && this.allbook.indexOf(i) == -1 ){
            this.mSlot.push({"value":i%1==0? (i):(i-0.2) , "Show": i%1==0? (i+":00 Am"): ((i-0.5)+":30 Am")})
            
          }
        }
        for (let i=2 ; i<=5; i+=.5){      
          if ((i%1==0 || i-.5==Math.floor(i)) && (i>=res.a_start && i<=(res.a_end+.2)) && this.allbook.indexOf(i) == -1 ){
            this.aSlot.push({"value":i%1==0? (i):(i-0.2) , "Show": i%1==0? (i+":00 Pm"): ((i-0.5)+":30 pm")})
            
          }
        }
        for (let i=6 ; i<=8; i+=.5){      
          if ((i%1==0 || i-.5==Math.floor(i)) && (i>=res.e_start && i<=(res.e_end+.2)) && this.allbook.indexOf(i) == -1 ){
            this.eSlot.push({"value":i%1==0? (i):(i-0.2) , "Show": i%1==0? (i+":00 Pm"): ((i-0.5)+":30 Pm")})
            
          }
        }
        this.sendLink.d_id = res;
        this.booking.d_id = res;
        if (res.account_detail.toString().indexOf("$")) {
          let re = res.account_detail.split("$");
          this.bankname = re[0];
          this.bankHolderName = re[1];
          this.bankaccount = re[2];
        }
      }
    )

    this.api.getAllPatient().subscribe(
      res => {
        for (let j in res) {
          if (localStorage.getItem("currentPatientUserId") == res[j].id) {
            this.sendLink.p_id = res[j];
            this.booking.p_id = res[j];
          }
        }
      }
    )

    
  }

  checkdiv() {
    console.log(this.mSlot.value);
    const get_id = document.getElementById('listGroupRadios2') as HTMLInputElement;
    if (get_id!.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }

  checkdiv1() {
    const get_id = document.getElementById('listGroupRadios4') as HTMLInputElement;
    if (get_id!.checked == true) {
      this.check1 = true;
      this.booking.type = "Online";
    }
    else {
      this.check1 = false;
      this.booking.type = "Physical";
    }
  }

  checkpayment() {
    this.booking.time = this.getData.value.time;
    this.booking.date = this.getData.value.date.toString().split(" 00")[0];
    this.booking.o_status = 0;
    this.booking.o_proof = this.payment1.value.proof;
    if (this.booking.type=="Physical"){
      this.booking.o_proof = 0;  
    }
    this.api.postBooking(this.booking).subscribe(
      res => {
        if (res.null == "This field may not be null."){
          alert("Please Fill All Details");
        }else
          alert("Booking Done Successfully");
      },
      error =>{
        if (error.ok==false){
          alert("Please Fill All Details");
        }
      }
    )
  }
}
