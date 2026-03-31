import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';


@Injectable({
  providedIn: 'root',
})

export class ProductService {

   listProduct  : Product[] = [
    {
      name : "Air max",
      description : "super paire d'air max",
      price : 170.99,
      imageUrl : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_rPXSirycEO5bVMdOZ3kKoGh4z4mrB1zcc3Un9TnbMJQrejBQS-Em5XQlidh4i9ncrdIApygFwRWZX9-n7gFuiYUL3VAQf9oJMsaCNdg8v4wYZ_r_ANp_PBic0_DNKqbnFeVqLw&usqp=CAc"
    },
    {
      name : "Panda dunk",
      description : "Paire de panda dunk de collection",
      price : 550.30,
      imageUrl : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQU6cvVD4bmzYUT_0Phh6RaXPvYNzEaqvvOuL7nR-D-RWg4vsV6pet98Oywi_KRtTLy9n6ElGnXYLXNsSc07bRB1-dGhqjy3xd_IAB4ktd_bUAm32q1CoOgyR-4r1e0KkQpH23oIg&usqp=CAc"
    }
  ];

addProduct(newProduct : Product)
{
  this.listProduct.push(newProduct);
}

removeProduct(name : string)
{
  this.listProduct = this.listProduct.filter(p => p.name !== name);
}

getProducts()
{
  return this.listProduct;
}

getByName(name : string)
{
  const product = this.listProduct.find(p => p.name == name);
  return product;
}

updateProduct(updatedProduct : Product)
{
  const index = this.listProduct.findIndex(p => p.name == updatedProduct.name);

  if(index != -1)
  {
    this.listProduct[index] = updatedProduct;
  }
}

}
