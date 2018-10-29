import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open=>closed', [
        animate('1s')
      ]),
      transition('closed=>open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class AbstractComponent implements OnInit {
  // 禁用所有动画
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  isOpen = true;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
