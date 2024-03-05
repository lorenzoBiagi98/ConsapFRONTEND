import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, getNgModuleById } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ConnessioneService } from '../../servizi/connessione.service';
import { Richiesta } from '../../richiesta';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { response } from 'express';
import { MatDialog } from '@angular/material/dialog';
import { EliminaPUComponent } from '../../elimina-pu/elimina-pu.component';

@Component({
  selector: 'app-tabella1',
  templateUrl: './tabella1.component.html',
  styleUrl: './tabella1.component.css',
})
export class Tabella1Component implements OnInit {
  totalLength: any;
  page: number;

  constructor(
    private connessione: ConnessioneService,
    private router: Router,
    private dialogRef: MatDialog
  ) {}
  pippo: any;
  public richieste: Richiesta[] = [];
  ngOnInit(): void {
    console.log(this.richieste + ' richieste');
    this.richieste = [];
    this.getRichieste();
  }

  public getRichieste(): void {
    this.connessione
      .getRichieste()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(
            'Si è verificato un errore durante il recupero delle richieste:',
            error
          );
          // Ritorna un observable vuoto o l'errore stesso
          return throwError(error);
        })
      )
      .subscribe((response: Richiesta[]) => {
        this.richieste = response;
      });
  }

  redirect(richiesta: any) {
    console.log(JSON.stringify(richiesta) + 'invio?');
    console.log('CI SONO');
    this.router.navigate(['/visualizza'], {
      queryParams: { pippo: JSON.stringify(richiesta) },
    });
  }

  redirect1(richiesta: any) {
    console.log(JSON.stringify(richiesta) + 'invio?');
    console.log('CI SONO');
    this.router.navigate(['/visualizzaSolo'], {
      queryParams: { pippo: JSON.stringify(richiesta) },
    });
  }

  getStatoString(id: number): string {
    switch (id) {
      case 1:
        return 'Open';
      case 2:
        return 'Assigned';
      case 3:
        return 'OTE CONSEGNATO';
      case 4:
        return 'APPR. CODIFICA E TEST';
      default:
        return '';
    }
  }
  /*
  onDelete(id: number): void {
    const dialogRef = this.dialogRef.open(EliminaPUComponent);
    /*
   this.connessione.deleteRichiesta(id).subscribe((response) => {
    console.log(JSON.stringify(response) + 'questo è da inviare');
  });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.connessione.deleteRichiesta(id).subscribe((response) => {
          console.log(JSON.stringify(response) + 'questo è da inviare');
        });
      }
    });
    window.location.reload();
  }
  */
  onDelete(id: number): void {
    const dialogRef = this.dialogRef.open(EliminaPUComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.connessione.deleteRichiesta(id).subscribe((response) => {
          console.log(JSON.stringify(response) + 'questo è da inviare');
          window.location.reload(); // Ricarica la pagina solo dopo aver confermato l'eliminazione
        });
      }
    });
  }
}
