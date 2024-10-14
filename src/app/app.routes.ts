import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DashboardComponent } from './pages/products/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "products",
        component: ProductsComponent 
    },
    {
        path: "dashboard",
        component: DashboardComponent
    }
];
