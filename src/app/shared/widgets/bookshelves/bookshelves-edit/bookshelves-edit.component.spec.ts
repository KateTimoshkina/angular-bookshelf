import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelvesEditComponent } from './bookshelves-edit.component';

describe('BookshelvesEditComponent', () => {
  let component: BookshelvesEditComponent;
  let fixture: ComponentFixture<BookshelvesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshelvesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelvesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
