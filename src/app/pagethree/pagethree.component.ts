import { PageoneComponent } from './../pageone/pageone.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.scss']
})
export class PagethreeComponent extends PageoneComponent implements OnInit {

  constructor(
    public router: Router
  ) {
    super(router);
  }

  ngOnInit() {
  }

}
