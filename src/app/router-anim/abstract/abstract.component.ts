import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

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
      // transition('open=>closed', [
      //   animate('1s')
      // ]),
      // transition('closed=>open', [
      //   animate('0.5s')
      // ]),
      transition('*=>*', [
        animate('1s', keyframes([
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))
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
  startAnim(event: AnimationEvent) {
    console.log(1);
  }
  endAnim(event: AnimationEvent) {
    console.log(2);
  }
  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    // console.warn(`Animation Trigger: ${event.triggerName}`);

    // // phaseName is start or done
    // console.warn(`Phase: ${event.phaseName}`);

    // // in our example, totalTime is 1000 or 1 second
    // console.warn(`Total time: ${event.totalTime}`);

    // // in our example, fromState is either open or closed
    // console.warn(`From: ${event.fromState}`);

    // // in our example, toState either open or closed
    // console.warn(`To: ${event.toState}`);

    // // the HTML element itself, the button in this case
    // console.warn(`Element: ${event.element}`);
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
