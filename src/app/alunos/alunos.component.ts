import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Aluno } from '../shared/models/aluno';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit, OnDestroy {
  alunos!: Aluno[];
  insc!: Subscription;

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.insc = this.alunosService
      .getAlunos()
      .subscribe((alunos) => (this.alunos = alunos));

      this.alunosService.getAluno(3);
  }

  ngOnDestroy() {
    this.insc.unsubscribe();
  }
}
