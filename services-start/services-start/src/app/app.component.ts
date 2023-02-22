import { Component } from '@angular/core';
import { AccountsService } from 'src/assets/Accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accounts: {name: string, status: string}[] = [];
  
  constructor(private accountsService: AccountsService) {
    this.accounts = this.accountsService.accounts;

  }
  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
