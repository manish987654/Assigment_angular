import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from '../../pipeline/pipes.module';
import { WithTabPage } from './with-tab.page';
import { Tab1 } from './tab1/tab1';
import { Tab2 } from './tab2/tab2';

export const routes: Routes = [
  {
      path: '',
      component: WithTabPage
  }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        CommonModule,
        PipesModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        WithTabPage,

        Tab1,
        Tab2
    ]
})
export class WithTabPageModule { }