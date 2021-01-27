import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ISection } from '../shared';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  @Input() section: ISection = null;
  @Output() closeSection = new EventEmitter();
  notes: string[] = null;
  sectionName: string = null;
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.notes = this.section.notes;
    this.sectionName = this.section.sectionName;
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
