import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Alimento } from '../shared/models/alimento';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss'],
})
export class AlimentosComponent implements OnInit {
  alimentos!: Alimento[];
  p: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlimentos();
  }

  getAlimentos() {
    return this.http
      .get<Alimento>('assets/data/foodlist.json')
      .pipe(tap(console.log))
      .subscribe((alimentos) => (this.alimentos = alimentos));
  }
}
