import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../../services/login.service';
import { UserLogin } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private loginService: LoginService){}
  hide = true;
 
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
     
    })
  }

  onSubmit(){
    console.log("hello",this.loginForm.value);
    const userToRegister = this.loginForm.value as UserLogin
    this.loginService.postLogin(userToRegister)
  }
}
