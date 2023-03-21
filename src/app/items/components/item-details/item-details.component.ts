import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDataService } from '../../services/cart-data.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  itemsData : any = [];

  isUpdated = false;
  
  // duplicateUserData;
  dublicateItemsData;

  


  constructor(private itemService:ItemService, private route: ActivatedRoute){
    this.dublicateItemsData =  this.itemsData;
  }
  
  ngOnInit(): void {
    this.itemService.getItemsById(this.route.snapshot.params['id'])
      .subscribe( (res: any) => {  
        console.log(res);
        if(res && res.id){
          this.isUpdated = true;
        }
         this.itemsData = res;
      });
  }

  handleUpdateModalOpen(): void{
    this.dublicateItemsData = {...this.itemsData};
  }

  async handleUpdateForm() {
    console.log(this.dublicateItemsData); // form Data 
    const result: any =  await this.itemService.updateUser(this.dublicateItemsData[0]);
    console.log(result);

    if(result && result.id){
      this.isUpdated = true;
      this.itemsData = result;
    }
  }

  handleDeleteItem(): void{
    this.itemService.deleteItemsById(this.route.snapshot.params['id'])
      .subscribe( (res: any) => {  
        console.log(res);
        if(res && res.id){
          this.isUpdated = true;
        }
         this.itemsData = res;
      });
  }
  

}
