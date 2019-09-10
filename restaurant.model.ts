import { Address } from './restaurant.address.model';
import { MenuItem } from './menuitem.model';
import { Review } from './restaurant.review.model';
import { Facility } from './facility.model';
import { Atmosphere } from './atmosphere.model';
import { PaymentOption } from './paymentopition.model';
import { MealSlotDiscount } from './menu.slot.discout.model';
export class Restaurant {
  //  public atmospherlist:Atmosphere[];
  //  public facilitylist:Facility[];
  //  public paymentoptionlist:PaymentOption[];
  //  public menulist: MenuItem[];
  //  public reviewlist:Review[];
constructor(public restaurantid : number, 
        public restaurantname: string,
        public imagePath: string,
        public description: string,
        public restaurantaddreess: Address,
        public branch: string,
        public distance : number,
        public cid :number
        ) 
        {
        /*   this.menulist = [ new MenuItem(1,1,"Fish",12.30,
            
            [ new MealSlotDiscount(1,1,1,10)],

            )]        
        */
        }
}
  