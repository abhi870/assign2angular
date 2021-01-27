import { Injectable } from '@angular/core';

export interface ISection {
    sectionName: string;
    notes: string[];
}

@Injectable(
    {
        providedIn:'root'
    }
)
export class IdMaintainer {
    noteId = 0;

    updateId() {
        this.noteId = this.noteId + 1;
    }
    getId() {
        return this.noteId;
    }
}