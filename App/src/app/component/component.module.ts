import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomImageComponent } from './custom-image/custom-image.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
	imports: [
        CommonModule,
    ],
	declarations: [
        CustomImageComponent,
        TextInputComponent
    ],
	exports: [
        CustomImageComponent,
        TextInputComponent
    ]
})
export class ComponentModule {}
