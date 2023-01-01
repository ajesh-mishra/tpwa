import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ContactService } from '../contact.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
})
export class ShowContactComponent implements OnInit {

  id: string = '';
  contact: Contact | undefined;

  _dialog = inject(MatDialog);
  _router = inject(Router);
  _route = inject(ActivatedRoute);
  _snackBar = inject(MatSnackBar);
  contactService = inject(ContactService);

  ngOnInit() {
    this._route.paramMap.subscribe(param => {
      this.id = param.get('id') || '';
    })
    const contact$ = this.contactService.getContact(this.id);
    contact$.subscribe(res => {
      this.contact = res;
    })
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactService.deleteContact(this.id).then(
          value => {
            this._router.navigate(['']);
            this._snackBar.open('Contact Deleted!', '', {
              duration: 3000
            });
          },
          reason => {
            this._snackBar.open('Encountered Issue', 'Try Again');
          }
        );
      }
    });
  }

  deleteContact() {
    this.openDialog();
  }

}
