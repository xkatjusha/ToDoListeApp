import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist;

  constructor() {
    let ToDo1 = {
      name: "Tages-ToDo",
      list: ["kochen", "hausaufgaben"]
    }

    let ToDo2 = {
      name: "Essen-ToDo",
      list: ["wake up", "zähne putzen"]
    }

    let ToDo3 = {
      name: "Workout-ToDo",
      list: ["Push up", "Laufen 5km"]
    }
    this.todolist = [ToDo1, ToDo2, ToDo3];
  }
}
