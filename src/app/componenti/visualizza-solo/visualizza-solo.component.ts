import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-visualizza-solo',
  templateUrl: './visualizza-solo.component.html',
  styleUrl: './visualizza-solo.component.css'
})
export class VisualizzaSoloComponent implements OnInit {
  rich:any
  statoIdApprovazione:any

  constructor(private route:ActivatedRoute, private router:Router){}
ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{
    this.rich = JSON.parse(params['pippo']);
  });
  this.inizializzaStatoIdValue()
}

tornaIndietro(){
  this.router.navigate(["/tabella1"])
}

inizializzaStatoIdValue() {
  this.statoIdApprovazione = this.rich.statoApprovazione === 0 ? 'PENDING_APPROVAL' : 'APPROVED';
}
}
