import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterAnimComponent } from './router-anim.component';
import { AbstractComponent } from './abstract/abstract.component';
import { RouterAnimRoutes } from './router-anim.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterAnimRoutes
  ],
  declarations: [
    RouterAnimComponent,
    AbstractComponent,
  ]
})
export class RouterAnimModule { }
