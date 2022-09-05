import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBoardComponent } from './digital-board.component';

describe('DigitalBoardComponent', () => {
  let component: DigitalBoardComponent;
  let fixture: ComponentFixture<DigitalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
