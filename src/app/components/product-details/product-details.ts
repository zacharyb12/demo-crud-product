import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/productService/product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/authService/auth-service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  
  product! : Product | undefined;
  isAdmin = signal(false)

  private productService = inject(ProductService)
  private authService = inject(AuthService)

  // injection du activated route qui donne accès au paramètres de la route
  private activRoute = inject(ActivatedRoute)
  private router = inject(Router)
  
  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin
    const name = this.activRoute.snapshot.params['name'];
    this.product = this.productService.getByName(name);
  }
  
  navigateToUpdate(name : string)
  {
    this.router.navigate(["/product-update/",name])
  }
}
