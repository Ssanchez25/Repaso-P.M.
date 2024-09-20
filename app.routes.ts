import { Routes } from '@angular/router';
import { RegistroUsuComponent } from './pages/registro-usu/registro-usu.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: 'registro-usu',
        component:RegistroUsuComponent,
    },
    {
        path: 'login',
        component:LoginComponent,
    },
    {
        path: 'contacto',
        component:ContactoComponent,
    }
];
