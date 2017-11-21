import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarCaronaPage } from './criar-carona';

@NgModule({
  declarations: [
    CriarCaronaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarCaronaPage),
  ],
})
export class CriarCaronaPageModule {}
