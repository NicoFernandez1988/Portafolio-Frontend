import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioComponent } from './estudio.component';

describe('EducacionComponent', () => {
  let component: EstudioComponent;
  let fixture: ComponentFixture<EstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
