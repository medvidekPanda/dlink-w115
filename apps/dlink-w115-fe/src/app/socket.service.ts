import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private readonly http: HttpClient) {}

  getStatus$() {
    return this.http.get(`${environment.apiUrl}/status`).pipe(
      shareReplay(),
      map((value: any) => {
        return value.status ? 'Zapnuto' : 'Vypnuto';
      })
    );
  }

  toggleSocket$() {
    return this.http.get(`${environment.apiUrl}/toggle`).pipe(shareReplay());
  }
}
