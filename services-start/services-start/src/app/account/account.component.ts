import { Component, Input } from '@angular/core';
import { AccountsService } from 'src/assets/Accounts.service';
import { LoggingService } from 'src/assets/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accService: AccountsService){
    this.accService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    )
  }

  onSetTo(status: string) {
    this.accService.updateStatus(this.id, status);
      //  this.loggingService.logStatusChange(status);
      this.accService.statusUpdated.emit(status);
  }
}
