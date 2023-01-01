import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, docData, collection, doc, setDoc, deleteDoc, addDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Contact } from './contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore: Firestore) { }

  getContacts(): Observable<Contact[]> {
    const contactsRef = collection(this.firestore, 'contact')
    return collectionData(contactsRef, { idField: 'id' }) as Observable<Contact[]>;
  }

  getContact(id: string | null): Observable<Contact> {
    const contactsRef = doc(this.firestore, `contact/${id}`)
    return docData(contactsRef, { idField: 'id' }) as Observable<Contact>;
  }

  addContact(contact: any) {
    const contactsRef = collection(this.firestore, 'contact');
    return addDoc(contactsRef, contact);
  }

  updateContact(contact: Contact, id: string) {
    const contactsRef = doc(this.firestore, `contact/${id}`);
    const newContact = {
      ...contact
    }
    return updateDoc(contactsRef, newContact);
  }

  deleteContact(id: string) {
    const contactsRef = doc(this.firestore, `contact/${id}`)
    return deleteDoc(contactsRef);
  }

}
