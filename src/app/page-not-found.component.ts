import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-page-not-found',
  template: `
    <h2 class="text-center h1-responsive overlay mt-5">Page not found</h2>
  `,
  styles: [
    `h2{
      font-weight: bold;
      color: #1b101f;
      text-transform: uppercase;
      letter-spacing: 0.0625em;
      width: 100%;
      text-shadow: 0 10px 10px rgba()
    }
    .overlay {
      opacity: 0.8;
      background-color: #ccc;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: 1000;
      padding-top: 7em;
    }`
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
