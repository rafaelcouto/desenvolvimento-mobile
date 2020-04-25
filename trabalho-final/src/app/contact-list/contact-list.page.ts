import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { ContactEditPage } from '../contact-edit/contact-edit.page';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {

  private contacts = [];
  private user = {};

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    this.auth.getLoggedUser().then((user) => {

      if (!user) {
        this.navCtrl.navigateRoot('/login');
        return;
      }

      this.user = user;
      this.getAllContacts();

    });

  }

  getAllContacts() {

    this.contacts = [];

    this.api.getAllContacts(this.user['_id']).then(response => {
      this.contacts = JSON.parse(response.data).contacts;
    });

  }

  add() {
     this.openContactModal();
  }

  edit(contact) {
     this.openContactModal({contact: contact});
  }

  async openContactModal(data = {}) {
    const modal = await this.modalCtrl.create({
      component: ContactEditPage,
      componentProps: data
    });

    modal.onDidDismiss().then((response) => {
      if (response.data.saved) {
        this.getAllContacts();
      }
    });

    await modal.present();
  }

}
