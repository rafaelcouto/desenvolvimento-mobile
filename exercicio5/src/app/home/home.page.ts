import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagem: any = null;

  private options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera, private sn: DomSanitizer, private flashlight: Flashlight) { }

  ngOnInit() { }

  tirarFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.imagem = this.sn.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      alert('Não foi possível acessar a camera do dispositivo');
      console.log(err)
    });
  }

  acenderLanterna() {
    this.flashlight.switchOn().then(() => {}, (err) => {
      alert('Não foi possível acessar a lanterna do dispositivo');
      console.log(err)
    });
  }

  apagarLanterna() {
    this.flashlight.switchOff().then(() => {}, (err) => {
      alert('Não foi possível acessar a lanterna do dispositivo');
      console.log(err)
    });
  }
}
