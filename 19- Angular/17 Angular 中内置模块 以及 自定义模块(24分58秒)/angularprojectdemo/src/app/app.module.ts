import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//angular内置的模块
import { FormsModule } from '@angular/forms';

//angualr内置的模块
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';


//上百个组件  会导致页面加载比较慢  所以要模块化

//引入自定义模块

import { UserModule } from './module/user/user.module';



import { ProductModule } from './module/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
