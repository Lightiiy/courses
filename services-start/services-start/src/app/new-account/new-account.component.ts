import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from 'src/assets/Accounts.service';
import { LoggingService } from 'src/assets/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountsService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAcount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
