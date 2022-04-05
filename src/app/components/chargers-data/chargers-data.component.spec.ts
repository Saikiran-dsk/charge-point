import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargersDataComponent } from './chargers-data.component';

describe('ChargersDataComponent', () => {
  let component: ChargersDataComponent;
  let fixture: ComponentFixture<ChargersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargersDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
