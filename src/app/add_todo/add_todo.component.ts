import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add_todo',
  templateUrl: './add_todo.component.html',
  styleUrls: ['./add_todo.component.css']
})
export class Add_todoComponent {
  @ViewChild("newtodorecords", { static: false })
  newtodorecords!: ElementRef<HTMLInputElement>;
  @Input() todo1!: { name: any; list: string[]; };
  todorecords: string;
  deadlinerecords: Date | undefined;

  constructor(public elementRef: ElementRef) {
    this.todorecords = "";
    this.deadlinerecords = new Date();

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
      //this.dateandhoures= this.deadlinerecords;
      console.log(this.deadlinerecords);
      console.log(typeof this.deadlinerecords);
      
      //let year = this.deadlinerecords.split("-",1);
      //console.log(this.deadlinerecords.setDate);
      //this.dateandhoures=this.deadlinerecords.getDate+"."+this.deadlinerecords.getMonth+"."+this.deadlinerecords.getFullYear+" "+this.deadlinerecords.getHours+":"+this.deadlinerecords.getMinutes;
     // console.log(this.dateandhoures);
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
