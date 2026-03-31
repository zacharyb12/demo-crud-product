import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/authService/auth-service';
import { LoginComponent } from "../login-component/login-component";

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, LoginComponent],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})

export class Navigation implements OnInit {
  
  // injecter le authService
  private authService = inject(AuthService);

  // signaux de la navbar
  isLoggedNav = signal(false)
  isAdminNav = signal(false);
  
  ngOnInit(): void {
    // ici on connecte les signaux du service avec ceux de la navbar
    this.isLoggedNav = this.authService.isLogged;
    this.isAdminNav = this.authService.isAdmin;
  }

}
