import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remote3Component } from './remote3.component';

describe('Remote3Component', () => {
  let component: Remote3Component;
  let fixture: ComponentFixture<Remote3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Remote3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Remote3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
