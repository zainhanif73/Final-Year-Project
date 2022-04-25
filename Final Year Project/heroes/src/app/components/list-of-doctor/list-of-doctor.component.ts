import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/api/services.service';


@Component({
  selector: 'app-list-of-doctor',
  templateUrl: './list-of-doctor.component.html',
  styleUrls: ['./list-of-doctor.component.css']
})
export class ListOfDoctorComponent implements OnInit {

  location!: any;
  skill = "";
  longText!: any;
  number = 0;
  items:any = []

  constructor(private activatedRoute: ActivatedRoute, private api: ServicesService , private router:Router) {

    this.location = activatedRoute.snapshot.url[1].path;
    this.skill = activatedRoute.snapshot.url[2].path;
    let temp = this.skill.toLowerCase()

    
    this.showDoctors();

    if (temp == "dermatologist")
      this.longText = `Also known as Skin Specialist ,ماہرامراض جلد ,Skin Doctor and Mahir-e-imraz-e-jild`;

    else if (temp == "gynecologist")
      this.longText = "Also known as Female Health Specialist ,ماہرِ اَمراضِ نِسواں ,OB-GYN, Women Health Specialist and Mahir-e-imraz-e-niswan"

    else if (temp == "ent-specialist")
      this.longText = "Also known as Ear Nose and Throat Specialist ,ماہرامراض ناک کان گلا ,Ear Specialist, Nose Specialist, Throat Specialist, Ear Doctor, Nose Doctor, Throat Doctor and Mahir-e-Imraz-e-Nak,kaan gala                    "
    
    else if (temp =="pediatrician")
      this.longText = "Also known as Child Specialist ,ماہرِ امراضِ اطفال and Mahir-e-imraz-e-itfal"
      
    else if (temp == "orthopedic")
      this.longText = "Also known as Orthopedician ,ہڈیوں کا سرجن ,Bone Specialist, Bone Doctor and Hadiyun ka surgeon"

    else if (temp == "general_physician")
      this.longText = "Also known as General Practitioner ,ماہرِ طب ,Physician, GP and Mahir-e-tib"

    else if (temp == "neurologist")
      this.longText = "Also known as Neuro Physician ,ماہر علم الاعصاب نیورولوجسٹ ,Brain Specialist, Brain Doctor and Mahir-e-ilm-ul asaab"
      
    else if (temp == "urologist")
      this.longText = "Also known as Urinary Tract Specialist ,ماہِر علم البول ,Bladder Specialist"
    
    else if (temp == "eye_specialist")
      this.longText = "Also known as Ophthalmologist ,ماہرامراض چشم ,Eye Doctor and Mahir-e-Imraz-e-chasham"

    else if (temp == "psychiatrist")
      this.longText = "Also known as Mental Health Specialist ,ماہرامراض نفسیات and Mahir-e-imraz-e- nafsiyat"
    
    else if (temp == "dentist")
      this.longText = "Also known as Dental Surgeon ,دندان ساز and dandan saz"

    else if (temp == "gastroenterologist")
      this.longText = "Also known as Digestion Specialist ,ماہرامراض معده ,Gall Bladder Specialist, Pancreas Specialist and Mahir-e-Imraz-e-Maida"
    
    else if (temp == "dardiologist")
      this.longText = "Also known as Heart Specialist ,ماہرامراض قلب ,Heart Doctor and Mahir-e-Imraz-e- Qalb "
    
    else if (temp == "pulmonologist")
      this.longText = "Also known as Chest Specialist , ماہر امراض سینه ,Lungs Specialist, Chest Doctor, Lungs Doctor and Mahir-e-imraz-e-sina"
    
    else if (temp == "diabetologist")
      this.longText = "Also known as Diabetes Specialist ,ماہرِ ذیابیطس ,Diabetes Doctor and Mahir-e-ziabetus      "
    
    else if (temp == "gastroenterologist")
      this.longText = "Also known as Digestion Specialist ,ماہرامراض معده ,Gall Bladder Specialist, Pancreas Specialist and Mahir-e-Imraz-e-Maida"

    else if (temp == "general_surgeon")
      this.longText = "Also known as Surgeon ,جنرل سرجن"

    else if (temp == "nephrologist")
      this.longText = "Also known as Kidney Specialist ,ماہرامراض گردہ ,Kidney Doctor and Mahir-e-imraz-e-gurda"

    else if (temp == "homeopath")
      this.longText = "Also known as Neuro Physician ,ماہر علم الاعصاب نیورولوجسٹ ,Brain Specialist, Brain Doctor and Mahir-e-ilm-ul asaab"
      
    else if (temp == "psycologist")
      this.longText = "Also known as Psychotherapist ,ماہر نفسیات and Mahir-nafsiat"
    
    else if (temp == "cosmetologist")
      this.longText = "Also known as Ophthalmologist ,ماہرامراض چشم ,Eye Doctor and Mahir-e-Imraz-e-chasham"

    else if (temp == "nutritionist")
      this.longText = "Also known as Weight Loss Counselor , ماہرغذا ,Food Specialist and Mahir-e-ghiza"

    else if (temp == "physiotherapist")
      this.longText = "Also known as Physical Therapist ,فزیوتھیراپسٹ"

    else if (temp == "plastic_surgeon")
      this.longText = "Also known as Cosmetic Surgeon , پلاسٹک سرجن"
    
    else if (temp == "family_physician")
      this.longText = "Also known as Family Medicine Specialist"
  
  }

  showDoctors() {
    console.log(this.activatedRoute.snapshot.url[1].path);
    let t = this.router.url.toString();
    
    if (t.includes("hospital")){
      this.api.showDoctors().subscribe(res => {
        for (let j of res){
          console.log(this.activatedRoute.snapshot.url[0].path == j.h_id.id && j.major_id.name.toLowerCase() == this.skill.toLowerCase())
          if (this.activatedRoute.snapshot.url[0].path == j.h_id.id && j.major_id.name.toLowerCase() == this.skill.toLowerCase() && j.status){
            this.items.push({ 'name': j.name, 'id':j.id , 'Degree': j.education, 'About': j.about, 'title': j.major_id.name });
            this.number = this.number+1;
          }
        }
      })
    }
    else{
      this.api.showDoctors().subscribe(res => {
        for (let j of res){
          console.log(j);
          if (j.major_id.name.toLowerCase() == this.skill.toLowerCase() && j.status && j.city_id.name.toLowerCase()==this.activatedRoute.snapshot.url[1].path.toLowerCase()){
            this.items.push({ 'name': j.name, 'id':j.id , 'Degree': j.education, 'About': j.about, 'title': j.major_id.name });
            this.number = this.number+1;
          }
        }
      })
    }
  }

  ngOnInit(): void {}

}
