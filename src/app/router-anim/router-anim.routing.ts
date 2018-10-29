import { AbstractComponent } from './abstract/abstract.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'abstract',
    component: AbstractComponent
  },
];

export const RouterAnimRoutes = RouterModule.forChild(routes);
