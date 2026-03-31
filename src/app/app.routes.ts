import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { ListProduct } from './components/list-product/list-product';
import { ProductDetails } from './components/product-details/product-details';
import { ProductAdd } from './components/product-add/product-add';
import { ProductUpdate } from './components/product-update/product-update';
import { adminGuard } from './guard/admin/admin-guard';
import { loggedGuard } from './guard/logged/logged-guard';

export const routes: Routes = [
    { path : "" , component: Homepage },

    { path : "product-list" , component:ListProduct, canActivate : [loggedGuard]},
    { path : "product-details/:name" , component:ProductDetails , canActivate : [loggedGuard]},

    { path : "product-add" , component:ProductAdd , canActivate : [adminGuard]},
    { path : "product-update/:name" , component:ProductUpdate , canActivate : [adminGuard] }
];
