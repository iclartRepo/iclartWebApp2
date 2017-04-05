import { Component, OnInit } from '@angular/core';
import { AuthService } from '../accountServices/authService.service';
@Component({
    selector: 'web-app',
    templateUrl: 'wwwroot/src/app/app.component.html'
})
export class AppComponent {
    isAuthenticated: boolean;
    errorMessage: string;

    constructor(private _authService: AuthService) {
    }
    
    ngOnInit(): void {
        this._authService.isAuthenticated()
            .subscribe(authenticated => {
                this.isAuthenticated = authenticated;
                if (this.isAuthenticated == true)
                {
                    localStorage.setItem("isAuthenticated", "Authenticated");
                }
                else
                {
                    localStorage.setItem("isAuthenticated", "Unauthorized");
                }
            },
            error => this.errorMessage = <any>error);

    }
}
