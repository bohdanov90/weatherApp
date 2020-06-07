import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit, OnDestroy {
  public alertMessage: any;
  private onDestroy$: Subject<void> = new Subject();

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.getMessage()
    .pipe(
      takeUntil(this.onDestroy$),
    )
    .subscribe((message: string) => this.alertMessage = message);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
