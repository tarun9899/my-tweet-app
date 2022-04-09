import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServicesService } from './auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService {

  constructor(private authServicesService: AuthServicesService,
    private router:Router) { }

    ngOnInit(): void {
    }
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authServicesService.isUserLoggedIn()){
       return true;
    }
    this.router.navigate(['login/tweet'])
    return false;
  }
}
