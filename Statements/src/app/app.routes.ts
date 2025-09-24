import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Publisher } from './publisher/publisher';

export const routes: Routes = [
    {
        path:"",
        component:Products
    },
    {
        path:"books",
        component:Publisher
    }

];
