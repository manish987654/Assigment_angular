import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {environment} from '../environments/environment'


@NgModule({
  declarations: [ 
    AppComponent
    ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    AngularFireAuthModule,

  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent],

})
export class AppModule { }
