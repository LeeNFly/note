import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//双休数据绑定必须引入
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { RequestService } from './services/request.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
