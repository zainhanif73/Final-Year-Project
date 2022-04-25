import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction/interaction.service';

@Component({
  selector: 'app-admin-dashboard-labs-add',
  templateUrl: './admin-dashboard-labs-add.component.html',
  styleUrls: ['./admin-dashboard-labs-add.component.css']
})
export class AdminDashboardLabsAddComponent implements OnInit {

  constructor(private _interactinService:InteractionService) { }

  ngOnInit(): void {
  }
  
  logout(){
    localStorage.clear();
    this._interactinService.sendMessage("Logout");
  }

}
