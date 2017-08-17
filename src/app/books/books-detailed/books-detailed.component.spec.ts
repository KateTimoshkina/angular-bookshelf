import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDetailedComponent } from './books-detailed.component';

describe('BooksDetailedComponent', () => {
  let component: BooksDetailedComponent;
  let fixture: ComponentFixture<BooksDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
