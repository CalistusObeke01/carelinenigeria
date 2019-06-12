import { Component,  HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  optionsSelect: Array<any>;
  address = `Shop B7 Imo plaza tradefair
  complex, Lagos, Nigeria`;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])],
      contactFormSubjects: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
      contactFormCopy: ['']
    });
  }

  onSubmit() {
    console.log(this.contactForm);
    console.log('Saved: ' + JSON.stringify(this.contactForm.value));
    this.contactForm.reset();

    setTimeout(_ => {
      alert('Your message has been sent.');
    }, 1000);
  }

  fetchAddress() {
    return this.address;
  }
}




