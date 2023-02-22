import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService{
  accounts= [
    {
      name: 'Master account',
      status: 'active'
    },
    {
      name: 'Test account',
      status: 'inactive'
    },
        {
      name: 'hidden account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor( private logging: LoggingService){}

  addAcount(name: string, status: string){
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.logging.logStatusChange(status);
  
  }


}