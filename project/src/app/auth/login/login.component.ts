import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(public authService: AuthService, public router: Router) {
   
  }

  
  login() {
    
    this.authService.login().subscribe(() => {
   
      if (this.authService.isLoggedIn) {
        
        const redirectUrl = '/SiteEngineer/orderlist';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/