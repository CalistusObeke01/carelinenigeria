import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutWriteUp: string;
  constructor() { }

  ngOnInit() {
  }

  fetchWriteUp() {
    return this.aboutWriteUp = `Care Line, one of the world's leading cosmetics companies, was established in Sydney,
    Australia in 1982. Underlining its credentials are the advanced research  facilities
    and state-of-the-art manufacturing competencies, which have supported Care Line's
    geographic expansion to cover the Far East markets.`;
  }
}
