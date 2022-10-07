import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add_todoComponent } from './add_todo.component';

describe('Add_todoComponent', () => {
  let component: Add_todoComponent;
  let fixture: ComponentFixture<Add_todoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Add_todoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Add_todoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
