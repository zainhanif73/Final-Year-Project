import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageSource = new Subject<string>();
  teacherMessage$ = this._teacherMessageSource.asObservable(); 
  
  constructor() { }

  sendMessage(message: string){
    this._teacherMessageSource.next(message);
  }

}
