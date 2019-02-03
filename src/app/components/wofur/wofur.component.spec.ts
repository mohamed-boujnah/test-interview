import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WofurComponent } from './wofur.component';

describe('WofurComponent', () => {
  let component: WofurComponent;
  let fixture: ComponentFixture<WofurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WofurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WofurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
