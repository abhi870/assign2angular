import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  constructor() { }
  note: string = null;
  ngOnInit(): void {
  }
  
  @Output() deleteNoteEvent = new EventEmitter();

  onDelete(){
    this.deleteNoteEvent.emit(this.note);
  }
}
