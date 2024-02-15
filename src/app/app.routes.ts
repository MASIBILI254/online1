import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {'path': 'home','title':'home', component:HomeComponent},
    {'path':'about','title':'about',component:AboutComponent},
    {'path':'services','title':'services',component:ServicesComponent}
];
