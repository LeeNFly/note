import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonService } from './services/common.service';

import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';


@NgModule({

  /*user模块里面的组件*/
  declarations: [ProfileComponent, AddressComponent, OrderComponent, UserComponent], 
  
  exports:[UserComponent,AddressComponent],  /*暴露组件 让其他模块里面可以使用暴露的组件*/

  providers:[CommonService],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
