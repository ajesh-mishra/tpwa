import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactComponent } from './list-contact/list-contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ShowContactComponent } from './show-contact/show-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ListContactComponent,
    data: { animation: 'ListContactPage' }
  },
  {
    path: 'new-contact',
    component: NewContactComponent,
    data: { animation: 'NewContactPage' }
  },
  {
    path: 'show-contact/:id',
    component: ShowContactComponent,
    data: { animation: 'ShowContactPage' }
  },
  {
    path: 'edit-contact/:id',
    component: NewContactComponent,
    data: { animation: 'EditContactPage' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
