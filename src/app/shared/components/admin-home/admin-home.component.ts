import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/items/services/item.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  itemsData = [];

  isUpdated = false;
  

  


  constructor(private itemService:ItemService, private route: ActivatedRoute){
    
  }
  
  ngOnInit(): void {
    this.itemService.getItems()
      .subscribe( (res: any) => {  
        console.log(res);
        // if(res && res.id){
        //   this.isSaved = true;
        // }
         this.itemsData = res;
      });
  }

}
