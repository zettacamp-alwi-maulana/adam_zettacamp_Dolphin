import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessComponentComponent } from './fitness-component.component';

describe('FitnessComponentComponent', () => {
  let component: FitnessComponentComponent;
  let fixture: ComponentFixture<FitnessComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
