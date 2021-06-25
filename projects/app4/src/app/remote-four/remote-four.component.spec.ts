import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteFourComponent } from './remote-four.component';

describe('RemoteFourComponent', () => {
  let component: RemoteFourComponent;
  let fixture: ComponentFixture<RemoteFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
