import { GET_CITIES_AROUND_Results } from "./GET_CITIES_AROUND_Results";

export class RestaurantSearchModel {
    constructor(
        public searchstring :string,
        public selectedLocalities :GET_CITIES_AROUND_Results[],
        public minDistance :number,
        public maxDistance :number,
        public Latitude :number,
        public Longitude :number,
        public LocalityId:number,
        public RestaurantId:number,
        public currentPage :number,
        public noOfItemsPerPage:number,
        public direction :string
        ) {

        }
}
  



