import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  stars = Array(5);

  constructor() { }

  ngOnInit() {
  }

}
