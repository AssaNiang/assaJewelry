import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly API_URL = "http://localhost:9000"
  readonly ENDPOINT_REGISTER = "/api/auth/signup"

  constructor(private httpClient:HttpClient) { }
  postRegister(user: UserRegister){
    return this.httpClient.post(this.API_URL+this.ENDPOINT_REGISTER, user).subscribe(s => console.log(s))
  }

}
