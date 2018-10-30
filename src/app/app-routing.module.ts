import { AppComponent } from './app.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PageoneComponent } from './pageone/pageone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: PageoneComponent
      },
      {
        path: 'pageone',
        component: PageoneComponent
      },
      {
        path: 'pagetwo',
        component: PagetwoComponent
      },
      {
        path: 'pagethree',
        component: PagethreeComponent
      },
      {
        path: 'router-anim',
        loadChildren: './router-anim/router-anim.module#RouterAnimModule'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
