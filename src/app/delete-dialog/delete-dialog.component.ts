import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public toDelete: boolean
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
