import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage} from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { CriarCaronaPage } from '../pages/criar-carona/criar-carona';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    CadastroPage,
    CriarCaronaPage

  ],
  imports: [
    BrowserModule,
  HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    CadastroPage,
    CriarCaronaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
