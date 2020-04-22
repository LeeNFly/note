import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



  public msg="我是子组件footer的一个msg";


  constructor() { }

  ngOnInit() {
  }

  run(){

    alert('我是子组件的run方法');
  }

}
