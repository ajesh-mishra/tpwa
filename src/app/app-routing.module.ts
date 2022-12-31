import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ShowContactComponent } from './show-contact/show-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ListContactComponent
  },
  {
    path: 'new-contact',
    component: NewContactComponent
  },
  {
    path: 'show-contact/:id',
    component: ShowContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
