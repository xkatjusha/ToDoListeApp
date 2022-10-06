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
  dateandhoures : string;

  constructor(public elementRef: ElementRef) {
    this.todorecords = "";
    this.dateandhoures="";


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
      console.log(this.deadlinerecords.setDate);
      this.dateandhoures=this.deadlinerecords.setDate+"."+this.deadlinerecords.setMonth+"."+this.deadlinerecords.setFullYear+" "+this.deadlinerecords.setHours+":"+this.deadlinerecords.setMinutes;
      console.log(this.dateandhoures);
      this.todo1.list.push(this.dateandhoures + " " + this.todorecords);
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
