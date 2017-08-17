import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsItemComponent } from './authors-item.component';

describe('AuthorsItemComponent', () => {
  let component: AuthorsItemComponent;
  let fixture: ComponentFixture<AuthorsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
