import { Injectable } from '@angular/core';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }


  axiosGet(api){


     return new Promise((resolve,reject)=>{
        axios.get(api)
          .then(function (response) {
            // handle success     
            resolve(response)
          });
    })

  }


  
}
