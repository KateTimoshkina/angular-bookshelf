import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsDetailedComponent } from './authors-detailed.component';

describe('AuthorsDetailedComponent', () => {
  let component: AuthorsDetailedComponent;
  let fixture: ComponentFixture<AuthorsDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
