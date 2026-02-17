import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { RegisterComponent } from './components/register-component/register-component';
import { HomeComponent } from './components/home-component/home-component';
import { PostsComponent } from './components/posts-component/posts-component';
import { CreatePost } from './components/create-post/create-post';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },

  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [authGuard]
  },

  {
    path: 'create-post',
    component: CreatePost,
    canActivate: [authGuard]
  },

  
  { path: '**', redirectTo: 'home' }
];
