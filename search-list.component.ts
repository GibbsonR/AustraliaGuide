import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, interval } from 'rxjs';

import { RestaurantListService } from '../../../service/search/restaurant.list.service';
import { MessageService } from '../../../service/search/message.service';
//import { HttpClient } from '@angular/common/http';
import { GET_RESTAURANTS_AROUND_Results } from 'src/app/shared/models/GET_RESTAURANTS_AROUND_Results';
import { RestaurantSearchModel } from 'src/app/shared/models/restaurant.search.modal';

import { RestauarantViewItemPayLoad } from 'src/app/shared/models/restaurant.view.model';
import { RestaurantViewItemService } from 'src/app/service/search/view.item.service';
import { RestaurantModule } from '../restaurant.module';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit, OnDestroy{
  restaurantItem:GET_RESTAURANTS_AROUND_Results;


  public bIsViewItem:boolean;
  public viewItemPL :RestauarantViewItemPayLoad;
  public restaurantlist: GET_RESTAURANTS_AROUND_Results[]
  public subscription: Subscription;
  public MyMessage :RestaurantSearchModel;
  constructor
      (
          private messageService: MessageService,
          public searchResultService : RestaurantListService,
          public restaurantViewItemService:RestaurantViewItemService
          //private http : HttpClient
      ) {
        this.bIsViewItem =false;

        //this.restaurantlist = searchResultService.getSearchResult()
        this.restaurantlist = this.searchResultService.newFiltoredList(this.searchResultService.getModel());
        //alert('&&&&&&&&&&&&&&&&&')  
        this.MyMessage = this.DeepCopy(searchResultService.getModel());  
  }
  cmd1(itemId :number )
  {
    //alert(itemId);
  }
  cmd2(itemId :number )
  {
    //alert(itemId);
  }
  cmd3(itemId :number)
  {
    //alert("hello");
    this.searchResultService.setItem(itemId);
    this.bIsViewItem = true;
  }

  ngOnInit(){

    interval(1000).subscribe
    ( () => 
      {
        
          this.subscription = this.messageService.getMessage().subscribe(message => {
          if (message) {
            //alert(this.MyMessage.currentPage + " : -------------------------------------------------- : " + message.currentPage)
            if((this.MyMessage.currentPage != message.currentPage) || 
            (this.MyMessage.searchstring != message.searchstring) || 
            (this.MyMessage.maxDistance != message.maxDistance) || 
            (this.MyMessage.minDistance != message.minDistance) || 
            (this.MyMessage.LocalityId != message.LocalityId))
            {
              //alert("here ---------------------->")
              //alert("[ " + message.currentPage + " : ---------------- : " + message.searchResultService + " ]" );
              this.MyMessage  = this.DeepCopy(this.searchResultService.getModel());
              this.MyMessage.searchstring = message.searchstring;
              this.MyMessage.currentPage = message.currentPage;
              this.MyMessage.maxDistance = message.maxDistance;
              this.MyMessage.minDistance = message.minDistance;
              this.MyMessage.LocalityId = message.LocalityId;
              this.searchResultService.getModel().searchstring = message.searchstring;
              this.searchResultService.getModel().currentPage = message.currentPage;
              this.searchResultService.getModel().maxDistance = message.maxDistance;
              this.searchResultService.getModel().minDistance = message.minDistance;
              this.searchResultService.getModel().LocalityId = message.LocalityId;
              if(this.MyMessage.LocalityId != null && message.LocalityId != null && this.MyMessage.LocalityId != message.LocalityId)
              {
                this.MyMessage.maxDistance = 5;
                this.MyMessage.minDistance = 0;
                this.searchResultService.getModel().maxDistance = 5;
                this.searchResultService.getModel().minDistance = 0;
                    
              }
              this.restaurantlist = this.searchResultService.newFiltoredList(this.searchResultService.getModel());
              this.messageService.sendMessage(this.searchResultService.getModel())
            }
            
            

            //this.messageService.sendMessage(message);
            //this.bIsMessageChanged = [];
            //this.bIsMessageChanged.push(true);
          } else {
            // clear messages when empty message received
            //this.restaurantSearchModel = null;
          }
        })
        if(this.bIsViewItem)
        {
          this.viewItemPL = new RestauarantViewItemPayLoad(true);
          this.restaurantViewItemService.sendMessage(this.viewItemPL);
          this.bIsViewItem=false;
        }   
       

        
      }
    );
  }

  DeepCopy( copyFrom:RestaurantSearchModel ){
    return new RestaurantSearchModel(
      copyFrom.searchstring,
      copyFrom.selectedLocalities,
      copyFrom.minDistance,
      copyFrom.maxDistance, 
      copyFrom.Latitude,
      copyFrom.Longitude,
      copyFrom.LocalityId,
      copyFrom.currentPage,
      copyFrom.noOfItemsPerPage,
      copyFrom.noOfItemsPerPage,
      copyFrom.direction
              )


  }

  ngOnDestroy() {
    
  } 
}
