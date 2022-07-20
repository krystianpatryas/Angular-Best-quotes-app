import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // nowe pole reprezentującę listę cytatów
  quotes: Quotation[] = QUOTES;

  // metoda obsługuje głosowanie na konkretny cytat
  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation);
  }
}
