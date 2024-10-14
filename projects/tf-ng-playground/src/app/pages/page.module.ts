import { NgModule } from "@angular/core";
import { NavbarPlaygroundComponent } from "./navbar-playground/navbar-playground.component";
import { KendogridPlaygroundComponent } from "./kendogrid-playground/kendogrid-playground.component";
import { BaseGridPagePlaygroundComponent } from "./base-grid-page-playground/base-grid-page-playground.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        NavbarPlaygroundComponent,
        KendogridPlaygroundComponent,
        BaseGridPagePlaygroundComponent,
    ],
    exports: [
        NavbarPlaygroundComponent,
        KendogridPlaygroundComponent,
        BaseGridPagePlaygroundComponent
    ],
})
export class PageModule { }