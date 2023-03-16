import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGroupComponent } from './board-group.component';

describe('BoardGroupComponent', () => {
  let component: BoardGroupComponent;
  let fixture: ComponentFixture<BoardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
