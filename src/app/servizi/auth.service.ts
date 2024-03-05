import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  userName = "lorenzo.biagi2@gmail.com";
  passWord = "ciao1234";
  

  constructor(private router:Router) { 
    const storedCredentials = localStorage.getItem('userCredentials');
    if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials);
      if (credentials.username === this.userName && credentials.password === this.passWord) {
        this.isLoggedIn = true;
      }
    }
  }
  


login(username:string, password:string):boolean{
if(username=== this.userName && password === this.passWord){
  this.isLoggedIn = true;
  localStorage.setItem('userCredentials', JSON.stringify({ username, password }));
  return true;
}
this.router.navigate(['/']);
return false;
}
  isAuthenticated(){
    return this.isLoggedIn;
  }
}
