import { Http } from '@angular/http';

import { Injectable  } from '@angular/core';

import "rxjs/add/operator/map";

@Injectable()

export class galleryService {

    constructor(private http:Http){}

    getAll(size:number, current:number){

        return this.http.get("https://pixabay.com/api/?key=7011715-97a496b7c17af80da78493f0b&per_page="+size+"&page="+current)
        .map(response => response.json());

    }

    getByKeyword(keyword:string,size:number, current:number){
    
        return this.http.get("https://pixabay.com/api/?key=7011715-97a496b7c17af80da78493f0b&q="+keyword+"&per_page="+size+"&page="+current)
        .map(response => response.json());
    }

}