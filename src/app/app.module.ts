import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { Add_todoComponent } from './add_todo/add_todo.component';
import { Todo_entryComponent } from './todo_entry/todo_entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    Add_todoComponent,
    Todo_entryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
