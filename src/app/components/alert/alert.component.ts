import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  public alertMessage: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => this.alertMessage = message);
  }
}
