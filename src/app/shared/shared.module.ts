import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TipComponent } from './components/tip/tip.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TipService } from './services/tip.service';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    TipComponent,
    ComposeMessageComponent
  ],
  entryComponents: [
    ComposeMessageComponent
  ],
  declarations: [
    NotFoundComponent,
    TipComponent,
    ComposeMessageComponent
  ],
  providers: [
    TipService
  ]
})
export class SharedModule { }
