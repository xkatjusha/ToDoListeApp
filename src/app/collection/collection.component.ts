import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  selectedList: any;

  constructor(public todoService: TodoService) {
    this.selectedList = todoService.todolist[0]
  }

  selectList(listTodo: any) {
    this.selectedList = listTodo;
  }
}
