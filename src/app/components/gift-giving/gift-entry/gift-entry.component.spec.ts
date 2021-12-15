import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftEntryComponent } from './gift-entry.component';

describe('GiftEntryComponent', () => {
  let component: GiftEntryComponent;
  let fixture: ComponentFixture<GiftEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
