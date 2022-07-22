import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-votes-button',
  templateUrl: './votes-button.component.html',
  styleUrls: ['./votes-button.component.css']
})
export class VotesButtonComponent  {

 

  @Output() voteValue = new EventEmitter<number>();
}
