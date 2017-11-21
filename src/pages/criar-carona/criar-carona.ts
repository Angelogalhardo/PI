import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';


@IonicPage()
@Component({
  selector: 'page-criar-carona',
  templateUrl: 'criar-carona.html',
})
export class CriarCaronaPage {
  carona: any = {
   idCarona: 0,
   localDeSaida: '',
   LocalDeChegada: '',
   lugar: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http : Http, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarCaronaPage');
  }

  homecadastrar() {
    let loader = this.loadingCtrl.create({
      content: "Cadastrando...",
      duration: 1500
    });
    loader.present();
  }

  cadastrarCarona (){
   var caronas = JSON.stringify(this.carona);
   var headers = new Headers();
   headers.append('Accept', 'application/json');
   headers.append('Content-Type', 'application/json' );
   let options = new RequestOptions({ headers: headers });


     this.http.post("https://carona-hfernan.c9users.io/carona", caronas, options).subscribe(data =>{
       let alert = this.alertCtrl.create({
         title: 'Carona cadastrada !',
         buttons: ["OK"]
       });
       alert.present();
       this.navCtrl.setRoot(InicioPage);
       }, error =>{
       let alert = this.alertCtrl.create({
         title: 'Não foi possivel realizar o cadastro da sua carona !',
         buttons: ["OK"]
       });
       alert.present();
       this.navCtrl.setRoot(InicioPage);
       });
  }

}
