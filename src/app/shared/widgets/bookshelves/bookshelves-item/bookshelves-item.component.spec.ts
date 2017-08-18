import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelvesItemComponent } from './bookshelves-item.component';

describe('BookshelvesItemComponent', () => {
  let component: BookshelvesItemComponent;
  let fixture: ComponentFixture<BookshelvesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshelvesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelvesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
