import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterAnimComponent } from './router-anim.component';
import { AbstractComponent } from './abstract/abstract.component';
import { RouterAnimRoutes } from './router-anim.routing';
import { TransferComponent } from './transfer/transfer.component';
import { ComplexOrderComponent } from './complex-order/complex-order.component';
import { MultiplexingComponent } from './multiplexing/multiplexing.component';
import { AnimRouteComponent } from './anim-route/anim-route.component';

@NgModule({
  imports: [
    CommonModule,
    RouterAnimRoutes,
    SharedModule
  ],
  declarations: [
    RouterAnimComponent,
    AbstractComponent,
    TransferComponent,
    ComplexOrderComponent,
    MultiplexingComponent,
    AnimRouteComponent
  ]
})
export class RouterAnimModule { }
