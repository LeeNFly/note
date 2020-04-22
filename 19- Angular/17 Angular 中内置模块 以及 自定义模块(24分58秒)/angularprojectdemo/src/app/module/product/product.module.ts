import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { PlistComponent } from './components/plist/plist.component';
import { CartComponent } from './components/cart/cart.component';
import { PinfoComponent } from './components/pinfo/pinfo.component';

@NgModule({
  declarations: [ProductComponent, PlistComponent, CartComponent, PinfoComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductComponent]
})
export class ProductModule { }
