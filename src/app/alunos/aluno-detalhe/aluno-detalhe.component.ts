import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  id!: number;
  insc!: Subscription;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.insc = this.route.params.subscribe((params: any)=>{
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.insc.unsubscribe();
  }
}
