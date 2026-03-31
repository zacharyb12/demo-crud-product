import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/productService/product-service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/authService/auth-service';

@Component({
  selector: 'app-list-product',
  imports: [RouterLink],
  templateUrl: './list-product.html',
  styleUrl: './list-product.css',
})

export class ListProduct implements OnInit{

  isAdmin = signal(false);
  listProduct  : Product[] = [];

  private productService = inject(ProductService);
  private authService = inject(AuthService)

  private router = inject(Router);

  ngOnInit(): void {
    this.listProduct = this.productService.getProducts();
    this.isAdmin = this.authService.isAdmin
  }

  navigateToDetails(name : string)
  {
    this.router.navigate(["/product-details/",name]);
  }
  

}
