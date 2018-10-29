import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translate(-100%)' }),
        animate(100),
      ]),
      transition('*=>void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('myInsertOrDelete', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
    ]),
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: 0 }))
    ])
  ]
})
export class TransferComponent implements OnInit {
  isShown = false;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.isShown = !this.isShown;
  }

}
