import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remote1Component } from './remote1.component';

describe('Remote1Component', () => {
  let component: Remote1Component;
  let fixture: ComponentFixture<Remote1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Remote1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Remote1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
