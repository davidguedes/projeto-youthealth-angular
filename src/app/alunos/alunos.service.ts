import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import { Aluno } from '../shared/models/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  constructor(private http: HttpClient) {}

  getAlunos() {
    return this.http
      .get<Aluno>('assets/data/alunos.json')
      .pipe(tap(console.log), filter((alunos) => alunos.id === 3));
  }

  getAluno(id: number) {
    let result;
    //return this.getAlunos().pipe(
    //  filter((alunos) => alunos.id === id)
    //);
    result = this.http.get<Aluno>('assets/data/alunos.json').pipe(
      filter((alunos) => alunos.id === id),
      tap(console.log)
    ).subscribe();


    console.log('teste'+result);
    return result;
  }
}
