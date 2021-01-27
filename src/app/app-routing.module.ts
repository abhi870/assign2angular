import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"home", component:SectionsComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
