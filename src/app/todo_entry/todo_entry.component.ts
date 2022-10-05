import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo_entry',
  templateUrl: './todo_entry.component.html',
  styleUrls: ['./todo_entry.component.css']
})
export class Todo_entryComponent {
  @ViewChild("newtodorecords", { static: false })
  newtodorecords!: ElementRef<HTMLInputElement>;
  @Input() todo1!: { name: any; list: string[]; };
  todorecords: string;
  deadlinerecords: Date | undefined;

  constructor(public elementRef: ElementRef) {
    this.todorecords = "";


  }

  add() {
    if (this.deadlinerecords == undefined && this.todorecords.length == 0) {
      alert("Gebe eine To-Do ein!");
    }
    else if (this.todorecords.length == 0) {
      alert("Gebe eine To-Do ein!");
    }
    else if (this.deadlinerecords == undefined) {
      this.todo1.list.push(this.todorecords);
    }
    else {
      this.todo1.list.push(this.deadlinerecords + " " + this.todorecords);
    }

    console.log(this.todo1.list);
    this.clear();
  }

  clear() {
    this.newtodorecords.nativeElement.value = "";
    this.deadlinerecords = undefined;
    this.todorecords = "";
  }
}
