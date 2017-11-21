import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

 usuario: any = {
  id: 0,
  nomeUsuario: '',
  sexo: '',
  email: '',
  senha: '',
  motorista: ''
 };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http : Http, public loadingCtrl: LoadingController) {}


  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroPage');
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }

  homecadastrar() {
    let loader = this.loadingCtrl.create({
      content: "Cadastrando...",
      duration: 1500
    });
    loader.present();
  }

 cadastrar (){
  this.usuario.motorista = parseInt(this.usuario.motorista);
  var usuarios = JSON.stringify(this.usuario);
  var headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json' );
  let options = new RequestOptions({ headers: headers });


    this.http.post("https://carona-hfernan.c9users.io/usuarios", usuarios, options).subscribe(data =>{
    let alert = this.alertCtrl.create({
      title: 'Cadastrado com sucesso !',
      buttons: ["OK"]
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
    }, error =>{
    let alert = this.alertCtrl.create({
      title: 'Não foi possivel realizar seu cadastro !',
      buttons: ["OK"]
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
    });
 }
}
