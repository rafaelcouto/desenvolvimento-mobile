import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.page.html',
  styleUrls: ['./people-detail.page.scss'],
})
export class PeopleDetailPage implements OnInit {

  private people: object;

  constructor(navParams: NavParams) {
    this.people = navParams.get('people');
  }

  ngOnInit() {
    
  }

}

