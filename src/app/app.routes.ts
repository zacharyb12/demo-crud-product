import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { ListProduct } from './components/list-product/list-product';
import { ProductDetails } from './components/product-details/product-details';
import { ProductAdd } from './components/product-add/product-add';
import { ProductUpdate } from './components/product-update/product-update';

export const routes: Routes = [
    { path : "" , component: Homepage },
    { path : "product-list" , component:ListProduct},
    { path : "product-details/:name" , component:ProductDetails},
    { path : "product-add" , component:ProductAdd},
    { path : "product-update/:name" , component:ProductUpdate},
];
