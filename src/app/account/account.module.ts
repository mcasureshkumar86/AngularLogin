import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
