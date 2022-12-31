import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Contact } from '../contact.interface';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  id: string = '';
  contact: any;

  route = inject(ActivatedRoute);
  contactService = inject(ContactService);

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id') || '';
    })
    const contact$ = this.contactService.getContact(this.id);
    contact$.subscribe(res => {
      this.contact = res;
    })
  }

  deleteContact() {
    this.contactService.deleteContact(this.id)
  }

}
