import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Locality } from '../../shared/models/locality.model';
import { GET_CITIES_AROUND_Results } from 'src/app/shared/models/GET_CITIES_AROUND_Results';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { RestaurantSearchModel } from 'src/app/shared/models/restaurant.search.modal';
import { CityTest } from '../Test/CityTest';

@Injectable()
export class LocalityListService {
    recsultChanged = new Subject<GET_CITIES_AROUND_Results[]>();
    private Localitylist: GET_CITIES_AROUND_Results[];
    private message   : RestaurantSearchModel; 
    private httpUrlEncodingCodec = new HttpUrlEncodingCodec(); 
    private strEncode :string;
    private locality : number;
   
    constructor(private http:HttpClient) {
        this.message = new RestaurantSearchModel("",null,0,5,-12.4634,130.8456,0,0,1,10,"");
       // this.http.get(this.getURL()).subscribe( r => {
       //    this.Localitylist = <GET_CITIES_AROUND_Results[]>r;
       //  }),
       //  error => {
       //    console.log(error);
       // }
      
      this.Localitylist = new CityTest().all(this.message); 

    }

    private getURL()
    {
      //alert("city http request");
      if(this.message.searchstring.trim() == "")
      {
        this.strEncode = "ZZ01XX02YY03";
      }
      if(this.message.selectedLocalities == null || this.message.selectedLocalities[0]== null)
      {
        this.locality = 0;
        alert(this.locality);
      }
      else
      {
        this.locality = this.message.selectedLocalities[0].CityId;
      }

       
      return "http://mettechsys.com/webapi/api/city/cities/" + this.locality.toString() + "/" + this.httpUrlEncodingCodec.encodeValue(this.strEncode) + "/" + this.message.maxDistance.toString() + "/" + this.message.Latitude.toString() + "/" + this.message.Longitude.toString() + "/";
    }

    getSelectedLocalities(selected:number[])
    {
      if(this.Localitylist != null )
      {
          return this.Localitylist.filter(r => selected.includes(r.CityId) )
      }
      else
      {
         return null;
      }
    }
    getDefaultLocality(selected:number[])
    {
      if(this.Localitylist != null && selected.length>0)
      {
          return this.Localitylist.filter(r => selected.includes(r.CityId) )[0].CityId;
      }
      else
      {
         return null;
      }
    }
    getSearchResult() {
        if(this.message.searchstring == "")
        {
            return this.Localitylist;
        }
        else
        {
            
            return this.Localitylist.filter( r => r.CityName.toLocaleLowerCase().includes(this.message.searchstring.toLocaleLowerCase())).slice();
        }
      
    }
 
    getALocalityByDistance( mindistance: number, maxdistance: number) {
        this.message.minDistance = mindistance;
        this.message.maxDistance = maxdistance;
        if(this.recsultChanged != null)
        {
          this.recsultChanged.next(this.Localitylist);
            
        }
      }
 

    getALocalityById(Id: number) {
        return this.Localitylist.filter( r => r.CityId == Id);
    }
    getALocalityByName(name: string) {
        return this.Localitylist.filter( r => r.CityName == name);
    }
  
   
    newFiltoredList(searchvalue :RestaurantSearchModel) {
        this.message = searchvalue;
      //if(this.recsultChanged != null)
      //{
       //
       
       //this.http.get(this.getURL()).subscribe( r => {
       //this.Localitylist = <GET_CITIES_AROUND_Results[]>r;
       //  }),
       // error => {
       //      console.log(error);
       //} 
         this.Localitylist = new CityTest().all(this.message); 
        return this.Localitylist;
        //return this.recsultChanged.next(this.Localitylist.slice());
  
      //}
    }
  
   
  }
  

