import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessagesService } from './messages.service';

@Component({
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(private messageService: MessagesService,
              private router: Router) { }


  get messages() {
    return this.messageService.messages;
  }

  close(): void {
    // Close the popup.
  }
}
