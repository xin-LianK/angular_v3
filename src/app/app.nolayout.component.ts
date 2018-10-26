import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
    styleUrls: []
})
export class AppNolayoutComponent implements OnInit {
    // 解决直播效果屏中屏问题
    constructor() { }

    ngOnInit() {
    }

}
