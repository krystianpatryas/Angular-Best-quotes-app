import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();

  // Pole do ukrywania i pokazywania formularza
  showForm = true;

  // pole quotation reprezentuje pojedynczy cytat
  quotation: Quotation = { author: '', sentence: '', votes: 0 };

  // przełącza pole klasy true / false
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  // dodaje cytat na początek listy i resetuje pole quotation
  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }
}
