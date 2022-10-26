import { FormGroup } from '@angular/forms';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorResponseMessage, SuccessMessageResponse } from '../models/common/response.model';
import { BroadcastService } from '../services/common/broadcast.service';
import { RouteService } from '../services/common/route.service';

@Component({
  template: ''
})
export abstract class BaseComponent implements OnDestroy {
  public errors: any;
  public broadCastSuccess = true;
  public actionSubscription: any;

  constructor(public broadCastService: BroadcastService,
    public routeService: RouteService) {
  }

  public startProgress(): void {
    this.broadCastService.progressStarted();

  }

  public endProgress(): void {
    this.broadCastService.progressEnded();
  }

  public isValid(form: FormGroup): boolean {
    return true;
  }

  public ngOnDestroy(): void {
    if (this.actionSubscription) {
      this.actionSubscription.unsubscribe();
    }
  }

  public broadCastSuccessExecution(message: SuccessMessageResponse) {
    this.broadCastService.success(message);
  }
}
