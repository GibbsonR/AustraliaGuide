import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from './../../service/search/message.service'
import { Subscription, interval } from 'rxjs';
import { RestaurantSearchModel } from 'src/app/shared/models/restaurant.search.modal';
import { RestaurantListService } from 'src/app/service/search/restaurant.list.service';
import { RestaurantViewItemService } from 'src/app/service/search/view.item.service';
import { RestauarantViewItemPayLoad } from 'src/app/shared/models/restaurant.view.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent   implements OnInit, OnDestroy{
  /*
    RECIEVE THE CHANGES TO THE STRING

  */
  saerchStringValue : string = "Remix";
  messages: string;
  subscription: Subscription;
  itemViewSubscription: Subscription;
  restaurantSearchModel:RestaurantSearchModel = new RestaurantSearchModel("",null,0,5,-12.4634,130.8456,0,0,1,10,"");
  bIsMessageChanged:boolean[];
  bIsItemView:boolean;
  constructor(
    private messageService: MessageService,
    private itemViewService:RestaurantViewItemService,
    ) {
      this.bIsItemView = false;
      this.bIsMessageChanged= [];
      this.bIsMessageChanged.push(true);
       // subscribe to home component messages
  }
  /*
  onSearchValueChanged(headerPayLoad :{searchstringvalue: string})
  {
    
      this.saerchStringValue = headerPayLoad.searchstringvalue;
      this.messageService.clearMessages();
      this.messageService.sendMessage(this.restaurantSearchModel);
  }  
*/
  sendMessage(): void {
    // send message to subscribers via observable subject
    
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
  
  onSearchStringChanged()
  {
    //this.messageService.sendMessage(this.saerchStringValue);    
  }
  ngOnInit(){
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.restaurantSearchModel =  message;
        this.bIsItemView =false;
        //this.messageService.sendMessage(message);
        //this.bIsMessageChanged = [];
        //this.bIsMessageChanged.push(true);
      } else {
        // clear messages when empty message received
        //this.restaurantSearchModel = null;
      }
    });
    this.itemViewSubscription = this.itemViewService.getMessage().subscribe( msg => {
      if(msg)
      {
        this.bIsItemView = (<RestauarantViewItemPayLoad>msg).bIsViewItem;
      }
    })



  }
  ngOnDestroy(){
    if(this.subscription)
    {
      this.subscription.unsubscribe();
    }
    if(this.itemViewSubscription)
    {
      this.itemViewSubscription.unsubscribe()
    }
  }

  

}
