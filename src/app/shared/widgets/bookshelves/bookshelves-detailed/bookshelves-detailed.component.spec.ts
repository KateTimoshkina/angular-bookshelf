import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelvesDetailedComponent } from './bookshelves-detailed.component';

describe('BookshelvesDetailedComponent', () => {
  let component: BookshelvesDetailedComponent;
  let fixture: ComponentFixture<BookshelvesDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshelvesDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelvesDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
