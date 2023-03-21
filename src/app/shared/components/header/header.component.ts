import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/items/services/cart-data.service';
import { ItemService } from 'src/app/items/services/item.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount: number = 0;
  searchTerm: string = "";


  constructor(private itemService:ItemService, private cartDataService: CartDataService){}
  
  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe((cartItems: any[])=>{
      console.log(cartItems)

      this.cartCount = cartItems.length;
    });
  }

  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.itemService.search.next(this.searchTerm);
  }
}
