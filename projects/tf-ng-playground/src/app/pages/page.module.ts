import { NgModule } from "@angular/core";
import { NavbarPlaygroundComponent } from "./navbar-playground/navbar-playground.component";

@NgModule({
    imports: [
        NavbarPlaygroundComponent,
    ],
    exports: [
        NavbarPlaygroundComponent,
    ],
})
export class PageModule { }