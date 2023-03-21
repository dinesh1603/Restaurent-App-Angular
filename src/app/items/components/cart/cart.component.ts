import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItemsList: any = [];

  cartCount: number = 0;

  isEmpty: boolean = true;

  cartTotal : number = 0;
  
  // jsonData: any = JSON.parse(this.cartItemsList);

  jsData: any ;



  // const {ids, cost} = {ids: cartItemsList.map(a => a.id), cost: cartItemsList.map(a => a.cost)}
    

  constructor(private cartDataService: CartDataService){}
  
  ngOnInit(): void {

    


    this.cartDataService.latestCartItems.subscribe((cartItems: any[])=>{
      console.log(cartItems);
      this.cartCount =cartItems.length;
      this.cartItemsList = cartItems;

      
      if(this.cartCount>0){
        this.isEmpty = false;
      }


      this.cartTotal = this.cartItemsList.map((item:any)=>item.cost).reduce((acc: any,cur: any)=>acc+cur)

      console.log("cart total: ", this.cartTotal);

      
    })

    
  
  }

  handlePlaceOrder():void{
    this.cartItemsList = [];

  }
  
  
  
}
