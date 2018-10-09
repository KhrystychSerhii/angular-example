import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedOutLayoutComponent } from './logged-out-layout.component';

describe('LoggedOutLayoutComponent', () => {
  let component: LoggedOutLayoutComponent;
  let fixture: ComponentFixture<LoggedOutLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedOutLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedOutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
