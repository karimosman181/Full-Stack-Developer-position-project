import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  

  constructor(private route: ActivatedRoute) { }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in


  redirectUrl = this.route.snapshot.url.toString();

  login(): Observable<boolean> {

    return of(true).pipe(
     
      delay(1000),
      tap(val => this.isLoggedIn = true),
    
    );
    
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
