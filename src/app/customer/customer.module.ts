import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
// import { HttpClientModule } from '@angular/common/http';
import { CusRoutingModule } from './cus-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    CustomerComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    CusRoutingModule,
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
