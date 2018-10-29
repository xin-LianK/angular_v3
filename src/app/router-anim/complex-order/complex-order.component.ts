import { Component, HostBinding, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger, state, group } from '@angular/animations';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-complex-order',
  templateUrl: './complex-order.component.html',
  styleUrls: ['./complex-order.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero,form', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    // trigger('flyInOut', [
    //   state('in', style({
    //     width: 120,
    //     transform: 'translateX(0)', opacity: 1
    //   })),
    //   transition('void => *', [
    //     style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
    //     group([
    //       animate('0.3s 0.1s ease', style({
    //         transform: 'translateX(0)',
    //         width: 120
    //       })),
    //       animate('0.3s ease', style({
    //         opacity: 1
    //       }))
    //     ])
    //   ]),
    //   transition('* => void', [
    //     group([
    //       animate('0.3s ease', style({
    //         transform: 'translateX(50px)',
    //         width: 10
    //       })),
    //       animate('0.3s 0.2s ease', style({
    //         opacity: 0
    //       }))
    //     ])
    //   ])
    // ]),
    trigger('filterAnimation', [
      transition(':enter,* => 0,*=>-1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' }))
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query('leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' }))
          ])
        ])
      ])
    ]),
  ]
})
export class ComplexOrderComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  _heroes = [];
  heroTotal = -1;
  get heroes() {
    return this._heroes;
  }

  ngOnInit() {
    this._heroes = HEROES;
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';

    this._heroes = HEROES.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.heroes.length;

    if (this.heroTotal !== newTotal) {
      this.heroTotal = newTotal;
    } else if (!criteria) {
      this.heroTotal = -1;
    }
  }

}
