import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MyLibComponent } from './my-lib.component';


const routes: Routes = [{path:'', component: MyLibComponent}];
export const routerModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    routerModule
  ],
  exports: [
    MyLibComponent,
  ]
})
export class MyLibModule { }
