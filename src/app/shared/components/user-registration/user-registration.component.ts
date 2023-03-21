import { Component } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  // addUserForm = new FormGroup({
  //   // Step 2: Have the input equivalents in TS 
  //   name: new FormControl('', Validators.required), // Step 5: Let's setup validations 
  //   cost: new FormControl('', Validators.required),
  //   foodtype: new FormControl('', Validators.required),
  //   imageurl: new FormControl('', Validators.required),
  //   // id: new FormControl('', Validators.required),
  //   rating: new FormControl('', Validators.required),
  //   // foodtype: new FormControl('', [Validators.required, Validators.email]), //adding email validation also
  // });



  constructor(private userService: UserService){}

  handleLogin(form: any): void{
    console.log("submitted");
    console.log(form.value);

  }
  
}
