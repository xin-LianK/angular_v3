import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TipComponent } from './components/tip/tip.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TipService } from './services/tip.service';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    NgZorroAntdModule,
    TipComponent
  ],
  entryComponents: [

  ],
  declarations: [
    NotFoundComponent,
    TipComponent
  ],
  providers: [
    TipService
  ]
})
export class SharedModule { }
