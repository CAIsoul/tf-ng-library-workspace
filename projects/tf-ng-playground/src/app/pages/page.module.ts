import { NgModule } from "@angular/core";
import { NavbarPlaygroundComponent } from "./navbar-playground/navbar-playground.component";
import { KendogridPlaygroundComponent } from "./kendogrid-playground/kendogrid-playground.component";

@NgModule({
    imports: [
        NavbarPlaygroundComponent,
        KendogridPlaygroundComponent,
    ],
    exports: [
        NavbarPlaygroundComponent,
        KendogridPlaygroundComponent,
    ],
})
export class PageModule { }