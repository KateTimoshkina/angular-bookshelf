import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderEditComponent } from './reader-edit.component';

describe('ReaderEditComponent', () => {
  let component: ReaderEditComponent;
  let fixture: ComponentFixture<ReaderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
