import { PageoneComponent } from './../pageone/pageone.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent extends PageoneComponent implements OnInit {

  constructor(
    public router: Router
  ) {
    super(router);
  }

  ngOnInit() {
  }

}
