import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

interface AddressTypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {

  addressTypes: AddressTypes[] = [
    { value: 'permanent', viewValue: 'Permanent' },
    { value: 'home', viewValue: 'Home' },
    { value: 'office', viewValue: 'Office' },
  ];

  _fb = inject(FormBuilder);
  contactService = inject(ContactService);
  contactForm: FormGroup;

  constructor() {
    this.contactForm = this._fb.group({
      firstName: ['', Validators.required],
      middleName: ['',],
      lastName: ['', Validators.required],
      phones: this._fb.array([
        this.addPhoneGroup()
      ]),
      emails: this._fb.array([
        this.addEmailGroup()
      ]),
    });
  }

  addPhoneGroup() {
    return this._fb.group({
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  addEmailGroup() {
    return this._fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get firstName() {
    return this.contactForm.get('firstName') as FormArray;
  }

  get lastName() {
    return this.contactForm.get('lastName') as FormArray;
  }

  get phoneArray() {
    return this.contactForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phoneArray.push(this.addPhoneGroup());
  }

  deletePhone(i: number) {
    if (this.phoneArray.length > 1) {
      this.phoneArray.removeAt(i);
    }
  }

  get emailArray() {
    return this.contactForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emailArray.push(this.addEmailGroup());
  }

  deleteEmail(i: number) {
    if (this.emailArray.length > 1) {
      this.emailArray.removeAt(i);
    }
  }

  onSubmit() {
    console.log("contact form was submitted!");

    let contactFormValue = this.contactForm.value;

    let phones: number[] = [];
    contactFormValue.phones.map((ele: { phone: any; }) => phones.push(ele.phone));
    contactFormValue.phones = phones;

    let emails: string[] = [];
    contactFormValue.emails.map((ele: { email: any; }) => emails.push(ele.email));
    contactFormValue.emails = emails;

    console.log(contactFormValue);

    this.contactService.addContact(contactFormValue)
      .then(
        (value: any) => console.info(value),
        (reason: any) => console.error(reason)
      )
  }
}
