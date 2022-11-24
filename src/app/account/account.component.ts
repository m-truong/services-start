import { Component, Input } from '@angular/core';
import { AccountsDataService } from '../services/accounts-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private readonly accountsDataService: AccountsDataService) {}

  onSetTo(status: string) {
    this.accountsDataService.updateStatus(this.id, status);
    // since accounts-data.service.ts Doesn't @Output an eventEmitter
    this.accountsDataService.statusUpdated.emit(status);
  }
}
