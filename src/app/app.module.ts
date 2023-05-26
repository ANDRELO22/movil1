import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { environment } from '../environments/environment';

import { initializeApp, provideFirebaseApp } from'@angular/fire/app'

import { provideFirestore, getFirestore } from '@angular/fire/firestore'



@NgModule({
  declarations: [AppComponent],
  imports: 
  [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
