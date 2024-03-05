import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AuthService } from '../../servizi/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password:string = "";

  onSubmit():void{
    if(this.auth.login(this.username, this.password)){
      console.log("login OK");
    }else{
      console.log("login NOT OK")
    }
  }

  constructor(private router:Router, private auth:AuthService){}
  naviga(){
    this.router.navigate(['/tabella1']);
  }

}
