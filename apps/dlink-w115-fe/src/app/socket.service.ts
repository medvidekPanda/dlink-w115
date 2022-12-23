import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private readonly http: HttpClient) {}

  getStatus$() {
    return this.http.get('http://localhost:3333/api/status').pipe(
      shareReplay(),
      map((value: any) => {
        return value.status ? 'Zapnuto' : 'Vypnuto';
      })
    );
  }

  toggleSocket$() {
    return this.http
      .get('http://localhost:3333/api/toggle')
      .pipe(shareReplay());
  }
}
