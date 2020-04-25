import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactListPage } from './contact-list.page';
import { ContactEditPage } from '../contact-edit/contact-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ContactListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactListPage, ContactEditPage],
  entryComponents: [
    ContactEditPage
  ]
})
export class ContactListPageModule {}
