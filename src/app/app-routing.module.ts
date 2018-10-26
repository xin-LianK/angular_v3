import { AppComponent } from './app.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PageoneComponent } from './pageone/pageone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
