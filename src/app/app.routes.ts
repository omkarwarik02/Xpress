import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { RegisterComponent } from './components/register-component/register-component';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
    {path: "login", component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"home",component:HomeComponent}
];
