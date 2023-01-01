import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactService } from '../contact.service';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
})
export class ListContactComponent {

  contacts$: Observable<any[]>;
 
  constructor(private contactService: ContactService) { 
    this.contacts$ = contactService.getContacts();
    console.log(this.contacts$);
  }

}
