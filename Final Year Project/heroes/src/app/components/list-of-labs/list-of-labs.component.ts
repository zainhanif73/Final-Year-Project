import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-labs',
  templateUrl: './list-of-labs.component.html',
  styleUrls: ['./list-of-labs.component.css']
})
export class ListOfLabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  number = 0;
  skill = "DERMATOLOGIST"
  location = "ISLAMABAD"
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


}
