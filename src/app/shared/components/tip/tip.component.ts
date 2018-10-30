import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { TipService, TipConfig } from '../../services/tip.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translateY(0)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class TipComponent implements OnInit, OnDestroy {
  config: TipConfig;
  configChanged: Subscription;
  constructor(private tipsService: TipService) { }
  ngOnInit() {
    this.configChanged = this.tipsService.config.subscribe((c: TipConfig) => {
      this.config = c;
      if (this.config) {
        let timeout = 3000;
        if (this.config.timeout && this.config.timeout > 0) {
          timeout = c.timeout;
        }
        setTimeout(() => {
          this.config = null;
        }, timeout);
      }
    })
  }
  ngOnDestroy(): void {
    this.configChanged.unsubscribe();
  }
}
