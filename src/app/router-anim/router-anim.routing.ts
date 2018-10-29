import { AnimRouteComponent } from './anim-route/anim-route.component';
import { MultiplexingComponent } from './multiplexing/multiplexing.component';
import { ComplexOrderComponent } from './complex-order/complex-order.component';
import { TransferComponent } from './transfer/transfer.component';
import { AbstractComponent } from './abstract/abstract.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'abstract',
    component: AbstractComponent
  },
  {
    path: 'transfer',
    component: TransferComponent
  },
  {
    path: 'complex-order',
    component: ComplexOrderComponent,
    data: { animation: 'FilterPage' }
  },
  {
    path: 'multiplexing',
    component: MultiplexingComponent,
    data: { animation: 'multiplexingPage' }
  },
  {
    path: 'anim-route',
    component: AnimRouteComponent,
    data: { animation: 'animRoutePage' }
  }
];

export const RouterAnimRoutes = RouterModule.forChild(routes);
