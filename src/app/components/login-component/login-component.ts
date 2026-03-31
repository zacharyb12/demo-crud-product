import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit{


  isLogged = signal(false)
  formGroup : FormGroup

  // injection du authService
  private authService = inject(AuthService)
  private formBuilder = inject(FormBuilder)

  constructor(){
    this.formGroup = this.formBuilder.group({
      email : ["" , Validators.required],
      password : ["",Validators.required]
    })
  }
  ngOnInit(): void {
    this.isLogged = this.authService.isLogged
  }
  login(){
    if(this.formGroup.valid)
    {
      const email = this.formGroup.value["email"];
      const password = this.formGroup.value["password"];
      this.authService.login(email,password);
    }
  }

  logout(){
    this.authService.logout()
  }
}
