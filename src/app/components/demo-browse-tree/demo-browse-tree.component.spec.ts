import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBrowseTreeComponent } from './demo-browse-tree.component';

describe('DemoBrowseTreeComponent', () => {
  let component: DemoBrowseTreeComponent;
  let fixture: ComponentFixture<DemoBrowseTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoBrowseTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoBrowseTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
