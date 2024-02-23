import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly API_URL = "http://localhost:9000"
  readonly ENDPOINT_LOGIN = "/api/auth/signin"

  constructor(private httpClient:HttpClient) { }
  postLogin(user: UserLogin){
    return this.httpClient.post(this.API_URL+this.ENDPOINT_LOGIN, user).subscribe(s => console.log(s))
  }


}
