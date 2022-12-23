import { Component } from '@angular/core';
import { BehaviorSubject, first, switchMap } from 'rxjs';
import { SocketService } from './socket.service';

@Component({
  selector: 'dlink-w115-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dlink-w115-fe';

  reload$ = new BehaviorSubject(undefined);

  getStatus$ = this.reload$.pipe(
    switchMap(() => this.socketService.getStatus$())
  );

  constructor(private readonly socketService: SocketService) {}

  toggle() {
    this.socketService
      .toggleSocket$()
      .pipe(first())
      .subscribe(() => {
        this.reload$.next(undefined);
      });
  }
}
