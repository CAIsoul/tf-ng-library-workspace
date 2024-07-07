import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarPlaygroundComponent } from './pages/navbar-playground/navbar-playground.component';
import { NavigatorComponent } from './pages/navigator/navigator.component';
import { KendogridPlaygroundComponent } from './pages/kendogrid-playground/kendogrid-playground.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: NavigatorComponent },
    // { path: 'about', },
    { path: 'navbar-playground', component: NavbarPlaygroundComponent },
    { path: 'kendogrid-playground', component: KendogridPlaygroundComponent },
    // { path: '**', }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }