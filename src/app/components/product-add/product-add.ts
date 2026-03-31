import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/productService/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
// Declaration d'une instance de type formulaire
formGroup : FormGroup;

// Injection du formBuilder ( constructeur de formulaire)
private formBuilder = inject(FormBuilder);
// injection du service pour accéder au méthodes lié a la gestion des products
private productService = inject(ProductService);
// Injection du router pour permettre la navigation/redirection
private router = inject(Router);

// Creation d'un formulaire
constructor(){

  // à l'interieur du constructeur on crée le formulaire

  this.formGroup = this.formBuilder.group({

    name : ['',Validators.required],
    description : ['' , Validators.required],
    price : [0 , Validators.required],
    image : ['']

  });

}


// methode déclenché lors de la soumission du formulaire
onSubmit()
{
  if(this.formGroup.valid)
  {
    
    const newProduct : Product = {
      name : this.formGroup.value["name"],
      description : this.formGroup.value["description"],
      price : this.formGroup.value["price"],
      imageUrl : this.formGroup.value["image"]
    }

    // appel du service 
    this.productService.addProduct(newProduct);

    // this.router.navigate(["/details/",1])
    this.router.navigateByUrl("/product-list");

  }else{

    alert("Formulaire invalide !")

  }
}

}
