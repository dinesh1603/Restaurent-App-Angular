import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  itemsData = [];
  searchKey: string = "";
  public filterCategory :any;

  searchTerm: string = "";

  

  itemsList =
  [
    {
      "name": "Chicken Salad",
      "cost": 345,
      "food_type": "NON-VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426677/foodItems/chicken-salad-16_jegxlf.jpg",
      "id": "2200043ddf818ab-15eb-4d7f-8284-589f24ed3c48",
      "rating": 3.4
    },
    {
      "name": "Onion Salad",
      "cost": 315,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426679/foodItems/onion-salad-17_l2ubfk.jpg",
      "id": "2200043b94dbcf8-5990-4621-b918-7497f842145b",
      "rating": 4.5
    },
    {
      "name": "Okra Salad",
      "cost": 375,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426679/foodItems/okra-salad-18_sjy3yb.jpg",
      "id": "2200043a849feca-aef2-400a-be6e-56b39ee4e638",
      "rating": 4.5
    },
    {
      "name": "Mutton Salad",
      "cost": 335,
      "food_type": "NON-VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426679/foodItems/mutton-salad-19_zp6y65.webp",
      "id": "22000436f585449-4cf2-42ec-866f-c433bd6b88af",
      "rating": 3.4
    },
    {
      "name": "veg Salad",
      "cost": 465,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426680/foodItems/veg-salad-20_qbnong.jpg",
      "id": "22000431d4950c8-c35b-43b5-88da-c41713a57531",
      "rating": 5
    },
    {
      "name": "VEG Quesadilla",
      "cost": 610,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426680/foodItems/veg-quesadilla-21_rlfxqn.jpg",
      "id": "2200043576f66f8-3ecc-4ba1-ab31-f9e44180cb71",
      "rating": 4.4
    },
    {
      "name": "Masala Dosa",
      "cost": 550,
      "food_type": "NON-VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426679/foodItems/masala-dosa-22_ijgghh.jpg",
      "id": "22000433e6ebc27-549e-4901-a5e5-612d75e00ddd",
      "rating": 4
    },
    {
      "name": "Panner Dosa",
      "cost": 640,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426679/foodItems/panner-dosa-23_yl9zoe.jpg",
      "id": "22000432c7ce9d4-b520-4581-893e-0d7095267215",
      "rating": 4.5
    },
    {
      "name": "Cheese Dosa",
      "cost": 430,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426679/foodItems/masala-dosa-22_ijgghh.jpg",
      "id": "220004319d13fa4-6c43-4d0a-9e56-8455f3ea335c",
      "rating": 4
    },
    {
      "name": "Chicken Tickels",
      "cost": 205,
      "food_type": "NON-VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426678/foodItems/chicken-tickels-25_x736s8.jpg",
      "id": "2200043190d9f1f-8eb2-4166-b58c-5a283a1d710b",
      "rating": 4
    },
    {
      "name": "Kids Steak Taco",
      "cost": 200,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426678/foodItems/kids-steak-taco-26_qz0cgj.jpg",
      "id": "2200043a4e4f6bf-f9dd-4a54-870b-328cf7c82c26",
      "rating": 3.4
    },
    {
      "name": "Chips",
      "cost": 540,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426678/foodItems/chips-27_dqfyz6.jpg",
      "id": "22000432b0af620-aa8c-41d4-85a6-eb6c6ed430da",
      "rating": 3.8
    },
    {
      "name": "Chips and Salsa",
      "cost": 570,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426678/foodItems/chips-and-salsa-28_qwg6jk.jpg",
      "id": "2200043727fda98-8606-459a-a174-1ebc47c23a22",
      "rating": 4.2
    },
    {
      "name": "Chips and Guacamole",
      "cost": 770,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426678/foodItems/chips-and-guacamole-29_ejspzf.jpg",
      "id": "22000438c9ec5db-fdd2-4f59-ae8d-57cf3540bfeb",
      "rating": 4.5
    },
    {
      "name": "Chips and Queso",
      "cost": 770,
      "food_type": "VEG",
      "image_url": "https://res.cloudinary.com/dh4d9iuty/image/upload/v1661426678/foodItems/chips-and-queso-30_apmqpv.jpg",
      "id": "220004344145abb-079d-46c4-93bd-7add15db2101",
      "rating": 4.2
    }

  ]


  constructor(private itemService:ItemService, private cartDataService: CartDataService){
    
  }
  
  ngOnInit(): void {
    this.itemService.getItems()
      .subscribe( (res: any) => {  
        console.log(res);
        // if(res && res.id){
        //   this.isSaved = true;
        // }
         this.itemsData = res;
         this.filterCategory = res;
      });

      this.itemService.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
  }

  


  

  handleAddToCart(item: any): void{
    console.log("clicked");
    this.cartDataService.updateCartItems(item);
    // item.target.disabled = true;
    // item.target.style.background = "gray";
  }


  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.itemService.search.next(this.searchTerm);
  }


  filter(category: string){
    // console.log("category", category);
    this.filterCategory = this.itemsData
    .filter((a:any)=>{
      if(a['food_type'] === category || category === ""){
        return a;
      }
    })
  }



}
