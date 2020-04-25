import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { UserRegisterPage } from '../user-register/user-register.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user = {
    email: null,
    password: null
  };

  constructor(
    private api: ApiService,
    private navCtrl: NavController,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

    this.auth.getLoggedUser().then((user) => {
      if (user) {
        this.goToIndexPage();
      }
    });
    
  }

  login() {

    this.api.login(this.user)
      .then(response => {
        this.auth.login(JSON.parse(response.data).user[0]);
        this.goToIndexPage();
      }).catch(async response => {

        let data = JSON.parse(response.error);

        const alert = await this.alertCtrl.create({
          message: data.message,
          buttons: ['OK']
        });

        await alert.present();

      });

  }

  goToIndexPage() {
    this.navCtrl.navigateRoot('/contact/list');
  }

  async register() {

    const modal = await this.modalCtrl.create({
      component: UserRegisterPage,
    });

    await modal.present();

  }

}
