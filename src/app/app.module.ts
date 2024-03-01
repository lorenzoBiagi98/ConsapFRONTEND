import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Tabella1Component } from './componenti/tabella1/tabella1.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { ConnessioneService } from './servizi/connessione.service';
import { VisualizzaComponent } from './componenti/visualizza/visualizza.component';
import { LoginComponent } from './componenti/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { VisualizzaSoloComponent } from './componenti/visualizza-solo/visualizza-solo.component';
import { EliminaPUComponent } from './elimina-pu/elimina-pu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    Tabella1Component,
    VisualizzaComponent,
    LoginComponent,
    VisualizzaSoloComponent,
    EliminaPUComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    NgxPaginationModule,
    SlickCarouselModule,
    MatSelectModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    ConnessioneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
