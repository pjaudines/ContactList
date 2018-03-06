import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';


// Paste in your credentials that you saved earlier
var firebaseConfig = {
  apiKey: "AIzaSyBqJbelHQJJO83Z7dy4Koo0ojYA9l-fciw",
    authDomain: "contact-5e2de.firebaseapp.com",
    databaseURL: "https://contact-5e2de.firebaseio.com",
    projectId: "contact-5e2de",
    storageBucket: "contact-5e2de.appspot.com",
    messagingSenderId: "194852716849"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,
    FormsModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}