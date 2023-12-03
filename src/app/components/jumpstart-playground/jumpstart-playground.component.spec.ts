import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpstartPlaygroundComponent } from './jumpstart-playground.component';

describe('JumpstartPlaygroundComponent', () => {
  let component: JumpstartPlaygroundComponent;
  let fixture: ComponentFixture<JumpstartPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpstartPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumpstartPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
