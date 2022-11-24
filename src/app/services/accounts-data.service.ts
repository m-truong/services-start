import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root',
})
export class AccountsDataService {
  constructor(private loggingService: LoggingService) {}
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  // NOTE: you can use EventEmitters() WITHOUT @Output decorator
  // that means this 'service' doesn't @Output to THE PARENT COMPONENT
  // THEREFORE, that means this is GOING TO BE ASYNCHRONOUSLY OUTPUTED and must be .subscribed() to since an EventEmitter is just an observable
  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logToConsole(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logToConsole(status);
  }
}
