import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  imports: [ButtonModule,DividerModule,InputTextModule, ReactiveFormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.scss',
})
export class RegisterComponent {
 registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
}
