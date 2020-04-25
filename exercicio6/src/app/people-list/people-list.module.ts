import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeopleListPage } from './people-list.page';
import { PeopleDetailPage } from './../people-detail/people-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PeopleListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeopleListPage, PeopleDetailPage],
  entryComponents: [
    PeopleDetailPage
  ]
})
export class PeopleListPageModule {}
