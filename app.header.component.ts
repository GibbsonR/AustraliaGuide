import { Component, EventEmitter, Output, Input, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

import { LocalityListService } from '../../../service/search/location.list.service';

import { MessageService } from '../../../service/search/message.service';
import { RestaurantSearchModel } from 'src/app/shared/models/restaurant.search.modal';
import { Locality } from 'src/app/shared/models/locality.model';
import { RestaurantModule } from '../restaurant.module';
import { GET_CITIES_AROUND_Results } from 'src/app/shared/models/GET_CITIES_AROUND_Results';
import { forEach } from '@angular/router/src/utils/collection';
import { RestaurantListService } from 'src/app/service/search/restaurant.list.service';
import { GET_RESTAURANTS_AROUND_Results } from 'src/app/shared/models/GET_RESTAURANTS_AROUND_Results';

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.scss']
})
export class AppHeaderComponent implements OnInit{
  title = 'Restaurant Reservation';
  searchstring: string = "";
  selectedLocalities : number[];
  minDistance :number=0;
  maxDistance :number=25;
  IsKeyInOptionSelected:boolean=false;
  CurrentMenu:number = 1;
  CurrentMenuString:string = "FIRST MENU";
  localityList :GET_CITIES_AROUND_Results[]=[];


  //finalFiltorText:string="a";
  selectedRange : string = "1";
  selectedRangePrev : string="1";
  message :RestaurantSearchModel;
  searchstringAdded:string ="";
  navigateStack : any=[];
  bIsChanged:boolean[];
  latitude = -12.4634;
  longitude =130.8456;
  restaurantSearchModel:RestaurantSearchModel;
  //previousrestaurantSearchModel:RestaurantSearchModel = null;
  public restaurantlist: GET_RESTAURANTS_AROUND_Results[]
  constructor(public localityListService: LocalityListService,public restaurantListService:RestaurantListService,public messageService : MessageService)
  {
    this.localityList = localityListService.newFiltoredList(restaurantListService.getModel())
    this.restaurantSearchModel = this.DeepCopy(restaurantListService.getModel())
    this.selectedLocalities =[];
    this.bIsChanged=[];
    this.navigateStack.push(this.CurrentMenuString)
    this.bIsChanged.push(true);
  } 
  //Select Range In Distance
  FirstMenu_Goto_Second_Or_ThirdMenu()
  {
    this.bIsChanged =[];
    this.navigateStack = [];
    this.navigateStack.push(this.CurrentMenuString);
    if(this.selectedRange === "4")
    {
      this.CurrentMenuString = "SECOND MENU"
      this.CurrentMenu = 2;
      this.IsKeyInOptionSelected = true;
    }
    else
    {
      this.IsKeyInOptionSelected = false;
      this.CurrentMenuString = "THIRD MENU"
      this.CurrentMenu = 3
    }
    this.createModel();
  }

  //From Second Menu Range  4 KeyIn Input 
  
  SecondMenu_BackTo_FirstMenu()
  {
    this.CurrentMenu = 1;
    this.IsKeyInOptionSelected = false;
    if(this.navigateStack.length == 1)
    {
      this.CurrentMenuString = <string>this.navigateStack.pop();
    }
    
  }
  //Or second Menu. Range 4 Key In Input
  SecondMenu_Goto_ForthMenu()
  {
    this.CurrentMenu = 3;
    this.navigateStack.push(this.CurrentMenuString);
    this.CurrentMenuString = "THIRD MENU"
    this.createModel();

  }
  //Range - 1-3
  ThirdMenu_Back_To_FirstMenu(){
    if(this.navigateStack.length == 1)
    {
      this.CurrentMenu = 1;
      this.CurrentMenuString = <string>this.navigateStack.pop();
    }
    else
    {
      if(this.navigateStack.length == 2)
      {
        this.CurrentMenu = 2;
        this.CurrentMenuString = <string>this.navigateStack.pop();
          
      }
    }
  }
  ThirdMenu_Goto_ForthMenu()
  {
    this.CurrentMenu = 4;
    this.navigateStack.push(this.CurrentMenuString);
    this.CurrentMenuString = "FOURTH MENU";
    this.createModel();
  }
  ForthMenu_BackTo_Third_Or_Second(){
    if(this.navigateStack.length === 2)
    {
      this.CurrentMenu = 3;
      this.CurrentMenuString = <string>this.navigateStack.pop(); 
    }
    else
    {
      if(this.navigateStack.length >= 3)
      {
        this.CurrentMenu = 3;
        this.CurrentMenuString = <string>this.navigateStack.pop(); 
      }
      
    }
  }
  Search(){
    this.bIsChanged.push(true);
    //this.sendMessage();
    this.restaurantListService.newFiltoredList(this.restaurantSearchModel);
  }
  onSearchChange(searchValue : string ) {  
    this.bIsChanged = [];
    this.bIsChanged.push(true);
    //this.sendMessage();
  }
  sendMessage(){
    this.restaurantSearchModel = this.DeepCopy(this.restaurantListService.getModel())
    this.restaurantSearchModel.searchstring = this.searchstring
    this.restaurantSearchModel.selectedLocalities = this.localityListService.getSelectedLocalities( this.selectedLocalities)
    this.restaurantSearchModel.minDistance = this.minDistance;
    this.restaurantSearchModel.maxDistance = this.maxDistance;
    this.restaurantSearchModel.Latitude = this.latitude;
    this.restaurantSearchModel.Longitude = this.longitude
    this.restaurantSearchModel.LocalityId = this.selectedLocalities == null?0:this.selectedLocalities[0];
      //0,
      //1,
      //10,
      //this.searchstring = ""
      this.restaurantSearchModel.currentPage = 1;
      this.restaurantSearchModel.noOfItemsPerPage = 1;
      this.restaurantSearchModel.noOfItemsPerPage = 10;
      this.restaurantSearchModel.direction = "";
/*
    this.restaurantSearchModel = this.DeepCopy(restaurantListService.getModel())
      this.searchstring,
      this.localityListService.getSelectedLocalities( this.selectedLocalities),
      this.minDistance,
      this.maxDistance, 
      this.latitude,
      this.longitude,
      this.selectedLocalities == null?0:this.selectedLocalities[0],
      0,
      1,
      10,
      ""
    );
    */
    //this.messageService.sendMessage(this.restaurantSearchModel);
    //this.localityListService.getALocalityByDistance(this.minDistance, this.maxDistance);    

  }

  createModel()
  {
    if(this.selectedRange === "1")
    {
      this.minDistance=0;
      this.maxDistance=5;
      this.selectedRangePrev = this.selectedRange;
    }
    if(this.selectedRange === "2")
    {
      this.minDistance=0;
      this.maxDistance=20;
      this.selectedRangePrev = this.selectedRange;
    }
    if(this.selectedRange === "3")
    {
      this.minDistance=21;
      this.maxDistance=100;
      this.selectedRangePrev = this.selectedRange;
    }
    //this.sendMessage();
    this.bIsChanged.push(true);
  }
 

  ngOnInit(){
      interval(1000).subscribe
      ( (  ) => 
        {
          
          //alert("11")
          if((this.selectedLocalities != null && this.restaurantSearchModel.selectedLocalities != null && 
            this.selectedLocalities.length != this.restaurantSearchModel.selectedLocalities.length) || 
            this.bIsChanged.length>0 || 
            this.restaurantSearchModel.maxDistance != this.maxDistance || 
            this.restaurantSearchModel.minDistance != this.minDistance)
          { 
            //alert("ggggggg")
            let bIsLocalitySelected:boolean=false;
            if(
              this.restaurantSearchModel.maxDistance != this.maxDistance || 
              this.restaurantSearchModel.minDistance != this.minDistance)
            {
              bIsLocalitySelected = true;
            }
            //alert("jjjjjjjj")
            this.restaurantSearchModel = this.DeepCopy(this.restaurantListService.getModel())
            this.restaurantSearchModel.searchstring = this.searchstring
            this.restaurantSearchModel.selectedLocalities = this.localityListService.getSelectedLocalities( this.selectedLocalities)
            this.restaurantSearchModel.minDistance = this.minDistance;
            this.restaurantSearchModel.maxDistance = this.maxDistance;
            this.restaurantSearchModel.currentPage = 1;
            //this.restaurantSearchModel.Latitude = this.latitude;
            //this.restaurantSearchModel.Longitude = this.longitude
            this.restaurantSearchModel.LocalityId = this.selectedLocalities == null?0:this.selectedLocalities[0];
            this.restaurantListService.getModel().searchstring = this.searchstring
            this.restaurantListService.getModel().selectedLocalities = this.localityListService.getSelectedLocalities( this.selectedLocalities)
            this.restaurantListService.getModel().minDistance = this.minDistance;
            this.restaurantListService.getModel().maxDistance = this.maxDistance;
            this.restaurantListService.getModel().currentPage = 1;
            //this.restaurantSearchModel.Latitude = this.latitude;
            //this.restaurantSearchModel.Longitude = this.longitude
            this.restaurantListService.getModel().LocalityId = this.selectedLocalities == null?0:this.selectedLocalities[0];

            if(bIsLocalitySelected )
            {
              //alert("######################################")
              this.localityList = this.localityListService.newFiltoredList(this.restaurantListService.getModel());
    
            }
            this.messageService.sendMessage(this.restaurantListService.getModel());
            //this.localityListService.newFiltoredList(this.restaurantListService.getModel());
            //this.localityListService.getALocalityByDistance(this.minDistance, this.maxDistance);    
            this.bIsChanged.pop();
          }   
         

          
        } 

      )

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

    

}
