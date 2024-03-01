import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}
  naviga(){
    this.router.navigate(['/tabella1']);
  }

}
