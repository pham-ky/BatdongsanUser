import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { HttpClientModule } from '@angular/common/http';
import { CusRoutingModule } from './cus-routing.module';



@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CusRoutingModule
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
