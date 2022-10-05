import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Input() entry: string;
  inProgress: boolean;
  @Input() position: number;
  value: string;
  @Input() list: string[];

  constructor() {
    this.inProgress = false;
    this.list = [];
    this.value = "";
    this.entry = "";
    this.position = 0;
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
