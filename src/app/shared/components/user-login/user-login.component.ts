import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../users/services/user.service';
// import { AuthService } from '../../services/auth.service';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  usersData : any = [];

  // constructor(private authService: AuthService, private router: Router, 
    // private activateRoute: ActivatedRoute) { }

    constructor(private userService: UserService, private http: HttpClient, private router: Router, 
       private activateRoute: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((res: any)=>{
      console.log(res);
      this.usersData = res;
      console.log(this.usersData);

      
    })


  }

  handleLogin(form: any): void{
    console.log("submitted");
    console.log(form.value);// submittable form data 
    console.log(form.value.password);

    const name = form.value.name;
    const password = form.value.password;

    // console.log(name, ":",password);

    // const response = this.http.post('http://localhost:5000/login/', form);
    // console.log("response", response);

    const foundObject = this.usersData.find((obj: any) => obj.username === name);
    // console.log(foundObject.username); 

    if(foundObject.username == name && foundObject.password == password && foundObject.role == 'user'){
      console.log("loginsuccess");
      this.router.navigateByUrl(this.activateRoute.snapshot.queryParams['redirectTo']);
      // this.router.navigateByUrl('/');
    }else{
      console.log("failed");
    }

    if(foundObject.username == 'admin'  && foundObject.role == 'admin'){
      console.log("loginsuccess");
      // this.router.navigateByUrl(this.activateRoute.snapshot.queryParams['redirectTo']);
      this.router.navigateByUrl('/admin/items');
      
    }else{
      console.log("failed");
    }

    // for (let user in this.usersData){
    //   let eachUserName = user['username'];
    //   let eachUserPassword = user.password;

    //   if(eachUserName === name && eachUserPassword === password){
    //     console.log("user found");
    //     break;
    //   }else{
    //     console.log("user not found");
    //     break;
    //   }

      
    // }
    // if(name === this.usersData.map((u:any)=>{
    //   u.username    }) && password === this.usersData.map((u:any)=>{ u.password})){
    //     console.log(name);
    //   }else{
    //     console.log("Error");
    //   }

    // let dbUserName  = this.usersData.map((u:any)=>u.username === name);
    // let dbpasswords = this.usersData.map((u:any)=>u.password);

    // this.name = this.cartItemsList.map((item:any)=>item.cost).reduce((acc: any,cur: any)=>acc+cur)

    // console.log(dbUserName, dbpasswords);


    // this.authService.login(form.value)
    //   .subscribe( (res: any) => {
    //     console.log(res);
    //     if(res && res.token){
    //       // save the token in sessionStorage/
    //       // this can be saved in cookies also.
    //       sessionStorage.setItem("authToken", res.token);
    //       // post login redirect to the return URL 
    //       this.router.navigateByUrl(this.activateRoute.snapshot.queryParams['redirectTo']);
    //     }
        
    //   });
  }





}
