import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterService } from '../../services/register.service';
import { UserRegister } from '../../interfaces/user.interface';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatSlideToggleModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule, MatIconModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent implements OnInit{
  registrationForm!:FormGroup;
  constructor(private fb:FormBuilder,private registerService: RegisterService){}
  hide = true;
 
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(2)]],
      username:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      phone:['',[Validators.required]]
    })
  }
 
  onSubmit(){
    console.log("hello",this.registrationForm.value);
    const userToRegister = this.registrationForm.value as UserRegister
    this.registerService.postRegister(userToRegister)
  }
}
