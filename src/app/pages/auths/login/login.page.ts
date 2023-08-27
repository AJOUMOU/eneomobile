import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email! :string;
 password!:string
  logingState:boolean = false;
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }

login(){
let credentials={
  email:this.email,
  password:this.password
}
this.authService.login(credentials).subscribe((response)=>{
  const token = response.token;
  console.log(token);
  this.router.navigate(['home']);
})


}
}
