import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="py-6 px-4 fixed w-full z-10 backdrop-blur-md">
      <div class="mx-auto max-w-3xl">
      <a [routerLink]="''" class="text-4xl text-slate-600 ">
        <p class="pt-3">
          <mat-icon *ngIf="showBackButton">keyboard_backspace</mat-icon>
          {{ text }}
        </p>
      </a>
      </div>
    </div>
  `
})
export class PageHeaderComponent {
  @Input() text = '';
  @Input() showBackButton = false;
}
