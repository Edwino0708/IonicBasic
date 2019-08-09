import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
  titulo: string;

  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Cancel');
          }
        },
        {
          text: 'Ok',
          handler: blah => {
            console.log('OK');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Escriba su Nombre',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Placeholder 1'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log(name);
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.titulo = data['name'];
          }
        }
      ]
    });

    await alert.present();
  }
}
