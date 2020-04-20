import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public title:string='我是一个title';
  
  public picUrl='https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png';
  

  public list:any[]=[
    {
      "title":'我是新闻1'
    },
    {
      "title":'我是新闻2'
    },
    {
      "title":'我是新闻3'
    }
  ];


  public flag:boolean=true;


  public orderStatus:number=3;    /* 1表示已经支付   2支付并且确认订单   3、表示已经发货   4表示已经收货   其他、无效*/


  public attr:string='orange';



  public today:any=new Date();
  



  public keywords:string='这是默认值';

  constructor() { 


    console.log(this.today);


  }

  ngOnInit() {

  }
  
  run(){

      alert('这是一个自定义方法')
  }

  getData(){


    alert(this.title);

  }

  setData(){

    this.title='我是一个改变后的title';
  }

  runEvent(event){


    //ionic必须这样写

    let dom:any=event.target;

    dom.style.color="red";

  }

  keyDown(e){

    if(e.keyCode==13){
        console.log('按了一下回车')
    }else{


      //e.target 获取dom对象
      console.log(e.target.value);
    }
  
  }

  keyUp(e){

    if(e.keyCode==13){

        console.log(e.target.value);
        console.log('按了一下回车');
    }  
  }

  changeKeywords(){

    this.keywords='我是改变后的值';
  }

  getKeywords(){

    console.log(this.keywords)
  }
}
