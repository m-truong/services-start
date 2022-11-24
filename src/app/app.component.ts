import { Component, OnInit } from '@angular/core';
import { AccountsDataService } from './services/accounts-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly accountsDataService: AccountsDataService) {}

  accounts: { name: string; status: string }[] = [];

  ngOnInit() {
    this.accounts = this.accountsDataService.accounts;
  }
}
