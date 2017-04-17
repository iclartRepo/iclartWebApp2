import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../accountServices/authService.service';
@Injectable()

export class AuthAccessGuard implements CanActivate {
    isAuthenticated: boolean = false;
    constructor(private router: Router, private authService: AuthService) {
      
    }

   canActivate() {
        return this.authService.isAuthenticated()
            .map((response) => {
                if (response == true) {
                    return true;
                }
                else
                {
                    this.router.navigate([""]);
                    return false;
                }
           }); 
        
    }
}