import { MealSlotDiscount } from './menu.slot.discout.model';

export class MenuItem {
    constructor(
        public restaurantid : number, 
        public menuid: number,
        public menudesription: string, 
        public menuprice: number,
        public menuslotdiscountlist: MealSlotDiscount[]
        ) {}
}
  