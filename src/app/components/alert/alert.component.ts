import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  public alertMessage: any;
  private onDestroy$ = new Subject();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage()
    .pipe(
      takeUntil(this.onDestroy$),
    )
    .subscribe(message => this.alertMessage = message);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
