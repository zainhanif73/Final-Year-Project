import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-admin-dashboard-labs',
  templateUrl: './admin-dashboard-labs.component.html',
  styleUrls: ['./admin-dashboard-labs.component.css']
})
export class AdminDashboardLabsComponent implements OnInit {

  constructor(private _interactinService: InteractionService) { }
  ngOnInit(): void {}

  logout(){
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }  

}
