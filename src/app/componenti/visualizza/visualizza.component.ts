import { Component, OnInit, ViewChild } from '@angular/core';
import { Tabella1Component } from '../tabella1/tabella1.component';
import { Richiesta } from '../../richiesta';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnessioneService } from '../../servizi/connessione.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { EliminaPUComponent } from '../../elimina-pu/elimina-pu.component';
3;

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrl: './visualizza.component.css',
})
export class VisualizzaComponent implements OnInit {
  rich: any;
  myForm: FormGroup;
  originalForm: FormGroup;
  originalValues: any;
  statoId: any;

  @ViewChild('menu') menu: MatMenuTrigger;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private connessione: ConnessioneService,
    private dialogRef: MatDialog
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.rich = JSON.parse(params['pippo']);
      this.statoId = this.rich.stato.id;

      //this.originalValues = JSON.parse(JSON.stringify(this.rich));
      this.originalForm = this.formBuilder.group({
        id: [this.rich.id || ''],
        idCommessa: [{ value: this.rich.idCommessa, disabled: true }],
        stato: [this.statoId],
        dataCreazione: [
          { value: this.rich.dataCreazione || '', disabled: true },
        ],
        oggetto: [this.rich.oggetto || ''],
        dataInserimento: [this.rich.dataInserimento || ''],
        dataModifica: [this.rich.dataModifica || ''],
        statoApprovazione: [this.getStatoApprovazione()],
        note: [this.rich.note || ''],
        campo1: [this.rich.campo1 || ''],
        campo2: [this.rich.campo2 || ''],
        campo3: [this.rich.campo3 || ''],
        campo4: [this.rich.campo4 || ''],
        utenteCreazione: [this.rich.utentecreazione || ''],
        utenteModifica: [this.rich.utenteModifica || ''],
      });
    });
    this.myForm = this.formBuilder.group({
      id: [this.rich.id || ''],
      idCommessa: [{ value: this.rich.idCommessa, disabled: true }],
      stato: [this.statoId],
      dataCreazione: [{ value: this.rich.dataCreazione || '', disabled: true }],
      oggetto: [this.rich.oggetto || ''],
      dataInserimento: [this.rich.dataInserimento || ''],
      dataModifica: [this.rich.dataModifica || ''],
      statoApprovazione: [this.getStatoApprovazione()],
      note: [this.rich.note || ''],
      campo1: [this.rich.campo1 || ''],
      campo2: [this.rich.campo2 || ''],
      campo3: [this.rich.campo3 || ''],
      campo4: [this.rich.campo4 || ''],
      utenteCreazione: [this.rich.utentecreazione || ''],
      utenteModifica: [this.rich.utenteModifica || ''],
    });
  }

  getStatoApprovazione(): string {
    return this.rich.statoApprovazione === 0 ? 'PENDING_APPROVAL' : 'APPROVED';
  }

  /*
  putRichiesta(): void {
    const richiesta = this.myForm.value; 
    const id = richiesta.id; 
    const stato = this.rich.stato
    richiesta.stato = stato
    console.log(JSON.stringify(stato) + "stato da mandare")
    const statoApprovazione = this.rich.statoApprovazione
    richiesta.statoApprovazione = statoApprovazione
    this.connessione.putRichiesta(richiesta, id).subscribe(response => {
   // console.log(response)
  });
  }
  */

  putRichiesta(): void {
    if (this.rich) {
      const richiesta = this.myForm.value;
      const id = richiesta.id;
     // const stato = richiesta.stato;

     const stato = { id: richiesta.stato }; 
     console.log(stato + "3stato1")
      //const statoApprovazione = this.rich.statoApprovazione
      //richiesta.statoApprovazione = statoApprovazione
      const statoApprovazione =
        this.myForm.get('statoApprovazione')!.value;
        const statoAppDef = statoApprovazione === 'PENDING_APPROVAL'? 0:1;
      //richiesta.stato = stato
     // const statoJson = JSON.parse(statoString);

    richiesta.stato = stato;
      console.log(richiesta.stato + "stato2")
      richiesta.statoApprovazione = statoAppDef;
      const dialogRef = this.dialogRef.open(EliminaPUComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.connessione.putRichiesta(richiesta, id).subscribe((response) => {
            console.log(JSON.stringify(response) + 'questo è da inviare');
          });
        }
      });
    } else {
      console.error("L'oggetto 'rich' non è definito.");
    }
  }

  //NON INVIA IL JSON, HO PROBLEMI SOLO CON STATO

  /*
  putRichiesta():void{
    const richiesta = this.myForm.value; 
    const id2 = richiesta.id; 
    const jsonData = this.sendJson();
    const id = jsonData.id;
    this.connessione.putRichiesta(jsonData,id2)
  }

  sendJson(): any {

    const jsonData = {
      id: this.rich.id,
      idCommessa: this.rich.idCommessa,
      stato: { id: this.rich.stato.id },
      dataCreazione: this.rich.dataCreazione,
      oggetto: this.rich.oggetto,
      dataInserimento: this.rich.dataInserimento,
      dataModifica: this.rich.dataModifica,
      statoApprovazione: this.rich.statoApprovazione,
      note: this.rich.note,
      campo1: this.rich.campo1,
      campo2: this.rich.campo2,
      campo3: this.rich.campo3,
      campo4: this.rich.campo4,
      utenteCreazione: this.rich.utentecreazione || '',
      utenteModifica: this.rich.utenteModifica || '',
    };

    console.log(JSON.stringify(jsonData) + "jsonData")
    return jsonData;
  }
  */

  annullaModifiche() {
    this.myForm.setValue(this.originalForm.getRawValue());
  }

  tornaIndietro() {
    this.router.navigate(['/tabella1']);
  }
}
