import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cn-readmore-child',
  template: `
    <span>{{ threeDash1 }}</span>
  `,
  styles: [`
    span {
        font-size: 30px;
        display: block;
    }`
  ]
})
export class ReadmoreChildComponent implements OnInit {
  @Input() threeDash;
  threeDashSymbol = '...';

  set threeDash1(value: string) {
      this.threeDashSymbol = (value && value.trim());
  }

  get threeDash1(): string {
      return this.threeDashSymbol;
  }

  constructor() { }

  ngOnInit() {
  }

}


