import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptComponent } from './recipes.component';

describe('ReceptComponent', () => {
  let component: ReceptComponent;
  let fixture: ComponentFixture<ReceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
