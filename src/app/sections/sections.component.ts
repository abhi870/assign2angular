import { Component, OnInit } from '@angular/core';
import { ISection } from '../shared';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor() { }
  sections: ISection[] = [];
  ngOnInit(): void {
  }

  onAddSection(event) {
    if (event.length != 0)
      this.sections.push({ sectionName: event, notes: [] });
    console.log("success");
  }
  closeSectionEvent(event) {
    let updatedArr = [];
    for (let k = 0; k < this.sections.length; k++) {
      if (this.sections[k].sectionName !== event)
      updatedArr.push(this.sections[k]);
    }
    this.sections = updatedArr;
  }

}
