import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } 
from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  email = '';
  mypassword : any ;
 
  constructor(private fb:FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }
  onSubmitMyform()
  {
    if(this.loginForm.valid) {
      alert('Successfully logedin');
      this.router.navigateByUrl('account');
    }
  }
}
