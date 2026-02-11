import { Component,inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup,FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login-component',
  imports: [ButtonModule,DividerModule,InputTextModule, ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {

  private router = inject(Router);
  private authService = inject(Auth);

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

register(){
  this.router.navigate(['/register']);
}
onSubmit(){
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
  }
  const {email, password}=this.loginForm.value;

  this.authService.login(email!,password!).subscribe({
    next:()=>{
      this.router.navigate(['/home']);
    },
    error:(err)=>{
      alert(err.error?.message || 'Login failed');
    }
  })
}


}
