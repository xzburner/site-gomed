import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Security } from '../utils/secutiry.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){
    const token = Security.getToken();
    if (!token) {
      this.router.navigate(['/']);
      return false;
    }
    else {
      let user = Security.getUser();
      if (user.perfil != "Administrador") {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
  }

  sair(): void {
    Security.clear();
  }

}
