import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {PayedPageComponent} from "./payed-page/payed-page.component";
import {CreateArdoiseComponent} from "./create-ardoise/create-ardoise.component";
import {ArdoiseListComponent} from "./ardoise-list/ardoise-list.component";
import {ArdoiseComponent} from "./ardoise/ardoise.component";

const routes: Routes = [ {path: '', component: LandingPageComponent},
                        {path: 'payed', component: PayedPageComponent},
                        {path: 'ardoise', component: CreateArdoiseComponent},
                        {path: 'ardoise/:id', component: ArdoiseComponent},
                        {path: 'listofardoise', component: ArdoiseListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
