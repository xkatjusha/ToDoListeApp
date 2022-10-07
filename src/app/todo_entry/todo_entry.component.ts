import { Component, Input } from '@angular/core';
import { Add_todoComponent } from './../add_todo/add_todo.component';

@Component({
  selector: 'app-todo_entry',
  templateUrl: './todo_entry.component.html',
  styleUrls: ['./todo_entry.component.scss']
})
export class Todo_entryComponent {
  @Input() entry: string;
  inProgress: boolean;
  @Input() position: number;
  value: string;
  @Input() list: string[];
  checked: boolean;

  constructor() {
    this.inProgress = false;
    this.list = [];
    this.value = "";
    this.entry = "";
    this.position = 0;
    this.checked = true;
  }

  erase() {
    this.list.splice(this.position, 1);
  }

  edit() {
    this.inProgress = true;
  }

  dismiss() {
    this.entry = this.list[this.position];
    this.inProgress = false;
  }

  save() {
    this.list.splice(this.position, 1, this.entry);
    this.inProgress = false;
  }

  up() {
    this.value = this.list[this.position];
    this.list[this.position] = this.list[this.position - 1];
    this.list[this.position - 1] = this.value;
  }

  down() {
    this.value = this.list[this.position];
    this.list[this.position] = this.list[this.position + 1];
    this.list[this.position + 1] = this.value;
  }
}
