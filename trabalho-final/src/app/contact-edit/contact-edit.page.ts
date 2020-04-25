import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.page.html',
  styleUrls: ['./contact-edit.page.scss'],
})
export class ContactEditPage implements OnInit {

  private contact = {};
  private user = {};

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private api: ApiService,
    private auth: AuthService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

    this.auth.getLoggedUser().then((user) => {

      if (!user) {
        this.navCtrl.navigateRoot('/login');
        return;
      }

      this.user = user;

    });

  }

  isUpdating() {
    return (this.contact['_id']);
  }

  save() {

    let promise;

    if (this.isUpdating()) {
      promise = this.api.updateContact(this.user['_id'], this.contact);
    } else {
      promise = this.api.createContact(this.user['_id'], this.contact);
    }

    promise.then(async response => {

      const toast = await this.toastCtrl.create({
        message: 'Contato salvo com sucesso',
        duration: 2000,
      });

      toast.present();

      this.dismiss(true);

    }).catch(async response => {

      let data = JSON.parse(response.error);

      const alert = await this.alertCtrl.create({
        message: data.error,
        buttons: ['OK']
      });

      await alert.present();

      return;

    });
  }

  async delete() {

    const alert = await this.alertCtrl.create({
      message: 'Deseja excluir o contato?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Excluir',
          handler: () => {

            this.api.deleteContact(this.user['_id'], this.contact)
              .then(async response => {

                const toast = await this.toastCtrl.create({
                  message: 'Contato excluído com sucesso',
                  duration: 2000,
                });
          
                toast.present();

                this.dismiss(true);
              });

          }
        }
      ]
    });

    await alert.present();
  }

  dismiss(saved = false) {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'saved': saved
    });
  }

}
