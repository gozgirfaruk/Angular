import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Layouts } from './layouts/layouts';
import { Login } from './login/login';

export const routes: Routes = [
    
    {
        path:"login",
        component:Login
    },
    
    {
        path:"",
        component:Layouts,
        children:[
    {
        path:"about",
        component:About
    },
    {
        path:"contact",
        component:Contact
    },
    {
        path:"home/:id",
        component:Home
    }
        ]
    }
];
