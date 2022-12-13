import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetailsService } from '../login-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  spinner:boolean = false;
  loginObj:any;
  constructor(private router : Router, private login:LoginDetailsService) {
    this.loginObj={
      username:'',
      password:''
    };

   }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.loginObj.username == this.login.username && this.loginObj.password == this.login.password){

      localStorage.setItem('username','deepali')
      this.router.navigateByUrl('dashboard');
    }
    else{
      alert('Invalid username and password!!!');
    }
  }

}
