import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController } from '@ionic/angular';
import { PeopleDetailPage } from '../people-detail/people-detail.page';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.page.html',
  styleUrls: ['./people-list.page.scss'],
})
export class PeopleListPage implements OnInit {

  private peoples = [];

  constructor(private http: HTTP, public modalController: ModalController) { }

  ngOnInit() {
    this.getList();
  }

  getList() {

    let url = "https://swapi.co/api/people/";

    this.http.get(url, {}, {}).then(response => {
      this.peoples = JSON.parse(response.data).results;
    });

  }

  async viewDetail(people) {
    const modal = await this.modalController.create({
      component: PeopleDetailPage,
      componentProps: {people: people}
    });
    return await modal.present();
  }

}
