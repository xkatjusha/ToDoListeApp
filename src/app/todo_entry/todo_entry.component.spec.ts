import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo_entryComponent } from './todo_entry.component';

describe('Todo_entryComponent', () => {
  let component: Todo_entryComponent;
  let fixture: ComponentFixture<Todo_entryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Todo_entryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Todo_entryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
