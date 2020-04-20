import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../services/request.service';


import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit() {
      //1、同步方法

      let data=this.request.getData();

      console.log(data);



      //2、callback获取异步数据

      this.request.getCallbackData((data)=>{

        console.log(data);

      });

      //3、promise获取异步数据

      var promiseData=this.request.getPromiseData();

      promiseData.then((data)=>{

        console.log(data);
      })



      //4、rxjs获取异步方法里面的数据


      // var rxjsData=this.request.getRxjsData();
      // rxjsData.subscribe((data)=>{
      //     console.log(data);
      // })



      //5、过一秒以后撤回刚才的操作


      var streem=this.request.getRxjsData();

      var d=streem.subscribe((data)=>{
          console.log(data);
      })


      setTimeout(()=>{

        d.unsubscribe();  /*取消订阅*/

      },1000)

      



      //6、promise 执行多次（没有这个能力）


      var intervalData=this.request.getPromiseIntervalData();

      intervalData.then((data)=>{

         console.log(data);
      })


      //7、rxjs执行多次

      // var streemInterval=this.request.getRxjsIntervalData();

      // streemInterval.subscribe((data)=>{
      //     console.log(data);
      // })



      //8、用工具方法对返回的数据进行处理



      /*
        var streemNum=this.request.getRxjsIntervalNum();
        streemNum.pipe(
          filter((value)=>{

              if(value%2==0){
                return true;
              }
          })
        )      
        .subscribe((data)=>{
            console.log(data);
        })
      */


      /*
           var streemNum=this.request.getRxjsIntervalNum();
            streemNum.pipe(
              map((value)=>{

                return value*value;
              })
            )      
            .subscribe((data)=>{
                console.log(data);
            })
            


      */
      



     var streemNum=this.request.getRxjsIntervalNum();
     streemNum.pipe(
       filter((value)=>{

          if(value%2==0){
            return true;
          }
      }),
       map((value)=>{

         return value*value;
       })
     )      
     .subscribe((data)=>{
         console.log(data);
     })
     









  }

}
