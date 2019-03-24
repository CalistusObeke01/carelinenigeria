import { Component,  HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ConnectionService } from './connection.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  // disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  // @HostListener('input') oninput() {
  //   if (this.contactForm.valid) {
  //     this.disabledSubmitButton = false;
  //   }
  // }

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
    // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    //   alert('Your message has been sent.');
    //   this.contactForm.reset();
    //   this.disabledSubmitButton = true;
    // }, error => {
    //   console.log('Error', error);
    // });
    console.log(this.contactForm);
    console.log('Saved: ' + JSON.stringify(this.contactForm.value));
    alert('Your message has been sent.');
    this.contactForm.reset();
  }
}




