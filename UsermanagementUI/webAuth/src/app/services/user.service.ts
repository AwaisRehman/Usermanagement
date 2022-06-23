import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class UserService { 
  private readonly baseURL:string="https://localhost:7194/api/user/"
  constructor(private httpClient:HttpClient) { }

  login(body:any)
  {
    return this.httpClient.post<ResponseModel>(this.baseURL+"Login",body);
  }

   register(body:any)
  {
    return this.httpClient.post<ResponseModel>(this.baseURL+"RegisterUser",body);
  }


  public getAllUser()
  {
    let token= localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    });
    return this.httpClient.get<ResponseModel>(this.baseURL+"GetAllUser",{headers:headers});
     
  }
}
