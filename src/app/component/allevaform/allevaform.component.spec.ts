import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllevaformComponent } from './allevaform.component';

describe('AllevaformComponent', () => {
  let component: AllevaformComponent;
  let fixture: ComponentFixture<AllevaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllevaformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllevaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
