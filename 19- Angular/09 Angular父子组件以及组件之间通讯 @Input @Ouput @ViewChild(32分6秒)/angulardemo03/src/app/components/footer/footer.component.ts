import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @Output()  private  outer=new EventEmitter();

  public msg="我是子组件footer的一个msg";


  constructor() { }

  ngOnInit() {
  }

  run(){

    alert('我是子组件的run方法');
  }


  sendParent(){

    // alert('11');


    this.outer.emit('我是子组件的数据');
  }



}
