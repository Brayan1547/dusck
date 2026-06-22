import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { Register } from './features/register/register';
import { Checkout } from './features/checkout/checkout';
import { PageNotFoud } from './features/page-not-foud/page-not-foud';
import { ProductDetalls } from './features/product-detalls/product-detalls';
import { CollectionNino } from './features/collection-nino/collection-nino';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'checkout', component: Checkout},
    {path: '404', component : PageNotFoud},
    {path: 'product/detalls', component: ProductDetalls},
    {path: 'coleccion-nino', component: CollectionNino},
    {path: ' ', redirectTo: 'Home', pathMatch: 'full'},
    {path: '**', redirectTo: '404', pathMatch: 'full'}
    
];
