import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  

   // Step 0: Have the HTML form with necessary inputs first. It is already present. 
  
  // Step 1: Have the HTML form tag equivalent in TS 
  addItemForm = new FormGroup({
    // Step 2: Have the input equivalents in TS 
    name: new FormControl('', Validators.required), // Step 5: Let's setup validations 
    cost: new FormControl('', Validators.required),
    foodtype: new FormControl('', Validators.required),
    imageurl: new FormControl('', Validators.required),
    // id: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    // foodtype: new FormControl('', [Validators.required, Validators.email]), //adding email validation also
  });
  // Refer HTML for step 3

  isSaved = false;

   constructor(private itemService: ItemService) {
      
   }
  

  ngOnInit(): void {
  }

  handleAddItem(): void {
    console.log('Submitted');
    console.log(this.addItemForm); 

   
    this.itemService.createItem(this.addItemForm.value)
      .subscribe( (res: any) => {  
        console.log(res);
        if(res ){
          this.isSaved = true;
        }
      });
  }

}