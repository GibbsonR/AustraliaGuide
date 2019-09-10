import { Component, OnInit } from '@angular/core';
import { RestaurantSearchModel } from 'src/app/shared/models/restaurant.search.modal';
import { RestaurantListService } from 'src/app/service/search/restaurant.list.service';
import { MessageService } from 'src/app/service/search/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  subscription: Subscription;
  bIsLocalitySelected :boolean;
  currentpage :number;
  numberOfPage:number;
  ii :number;
  restaurantSearchModel:RestaurantSearchModel;
  //restaurantSearchModel:RestaurantSearchModel = null;
  constructor(public searchResultService:RestaurantListService, public messageService : MessageService)
  {
    this.restaurantSearchModel = searchResultService.getModel();
    //this.restaurantSearchModel = this.searchResultService.getModel();
    this.bIsLocalitySelected=false;
  } 

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
  
  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => {
        if (message) {
            
            //this.numberOfPage = 0;
            //alert("G --> : " + this.searchResultService.getNumberOfPages())
            //this.restaurantSearchModel = message;
            if(this.numberOfPage != this.searchResultService.getNumberOfPages())
            {
              this.numberOfPage = this.searchResultService.getNumberOfPages();
              this.createRange(this.numberOfPage);
              //alert(this.numberOfPage);
            }
            
            //alert(this.bIsLocalitySelected ); 
            
        } 
        else {
          // clear messages when empty message received
     
        }                  
    }
    );
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  } 
  cmdPageSelected(page :number )
  {
    //this.searchResultService.setPage(page);
    //this.searchResultService.newFiltoredList(this.searchResultService.getModel());

    this.restaurantSearchModel = this.searchResultService.getModel();
    this.restaurantSearchModel.currentPage = page;
    //this.searchResultService.newFiltoredList(this.restaurantSearchModel);
    this.messageService.sendMessage(this.restaurantSearchModel);
    //alert(page);

  }
}
