import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  private currentCartItems: any[] = [
    // {
    //   "name": "Chicken Salad",
    //   "cost": 345,
    //   "food_type": "NON-VEG",
    //   "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426677/foodItems/chicken-salad-16_jegxlf.jpg",
    //   "id": "2200043ddf818ab-15eb-4d7f-8284-589f24ed3c48",
    //   "rating": 3.4
    // },
    // {
    //   "name": "Onion Salad",
    //   "cost": 315,
    //   "food_type": "VEG",
    //   "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426679/foodItems/onion-salad-17_l2ubfk.jpg",
    //   "id": "2200043b94dbcf8-5990-4621-b918-7497f842145b",
    //   "rating": 4.5
    // }
  ]

  private cartItemsList = new BehaviorSubject(this.currentCartItems)

  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable();

  constructor() {
    
   } 

updateCartItems(item: any): void{
  console.log('inside cart data service');
  console.log(item);

  this.latestCartItems.pipe(take(1)).subscribe((value:any)=>{
    console.log(value);
    const newCartList = [...value, item];
    console.log(newCartList);

    this.cartItemsList.next(newCartList)
  })

}

}
