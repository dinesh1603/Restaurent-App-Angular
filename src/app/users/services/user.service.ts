import { Injectable } from '@angular/core';
// import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers(): any{
    return this.http.get<any>("http://localhost:5000/users/")
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }));
  }



  createUser(formData: any): any{
    const headers = new HttpHeaders()
    // .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    console.log(formData); // daa from add-item component

   

    return this.http.post("http://localhost:5000/admin/items/add/item", JSON.stringify(formData) , {headers: headers})
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }))
    // .pipe.map((res: any)=>{
    //   console.log(res);
    //   return res;
    // })
    // console.log(formData);
  }



}
