import {Component, OnInit, OnDestroy, ViewEncapsulation, Input} from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from '../../create.service';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-account-create-pin',
    styleUrls: ['./pin.component.scss'],
    templateUrl: './pin.component.html'
})
export class AccountCreatePinComponent implements OnInit {

  @Input('pin') pin: string;

  constructor(
        private router: Router,
        private createService: CreateService,
        private notificationService: NotifierService,
    ) { }

    public ngOnInit() {

    }

    public ngOnDestroy() {

    }

    public back() {
        this.createService.setStepIndex(1);
    }

    public finish(pin: string) {
        this.createService.setPin(pin);
        this.createService.createActiveAccount().then((success) => {
            this.notificationService.notify('success', `Account added successfully`);
            this.createService.reset();
            // Angular Stepper hack
            setTimeout(x => {
                this.createService.setStepIndex(0);
            }, 0);
            this.router.navigate(['/']);
          },
          (error) => {
            this.notificationService.notify('error', error.toString());
          });
    }

}
