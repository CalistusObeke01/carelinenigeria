import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-readmore',
  template: `
  <div>
      <div [class.collapsed]="isCollapsed">
          <ng-content></ng-content>
      </div>
      <span>
          <cn-readmore-child [threeDash]='isCollapsed' [hidden]= '!isCollapsed'></cn-readmore-child>
      </span>
  </div>

  <a mdbBtn color="success" mdbWavesEffect (click)="toggleRead()">{{ isCollapsed ? more : less }}</a>
  `,
  styles: [`
    .collapsed {
        height: 260px;
        overflow: hidden;
    }
    `
  ]
})
export class ReadmoreComponent implements OnInit {
  isCollapsed = true;
  more = 'Read More';
  less = 'Read Less';

  toggleRead() {
      this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit() {
  }
}
