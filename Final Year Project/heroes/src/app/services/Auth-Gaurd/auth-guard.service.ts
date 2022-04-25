import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
      if (localStorage.getItem('currentPatientUser')) {
          return true;
      }
      this.router.navigate(['/patient/login'], { queryParams: { 'returnUrl': state.url }});
      return false;
    
    }
}