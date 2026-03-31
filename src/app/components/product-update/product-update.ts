import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/productService/product-service';

@Component({
  selector: 'app-product-update',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-update.html',
  styleUrl: './product-update.css',
})
export class ProductUpdate {

// produit qui sert de modèle
product : Product | undefined = undefined;

// objet de type formulaire
formGroup : FormGroup;

  // Injection du router pour la redirection
  private router = inject(Router);

  // injection de l'activatedRoute pour récupérer l'information transmise depuis la route
  private activRoute = inject(ActivatedRoute);

  // injection du productService pour récupérer le produit à modifier
  private productService = inject(ProductService);

  // injection du formBuilder pour la construction du formulaire
  private formBuilder = inject(FormBuilder)

  // recupérer le produit depuis le service vers une instance locale
  constructor()
  {
    // recuperation du name depuis la route
    const name = this.activRoute.snapshot.params["name"];

    // recuperation du produit depuis le service
    this.product = this.productService.getByName(name);

    // construire notre formulaire
    this.formGroup = this.formBuilder.group({

      name : [this.product?.name , Validators.required],

      description : [this.product?.description , Validators.required],

      price : [this.product?.price , Validators.required],

      image : [this.product?.imageUrl ]
    })
  }

  // methode pour soumettre la mise à jour et redirigé l'utilisateur

  onSubmit()
  {
    if(this.formGroup.valid && this.product != undefined)
    {
      this.product.name = this.formGroup.value["name"];
      this.product.description = this.formGroup.value["description"];
      this.product.price = this.formGroup.value["price"];
      this.product.imageUrl = this.formGroup.value["image"];

      // executer l'action depuis le service
      this.productService.updateProduct(this.product);

      // rediriger l'utilisateur
      this.router.navigateByUrl("/product-list");
    }else{

      alert("Formulaire invalide !")

    }
  }

  removeProduct()
  {
    if(this.product !== undefined)
    {
        this.productService.removeProduct(this.product?.name);

        this.router.navigateByUrl("/product-list");
    }
  }
}
