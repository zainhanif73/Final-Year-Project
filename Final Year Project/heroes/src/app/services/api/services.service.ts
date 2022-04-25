import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(private http: HttpClient) { }

 //--------------------------------Patient----------------------------------------------------------

  getAdminLogin(){
    return this.http.get<any>("http://127.0.0.1:8000/adminapi");
  }


  //--------------------------------Doctors----------------------------------------------------------
  
  getDoctorLogin(){  
    return this.http.get<any>("http://127.0.0.1:8000/pakistan/doctor/");
  }
  
  showDoctors(){
    return this.http.get<any>("http://127.0.0.1:8000/pakistan/doctor/:str/:str");
  }

  showSpecificDoctor(id:any){
    return this.http.get<any>("http://127.0.0.1:8000/pakistan/doctor/"+id);
  }

  addDoctor(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/pakistan/doctor/" , data);
  }

  deleteDoctor(id:any){
    return this.http.delete<any>("http://127.0.0.1:8000/pakistan/doctor/"+id)
  }

  updateDoctor(data:any , id:any){
    return this.http.patch<any>("http://127.0.0.1:8000/pakistan/doctor/update/"+id , data);
  }
  
  acceptDoctor(data:any , id:any){
    return this.http.patch<any>("http://127.0.0.1:8000/pakistan/doctor/update/"+id , data);
  }


  //--------------------------------HOSPITAL----------------------------------------------------------

  getHospital(){
    return this.http.get<any>("http://127.0.0.1:8000/pakistan/hospital/");
  }

  addHospital(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/pakistan/hospital/" , data);
  }

  updateHospital(id:any , data:any){
    return this.http.put<any>("http://127.0.0.1:8000/pakistan/hospital/"+id, data);
  }
  
  deleteHospital(id:any){
    return this.http.delete<any>("http://127.0.0.1:8000/pakistan/hospital/"+id);
  }


//--------------------------------BOOKED----------------------------------------------------------

  postbooked(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/pakistan/doctor/location/specialization/booking/" , data);
  }

  getbooked(){
    return this.http.get<any>("http://127.0.0.1:8000/pakistan/doctor/location/specialization/booking/")
  }

  updatebooked(data:any , id:any){
    return this.http.put<any>("http://127.0.0.1:8000/pakistan/doctor/location/specialization/booking/"+id +"/", data)
  }

  deletebooked(id:any){
    return this.http.delete<any>("http://127.0.0.1:8000/pakistan/doctor/location/specialization/booking/"+id)
  }


//-------------------------------------PATIENT API------------------------------------------------

  getAllPatient(){
    return this.http.get<any>("http://127.0.0.1:8000/patientapi")
  }

  blockUser(id:any , data:any){
    return this.http.patch<any>("http://127.0.0.1:8000/patientapi/"+id+"/" , data)
  }
  
  updatePateint(id:any, data:any){
    return this.http.patch<any>("http://127.0.0.1:8000/patientapi/"+id+"/" , data)
  }

  addPatient(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/patientapi/" , data)
  }
  

//------------------------------------City API---------------------------------------------------

  get_city_api(id?:any){
    return this.http.get<any>("http://127.0.0.1:8000/cityapi/"+id + "/");
  }
  
  post_city_api(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/cityapi/" , data);
  }

  update_city_api(id:any , data:any){
    return this.http.put<any>("http://127.0.0.1:8000/cityapi/"+ id + "/" , data);
  }
  
  delete_city_api(id:any){
    return this.http.delete<any>("http://127.0.0.1:8000/cityapi/"+ id + "/");
  }
  
  
  //--------------------------------------BLOCKED-------------------------------------------------

  blockDoctor(id:any , data:any){
    return this.http.put<any>("http://127.0.0.1:8000/pakistan/doctor/"+id, data);
  }

  
  //--------------------------------------BOOKING-------------------------------------------------

  postBooking(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/booking/" , data);
  }

  getBooking(){
    return this.http.get<any>("http://127.0.0.1:8000/booking/");
  }
  
  completeBooking(id:any , data:any){
    return this.http.patch<any>("http://127.0.0.1:8000/booking/"+id+"/" , data);
  }

  deleteBooking(id:any){
    return this.http.delete<any>("http://127.0.0.1:8000/booking/"+id+"/");
  }
  
  //--------------------------------------Get Link-------------------------------------------------
  
  getLink(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/getLink/" , data);
  }

  getLinkNow(){
    return this.http.get<any>("http://127.0.0.1:8000/getLink/");
  }
}
