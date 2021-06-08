import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } 
from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountForm : any;
  email = '';
  name : any ;
  accountNumber : any;
  routingNumber : any;
  ssn : any;


  constructor(private fbb:FormBuilder, private router: Router) {
    this.accountForm = this.fbb.group({
      email:['', [Validators.required, Validators.email]],
      name:['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      routingNumber: ['', [Validators.required]],
      ssn: ['', [Validators.required]],
      gender: ['male', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  onsubmitAccountFrom()
  {
    if(this.accountForm.valid) {
      alert('Successfully logedin');
      this.router.navigateByUrl('home');
    }
  }

}
