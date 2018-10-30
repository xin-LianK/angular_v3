import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: `
    NO UI TO BE FOUND HERE!
  `,
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    public router: Router
  ) { }
  ngOnInit() {
  }
  openPage(routename: string) {
    this.router.navigate([`/${routename}`]);
  }
}
