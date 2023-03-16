import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardGroupComponent } from './components/board-group/board-group.component';
import { BoardItemGroupComponent } from './components/board-item-group/board-item-group.component';
import { BoardItemComponent } from './components/board-item/board-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardGroupComponent,
    BoardItemGroupComponent,
    BoardItemComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
