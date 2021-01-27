import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISection } from '../shared';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  constructor() { }
  @Input() section: ISection = null;
  @Output() closeSectionEvent = new EventEmitter();
  ngOnInit(): void {
  }
  createNote() {
    this.section.notes.push("new Note");
    console.log("section Header");
    console.log(this.section);
  }
  closeSection(){
    this.closeSectionEvent.emit(this.section.sectionName);
  }

}
