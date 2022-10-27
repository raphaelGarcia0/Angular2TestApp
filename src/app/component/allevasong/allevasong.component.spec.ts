import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllevasongComponent } from './allevasong.component';

describe('AllevasongComponent', () => {
  let component: AllevasongComponent;
  let fixture: ComponentFixture<AllevasongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllevasongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllevasongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
