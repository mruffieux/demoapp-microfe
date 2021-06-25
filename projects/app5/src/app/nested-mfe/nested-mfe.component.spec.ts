import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedMfeComponent } from './nested-mfe.component';

describe('NestedMfeComponent', () => {
  let component: NestedMfeComponent;
  let fixture: ComponentFixture<NestedMfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedMfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
