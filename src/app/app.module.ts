import { UserDetailsComponent } from './user-details/user-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { UserRatingformComponent } from './user-ratingform/user-ratingform.component';

const routes: Routes = [
  {path: 'employees/:id', component: UserDetailsComponent},
  {path: 'employees', component: UserListComponent},
  {path: 'rating/:id', component: UserRatingformComponent}

];

@NgModule({
   declarations: [
      AppComponent,
      UserProfileComponent,
      UserListComponent,
      UserDetailsComponent,
      UserRatingformComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      RouterModule.forRoot(routes),
      MatCardModule,
      MatButtonModule,
      MatGridListModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   exports: [
      UserProfileComponent,
      UserListComponent,
      UserDetailsComponent
   ]
})
export class AppModule { }
