import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//引入HttpClientModule
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';


import { HttpserviceService } from './services/httpservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
