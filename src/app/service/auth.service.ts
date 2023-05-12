import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  hasToken(): boolean {
    return !!localStorage.getItem('user-connected');
  }
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  constructor(private route: Router) {}
  SignupUser(userData: any) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  }

  SigninUser(userData: any) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let user = users.find(
      (x: { email: any; password: any }) =>
        x.email == userData.email && x.password == userData.password
    );
    if (user == undefined) {
    } else {
      localStorage.setItem('user-connected', JSON.stringify(user));
        this.isLoginSubject.next(true);
      this.route.navigateByUrl('/formulaire');
    }
  }

  SignoutUser() {
    localStorage.removeItem('user-connected');
    this.isLoginSubject.next(false);
    this.route.navigate(['/login']);
  }
}
