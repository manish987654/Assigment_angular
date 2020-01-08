import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { LowerCasePipe } from "./lowercase.pipe";
import { CapitalizePipe } from "./capitalize.pipe";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
	declarations: [
        CapitalizePipe,
        LowerCasePipe
    ],
	exports: [
        CapitalizePipe,
        LowerCasePipe
    ]
})
export class PipesModule {}
