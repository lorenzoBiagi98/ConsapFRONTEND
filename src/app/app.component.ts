import { Component, OnInit } from '@angular/core';
import { Richiesta } from './richiesta';
import { ConnessioneService } from './servizi/connessione.service';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ConsapFront';

  public richieste:Richiesta[];
  constructor(){}
}
