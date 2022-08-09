import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { PayedBlockComponent } from './payed-block/payed-block.component';
import { PayedPageComponent } from './payed-page/payed-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateArdoiseComponent } from './create-ardoise/create-ardoise.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { ArdoiseComponent } from './ardoise/ardoise.component';
import { ArdoiseListComponent } from './ardoise-list/ardoise-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    PayedBlockComponent,
    PayedPageComponent,
    CreateArdoiseComponent,
    AddParticipantComponent,
    ArdoiseComponent,
    ArdoiseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
