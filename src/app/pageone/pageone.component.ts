import { BaseComponent } from './../base/base.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent extends BaseComponent implements OnInit {
  what = {
    name: 'Kat',
    age: 14
  };
  constructor(public router: Router) {
    super(router);
  }

  ngOnInit() {
  }

}
