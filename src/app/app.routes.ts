import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path:'inscription',
        component:RegistrationComponent
    },
    {
        path:'connexion',
        component:LoginComponent
    }
  
];
