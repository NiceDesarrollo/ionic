import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"ionic-b9598","appId":"1:569054888168:web:744674142a87178198495d","storageBucket":"ionic-b9598.appspot.com","apiKey":"AIzaSyDF899u455CrLGO9x3mVk-yyVRPHUsX1mA","authDomain":"ionic-b9598.firebaseapp.com","messagingSenderId":"569054888168","measurementId":"G-SNZ1JX24Z4"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
