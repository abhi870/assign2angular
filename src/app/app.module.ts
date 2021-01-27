import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionComponent } from './section/section.component';
import { SectionsComponent } from './sections/sections.component';
import { IdMaintainer } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BoardItemComponent,
    SectionHeaderComponent,
    SectionComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
