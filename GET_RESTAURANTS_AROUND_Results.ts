
import { isThursday } from "date-fns";
import { GET_IMAGES } from "./GET_IMAGES";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class GET_RESTAURANTS_AROUND_Results{
    /**
     *
     */
    
    constructor(RowNum :number,RestaurantId :number,RestaurantName :string,FullAddress :string,Cuisine :string,Latitude :number,Longitude :number,NUMBEROFPAGES :number) {
        this.RowNum = RowNum;
        this.RestaurantId =RestaurantId;
        this.RestaurantName = RestaurantName;
        this.FullAddress = FullAddress;
        this.Cuisine = Cuisine;
        this.NUMBEROFPAGES = NUMBEROFPAGES;
        this.Latitude= Latitude; 
        this.Longitude = Longitude;
    }
    public Cuisine :string;
    public FullAddress :string;
    public Latitude :number;
    public Longitude :number;
    public NUMBEROFPAGES :number;
    public RestaurantId :number;
    public RestaurantName :string;
    public RowNum :number;
    public ImageList : GET_IMAGES;
}
