import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftGivingComponent } from './gift-giving.component';

describe('GiftGivingComponent', () => {
  let component: GiftGivingComponent;
  let fixture: ComponentFixture<GiftGivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftGivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
