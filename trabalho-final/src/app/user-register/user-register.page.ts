import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {

  private user = {};

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  register() {

    this.api.registerUser(this.user)
      .then(async (response) => {

        const alert = await this.alertCtrl.create({
          message: 'Usuário registrado com sucesso',
          buttons: ['OK']
        });

        await alert.present();

        this.dismiss();

      }).catch(async response => {

        let data = JSON.parse(response.error);

        const alert = await this.alertCtrl.create({
          message: data.error,
          buttons: ['OK']
        });

        await alert.present();

      });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
