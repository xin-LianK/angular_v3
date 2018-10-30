import { TipService } from './../../shared/services/tip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplexing',
  templateUrl: './multiplexing.component.html',
  styleUrls: ['./multiplexing.component.scss']
})
export class MultiplexingComponent implements OnInit {

  constructor(private tipService: TipService) { }

  ngOnInit() {
  }
  showTip() {
    this.tipService.set({ content: 'This is a tips!', timeout: 2000 });
  }
}
