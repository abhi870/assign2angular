import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ISection, IdMaintainer } from '../shared';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private idMaintainer: IdMaintainer) { }


  @Input() section: ISection = null;
  @Output() closeSection = new EventEmitter();
  notes: string[] = null;
  noteId = null;
  sectionName: string = null;
  ngOnInit(): void {
    this.noteId = this.idMaintainer.getId();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.notes = this.section.notes;
    this.sectionName = this.section.sectionName;
    this.noteId = this.idMaintainer.getId();
  }
  closeSectionEvent(event) {
    this.closeSection.emit(event);
  }
  onDelete(event) {
    let tmpNotes = [];
    for (let k = 0; k < this.notes.length; k++) {
      if (this.notes[k] !== event)
      tmpNotes.push(event);
    }
    this.notes = tmpNotes;
    // this.section.notes = tmpNotes;
  }

}
