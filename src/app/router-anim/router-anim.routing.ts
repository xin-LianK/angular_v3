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
  }
];

export const RouterAnimRoutes = RouterModule.forChild(routes);
