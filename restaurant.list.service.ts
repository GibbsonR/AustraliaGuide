import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Restaurant } from '../../shared/models/restaurant.model';
import { Address } from '../../shared/models/restaurant.address.model';
import { MenuItem } from '../../shared/models/menuitem.model';
import { MealSlotDiscount } from '../../shared/models/menu.slot.discout.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RestaurantSearchModel } from 'src/app/shared/models/restaurant.search.modal';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { GET_RESTAURANTS_AROUND_Results } from 'src/app/shared/models/GET_RESTAURANTS_AROUND_Results';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';
import { RestaurantTest } from '../Test/RestaurantTest';

@Injectable()
export class RestaurantListService {
    recsultChanged = new Subject<Restaurant[]>();
    private restaurantlist: GET_RESTAURANTS_AROUND_Results[]
    private message   : RestaurantSearchModel;
    //private locality : number;
    private strEncode :string;
    //private currentItem : number;
    //private currentPage : number;
    private httpUrlEncodingCodec = new HttpUrlEncodingCodec(); 
    constructor(private http: HttpClient) {
      this.message = new RestaurantSearchModel("",null,0,5,-12.4634,130.8456,0,0,1,10,"");
      //this.http.get(this.getURL()).subscribe( r => {
      //   this.restaurantlist = <GET_RESTAURANTS_AROUND_Results[]>r;
      //},
      //error =>{
      //   console.log(error);
      // }

       //)
      this.restaurantlist = new RestaurantTest().newFiltoredList(this.message);
  



    }
    public setItem(id:number){
      this.message.RestaurantId =id;
    }
    public setLocality(id:number){
      this.message.LocalityId =id;
    }
    public setPage(no:number){
      this.message.currentPage =no;
    }
    public getPage(no:number){
      return this.message.currentPage;
    }
    public getModel(){
      return this.message;
    }
    public setModel( mdl : RestaurantSearchModel){
       this.message = mdl;
    }
    private getURL()
    {
      if(this.message.searchstring == null || this.message.searchstring.trim() == "")
      {
        this.strEncode = "ZZ01XX02YY03";
      }
      if(this.message.selectedLocalities == null || this.message.selectedLocalities[0]== null)
      {
        
      }
      else
      {
        this.message.LocalityId = this.message.selectedLocalities[0].CityId;
      }
      /*
      if(this.message.Latitude == null)
      {
        this.message.Latitude = -37.89;
      }
      if(this.message.Longitude == null)
      {

      }
      */
      return "http://mettechsys.com/webapi/api/restaurant/all/" + this.message.LocalityId.toString() + "/" + this.httpUrlEncodingCodec.encodeValue(this.strEncode) + "/" + this.message.maxDistance.toString() + "/" + this.message.Latitude.toString() + "/" + this.message.Longitude.toString() + "/" + this.message.currentPage.toString() + "/10/"
    }
  
    getSearchResult() {
      if(this.restaurantlist != null){
        return this.restaurantlist = new RestaurantTest().newFiltoredList(this.message);
      }
      else
      {
        return null;
      }
    }
  
    getAResuarant() {
      if(this.restaurantlist != null){
        return this.restaurantlist.filter( r => 
          r.RestaurantId == this.message.RestaurantId)[0];
      }
      else
      {
        return null;
      }
    }
  
    getNumberOfPages(){
      if(this.restaurantlist != null && this.restaurantlist[0] != null){
        return this.restaurantlist[0].NUMBEROFPAGES
      }
      return 0;
    }
    newFiltoredList(searchLoad:RestaurantSearchModel) {
      if(searchLoad != null)
      {
        this.message = searchLoad;
        if(this.recsultChanged != null)
        {
          if(this.restaurantlist != null){
              
              //this.http.get(this.getURL()).subscribe( r => {
              // this.restaurantlist = <GET_RESTAURANTS_AROUND_Results[]>r;
              //},
              //error =>{
              // console.log(error);
              //}
              
              //)
              this.restaurantlist = new RestaurantTest().newFiltoredList(this.message)
              return this.restaurantlist;
            
         }
        else
        {
          return null;
        
        } 
      } 
      else
      {
        return null;
      }
    
    }
  }
  
   
}
  

