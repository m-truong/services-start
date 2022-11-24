import { Component, OnInit } from '@angular/core';
import { AccountsDataService } from '../services/accounts-data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // NOTE: this implicitly tells Angular that when this component is initialized; it needs to PRIORITIZE intializing IT'S OWN COMPONENT-PROVIDER
  // NOTE: this takes precedence over the 'root' provider
  // providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    // private loggingService: LoggingService,
    // NOTE: but still need to KEEP AccountsDataService inside constructor ; but it REFERENCES the 'root' AccountsDataService
    private readonly accountsDataService: AccountsDataService
  ) {
    // This is ADDING an SUBSCRIBER-OBSERVER-LISTENER to the <app-new-account> component every time it's subscribed!
    // then inside te new-account.component.ts it uses the EventCommunicationService ACROSS COMPONENT-COMMUNICATION to ALERT
    this.accountsDataService.statusUpdated.subscribe((status: string) =>
      alert(`New Status: ${status}`)
    );
  }

  ngOnInit() {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsDataService.addAccount(accountName, accountStatus);
  }
}
