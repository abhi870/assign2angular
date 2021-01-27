import { Component, OnInit, Output, EventEmitter, Input, ɵɵtrustConstantResourceUrl } from '@angular/core';
@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  constructor() { }
  note: string = null;
  @Input() noteId = null;
  ngOnInit(): void {
    console.log("in app item on init")
    console.log("oninit: "+ this.noteId);
  }
  
  @Output() deleteNoteEvent = new EventEmitter();

  onDelete(){
    this.deleteNoteEvent.emit(this.noteId);
  }
}
